export type NavLink = {
    label: string;
    href: string;
    openInNewTab?: boolean;
};

export type FeatureItem = {
    title: string;
    description: string;
};

export type Metric = {
    value: string;
    label: string;
    note?: string;
};

export type Service = {
    title: string;
    description: string;
    idealFor?: string;
    outcome?: string;
};

export type ProcessStep = {
    stepNumber: number;
    title: string;
    description: string;
};

export type Testimonial = {
    quote: string;
    authorName: string;
    authorRole?: string;
    company?: string;
};

export type FaqItem = {
    question: string;
    answer: string;
};

export type Office = {
    city: string;
    country: string;
    timezoneCoverage?: string;
    languages?: string;
    focus?: string;
};

export type HeroSection = {
    eyebrow?: string;
    headline: string;
    description: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel?: string;
    secondaryCtaHref?: string;
    heroImage?: string | null;
};

export type CtaPanel = {
    headline: string;
    description: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel?: string;
    secondaryCtaHref?: string;
};

export type SiteSettings = {
    siteName: string;
    logo?: string | null;
    navLinks: NavLink[];
    primaryActionLabel: string;
    primaryActionHref: string;
    contactPhone?: string;
    contactEmail?: string;
    linkedInUrl?: string;
    footerCopy: string;
};

export type LandingPageData = {
    metaTitle: string;
    metaDescription: string;
    footerNote?: string;
    blocks: any[];
    settings: SiteSettings;
};
