import { defaultLandingPageData } from "./default-content";
import type {
    CtaPanel,
    FaqItem,
    FeatureItem,
    HeroSection,
    LandingPageData,
    Metric,
    NavLink,
    Office,
    ProcessStep,
    Service,
    SiteSettings,
    Testimonial,
} from "../types/landing";

const STRAPI_URL = import.meta.env.STRAPI_URL ?? "http://localhost:1337";
const STRAPI_API_TOKEN = import.meta.env.STRAPI_API_TOKEN;

const toString = (value: unknown, fallback = ""): string =>
    typeof value === "string" ? value : fallback;

const toNumber = (value: unknown, fallback = 0): number =>
    typeof value === "number" ? value : fallback;

const toBoolean = (value: unknown, fallback = false): boolean =>
    typeof value === "boolean" ? value : fallback;

const toArray = <T>(value: unknown): T[] => (Array.isArray(value) ? value : []);

const unwrapSingle = <T extends Record<string, unknown>>(
    payload: unknown,
): T | null => {
    const data = (payload as { data?: unknown } | null)?.data;

    if (!data || Array.isArray(data)) {
        return null;
    }

    const maybeV4Attributes = (data as { attributes?: T }).attributes;
    return (maybeV4Attributes ?? data) as T;
};

const withBaseUrl = (url: string): string => {
    if (url.startsWith("http://") || url.startsWith("https://")) {
        return url;
    }
    return `${STRAPI_URL}${url}`;
};

const toMediaUrl = (value: unknown): string | null => {
    if (!value || typeof value !== "object") {
        return null;
    }

    const directUrl = toString((value as { url?: unknown }).url);
    if (directUrl) {
        return withBaseUrl(directUrl);
    }

    const maybeData = (value as { data?: unknown }).data;
    if (!maybeData || typeof maybeData !== "object") {
        return null;
    }

    const maybeV4 = (maybeData as { attributes?: { url?: unknown } }).attributes;
    const nestedUrl = toString(maybeV4?.url ?? (maybeData as { url?: unknown }).url);
    return nestedUrl ? withBaseUrl(nestedUrl) : null;
};

const toMediaArray = (value: unknown): string[] => {
    const candidates = Array.isArray(value)
        ? value
        : toArray<unknown>((value as { data?: unknown } | null)?.data);

    return candidates
        .map((item) => toMediaUrl(item))
        .filter((item): item is string => Boolean(item));
};

const parseNavLinks = (value: unknown, fallback: NavLink[]): NavLink[] => {
    const links = toArray<Record<string, unknown>>(value)
        .map((item) => ({
            label: toString(item.label),
            href: toString(item.href),
            openInNewTab: toBoolean(item.openInNewTab),
        }))
        .filter((item) => item.label && item.href);

    return links.length > 0 ? links : fallback;
};

const parseFeatureItems = (
    value: unknown,
    fallback: FeatureItem[],
): FeatureItem[] => {
    const items = toArray<Record<string, unknown>>(value)
        .map((item) => ({
            title: toString(item.title),
            description: toString(item.description),
        }))
        .filter((item) => item.title && item.description);

    return items.length > 0 ? items : fallback;
};

const parseMetrics = (value: unknown, fallback: Metric[]): Metric[] => {
    const items = toArray<Record<string, unknown>>(value)
        .map((item) => ({
            value: toString(item.value),
            label: toString(item.label),
            note: toString(item.note),
        }))
        .filter((item) => item.value && item.label);

    return items.length > 0 ? items : fallback;
};

const parseServices = (value: unknown, fallback: Service[]): Service[] => {
    const items = toArray<Record<string, unknown>>(value)
        .map((item) => ({
            title: toString(item.title),
            description: toString(item.description),
            idealFor: toString(item.idealFor),
            outcome: toString(item.outcome),
        }))
        .filter((item) => item.title && item.description);

    return items.length > 0 ? items : fallback;
};

const parseSteps = (value: unknown, fallback: ProcessStep[]): ProcessStep[] => {
    const items = toArray<Record<string, unknown>>(value)
        .map((item) => ({
            stepNumber: toNumber(item.stepNumber),
            title: toString(item.title),
            description: toString(item.description),
        }))
        .filter((item) => item.stepNumber > 0 && item.title && item.description)
        .sort((a, b) => a.stepNumber - b.stepNumber);

    return items.length > 0 ? items : fallback;
};

const parseTestimonials = (
    value: unknown,
    fallback: Testimonial[],
): Testimonial[] => {
    const items = toArray<Record<string, unknown>>(value)
        .map((item) => ({
            quote: toString(item.quote),
            authorName: toString(item.authorName),
            authorRole: toString(item.authorRole),
            company: toString(item.company),
        }))
        .filter((item) => item.quote && item.authorName);

    return items.length > 0 ? items : fallback;
};

const parseFaqs = (value: unknown, fallback: FaqItem[]): FaqItem[] => {
    const items = toArray<Record<string, unknown>>(value)
        .map((item) => ({
            question: toString(item.question),
            answer: toString(item.answer),
        }))
        .filter((item) => item.question && item.answer);

    return items.length > 0 ? items : fallback;
};

const parseOffices = (value: unknown, fallback: Office[]): Office[] => {
    const items = toArray<Record<string, unknown>>(value)
        .map((item) => ({
            city: toString(item.city),
            country: toString(item.country),
            timezoneCoverage: toString(item.timezoneCoverage),
            languages: toString(item.languages),
            focus: toString(item.focus),
        }))
        .filter((item) => item.city && item.country);

    return items.length > 0 ? items : fallback;
};

const parseHero = (value: unknown, fallback: HeroSection): HeroSection => {
    const hero = (value as Record<string, unknown> | null) ?? null;

    if (!hero) {
        return fallback;
    }

    return {
        eyebrow: toString(hero.eyebrow, fallback.eyebrow ?? ""),
        headline: toString(hero.headline, fallback.headline),
        description: toString(hero.description, fallback.description),
        primaryCtaLabel: toString(hero.primaryCtaLabel, fallback.primaryCtaLabel),
        primaryCtaHref: toString(hero.primaryCtaHref, fallback.primaryCtaHref),
        secondaryCtaLabel: toString(
            hero.secondaryCtaLabel,
            fallback.secondaryCtaLabel ?? "",
        ),
        secondaryCtaHref: toString(hero.secondaryCtaHref, fallback.secondaryCtaHref ?? ""),
        heroImage: toMediaUrl(hero.heroImage) ?? fallback.heroImage,
    };
};

const parseCtaPanel = (value: unknown, fallback: CtaPanel): CtaPanel => {
    const cta = (value as Record<string, unknown> | null) ?? null;

    if (!cta) {
        return fallback;
    }

    return {
        headline: toString(cta.headline, fallback.headline),
        description: toString(cta.description, fallback.description),
        primaryCtaLabel: toString(cta.primaryCtaLabel, fallback.primaryCtaLabel),
        primaryCtaHref: toString(cta.primaryCtaHref, fallback.primaryCtaHref),
        secondaryCtaLabel: toString(
            cta.secondaryCtaLabel,
            fallback.secondaryCtaLabel ?? "",
        ),
        secondaryCtaHref: toString(cta.secondaryCtaHref, fallback.secondaryCtaHref ?? ""),
    };
};

const parseBlocks = (value: unknown, fallback: any[]): any[] => {
    const blocks = toArray<Record<string, unknown>>(value);
    if (!blocks || blocks.length === 0) return fallback;

    return blocks.map((block) => {
        switch (block.__component) {
            case "sections.hero":
                return {
                    __component: "sections.hero",
                    ...parseHero(block, fallback.find((f) => f.__component === "sections.hero")),
                };
            case "sections.social-proof-section":
                return {
                    __component: "sections.social-proof-section",
                    title: toString(block.title),
                    logos: toMediaArray(block.logos),
                };
            case "sections.value-props-section":
                return {
                    __component: "sections.value-props-section",
                    title: toString(block.title),
                    features: parseFeatureItems(block.features, []),
                };
            case "sections.metrics-section":
                return {
                    __component: "sections.metrics-section",
                    title: toString(block.title),
                    metrics: parseMetrics(block.metrics, []),
                };
            case "sections.services-section":
                return {
                    __component: "sections.services-section",
                    title: toString(block.title),
                    intro: toString(block.intro),
                    services: parseServices(block.services, []),
                };
            case "sections.process-section":
                return {
                    __component: "sections.process-section",
                    title: toString(block.title),
                    steps: parseSteps(block.steps, []),
                };
            case "sections.industries-section":
                return {
                    __component: "sections.industries-section",
                    title: toString(block.title),
                    industries: toString(block.industries),
                };
            case "sections.testimonials-section":
                return {
                    __component: "sections.testimonials-section",
                    title: toString(block.title),
                    testimonials: parseTestimonials(block.testimonials, []),
                };
            case "sections.faq-section":
                return {
                    __component: "sections.faq-section",
                    title: toString(block.title),
                    faqs: parseFaqs(block.faqs, []),
                };
            case "sections.offices-section":
                return {
                    __component: "sections.offices-section",
                    title: toString(block.title),
                    offices: parseOffices(block.offices, []),
                };
            case "sections.cta-panel":
                return {
                    __component: "sections.cta-panel",
                    ...parseCtaPanel(block, fallback.find((f) => f.__component === "sections.cta-panel")),
                };
            default:
                return block;
        }
    });
};

const parseSiteSettings = (
    value: Record<string, unknown> | null,
    fallback: SiteSettings,
): SiteSettings => {
    if (!value) {
        return fallback;
    }

    return {
        siteName: toString(value.siteName, fallback.siteName),
        logo: toMediaUrl(value.logo) ?? fallback.logo,
        navLinks: parseNavLinks(value.navLinks, fallback.navLinks),
        primaryActionLabel: toString(
            value.primaryActionLabel,
            fallback.primaryActionLabel,
        ),
        primaryActionHref: toString(value.primaryActionHref, fallback.primaryActionHref),
        contactPhone: toString(value.contactPhone, fallback.contactPhone ?? ""),
        contactEmail: toString(value.contactEmail, fallback.contactEmail ?? ""),
        linkedInUrl: toString(value.linkedInUrl, fallback.linkedInUrl ?? ""),
        footerCopy: toString(value.footerCopy, fallback.footerCopy),
    };
};

const fetchFromStrapi = async (path: string) => {
    try {
        const response = await fetch(`${STRAPI_URL}${path}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                ...(STRAPI_API_TOKEN
                    ? {
                        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
                    }
                    : {}),
            },
        });

        if (!response.ok) {
            return null;
        }

        return (await response.json()) as unknown;
    } catch {
        return null;
    }
};

export async function getLandingPageData(isPreview = false): Promise<LandingPageData> {
    const statusParam = isPreview ? "draft" : "published";

    const [landingResponse, settingResponse] = await Promise.all([
        fetchFromStrapi(`/api/landing-page?status=${statusParam}&populate[blocks][populate]=*`),
        fetchFromStrapi(`/api/site-setting?status=${statusParam}&populate=*`),
    ]);

    const landing = unwrapSingle<Record<string, unknown>>(landingResponse);
    const settings = unwrapSingle<Record<string, unknown>>(settingResponse);

    if (!landing) {
        return defaultLandingPageData;
    }

    const fallback = defaultLandingPageData;

    return {
        metaTitle: toString(landing.metaTitle, fallback.metaTitle),
        metaDescription: toString(landing.metaDescription, fallback.metaDescription),
        blocks: parseBlocks(landing.blocks, fallback.blocks),
        footerNote: toString(landing.footerNote, fallback.footerNote ?? ""),
        settings: parseSiteSettings(settings, fallback.settings),
    };
}
