"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seedData = {
    metaTitle: "Nearshore and Offshore BPO Services | Redial BPO",
    metaDescription: "Scale customer support, sales, and back-office operations with multilingual nearshore and offshore BPO teams.",
    footerNote: "This page is fully CMS-driven through Strapi. Edit copy, sections, and media without touching code.",
    blocks: [
        {
            __component: "sections.hero",
            eyebrow: "Nearshore + Offshore Outsourcing",
            headline: "Smarter customer operations, built for growth.",
            description: "Redial BPO helps you launch and scale multilingual customer support, telesales, and back-office services across LATAM, Africa, and APAC delivery hubs.",
            primaryCtaLabel: "Book a consultation",
            primaryCtaHref: "https://redialbpo.com/book-a-consultation",
            secondaryCtaLabel: "Explore services",
            secondaryCtaHref: "#services"
        },
        {
            __component: "sections.social-proof-section",
            title: "Trusted by growth-focused teams"
        },
        {
            __component: "sections.value-props-section",
            title: "Why teams choose Redial",
            features: [
                {
                    title: "Multiregion coverage",
                    description: "Delivery presence in Mexico, Costa Rica, South Africa, and the Philippines for resilient, follow-the-sun operations."
                },
                {
                    title: "Faster ramp-up",
                    description: "Standardized onboarding and QA playbooks reduce launch friction and speed up path-to-productivity."
                },
                {
                    title: "Cost-efficient growth",
                    description: "Blend nearshore and offshore capacity to improve service levels while keeping unit economics predictable."
                }
            ]
        },
        {
            __component: "sections.metrics-section",
            title: "Delivery outcomes",
            metrics: [
                {
                    value: "2017",
                    label: "Year founded",
                    note: "Operational maturity with startup pace"
                },
                {
                    value: "4",
                    label: "Delivery regions",
                    note: "LATAM, Africa, and APAC coverage"
                },
                {
                    value: "Up to 50%",
                    label: "Potential savings",
                    note: "Compared with high-cost in-house operations"
                }
            ]
        },
        {
            __component: "sections.services-section",
            title: "Services",
            intro: "Choose one service line or combine multiple squads under a single performance framework.",
            services: [
                {
                    title: "Customer Support",
                    description: "Voice, chat, email, and social support teams focused on CSAT and first-contact resolution.",
                    idealFor: "Subscription brands, eCommerce, and digital products",
                    outcome: "Faster response times and stronger retention"
                },
                {
                    title: "Telesales",
                    description: "Outbound and inbound sales development teams with QA-led script optimization.",
                    idealFor: "Lead generation and pipeline acceleration",
                    outcome: "Higher conversion rates and better sales consistency"
                },
                {
                    title: "Back Office",
                    description: "Transaction processing, data operations, and administrative workflows with SLA-backed execution.",
                    idealFor: "Operations leaders reducing internal load",
                    outcome: "Lean internal teams and improved cycle times"
                },
                {
                    title: "Technical Support",
                    description: "Tiered support specialists handling troubleshooting and escalation management.",
                    idealFor: "SaaS and complex product environments",
                    outcome: "Lower ticket backlog and better customer confidence"
                }
            ]
        },
        {
            __component: "sections.process-section",
            title: "How engagement works",
            steps: [
                {
                    stepNumber: 1,
                    title: "Discovery",
                    description: "Align on goals, volumes, channels, quality bar, compliance requirements, and reporting cadence."
                },
                {
                    stepNumber: 2,
                    title: "Solution design",
                    description: "Define staffing model, location mix, training plan, tooling integrations, and service-level targets."
                },
                {
                    stepNumber: 3,
                    title: "Pilot and calibration",
                    description: "Launch with a controlled scope, tune scripts and workflows, and validate performance against baseline KPIs."
                },
                {
                    stepNumber: 4,
                    title: "Scale and optimize",
                    description: "Expand headcount in planned waves while continuously improving quality, productivity, and customer outcomes."
                }
            ]
        },
        {
            __component: "sections.industries-section",
            title: "Industries",
            industries: "Healthcare\neCommerce\nFinancial Services\nConsumer Services\nLogistics\nTechnology"
        },
        {
            __component: "sections.testimonials-section",
            title: "Client feedback",
            testimonials: [
                {
                    quote: "Replace this with a real client quote highlighting measurable results from your engagement.",
                    authorName: "Client Name",
                    authorRole: "Operations Leader",
                    company: "Client Company"
                }
            ]
        },
        {
            __component: "sections.faq-section",
            title: "Frequently asked questions",
            faqs: [
                {
                    question: "How quickly can a new team be launched?",
                    answer: "Launch windows depend on role complexity, tooling, and hiring mix. Most programs begin with a pilot sprint, then scale in waves."
                },
                {
                    question: "Can we combine nearshore and offshore teams?",
                    answer: "Yes. Hybrid delivery is common and helps balance language coverage, operating hours, and cost structure."
                },
                {
                    question: "What metrics do you track?",
                    answer: "Programs typically track SLA compliance, quality assurance scores, productivity metrics, and customer experience KPIs such as CSAT."
                }
            ]
        },
        {
            __component: "sections.offices-section",
            title: "Global delivery centers",
            offices: [
                {
                    city: "Guadalajara",
                    country: "Mexico",
                    timezoneCoverage: "North America",
                    languages: "English, Spanish",
                    focus: "Nearshore customer support and sales"
                },
                {
                    city: "Alajuela",
                    country: "Costa Rica",
                    timezoneCoverage: "North America",
                    languages: "English, Spanish",
                    focus: "Bilingual support and retention"
                },
                {
                    city: "Cape Town",
                    country: "South Africa",
                    timezoneCoverage: "EMEA",
                    languages: "English",
                    focus: "Voice support and back office"
                },
                {
                    city: "Manila",
                    country: "Philippines",
                    timezoneCoverage: "APAC",
                    languages: "English",
                    focus: "24/7 coverage and technical support"
                }
            ]
        },
        {
            __component: "sections.cta-panel",
            headline: "Ready to build your next high-performing team?",
            description: "Share your goals and we will propose a practical operating model, timeline, and staffing plan.",
            primaryCtaLabel: "Book a consultation",
            primaryCtaHref: "https://redialbpo.com/book-a-consultation",
            secondaryCtaLabel: "Contact sales",
            secondaryCtaHref: "mailto:sales@redialbpo.com"
        }
    ]
};

exports.default = {
    register() { },
    async bootstrap({ strapi }) {
        try {
            // Check if landing page exists
            const entries = await strapi.db.query('api::landing-page.landing-page').findMany({
                populate: ['blocks']
            });

            let shouldSeed = false;
            let documentId = null;

            if (entries.length === 0) {
                shouldSeed = true;
            } else {
                documentId = entries[0].documentId;
                // If it exists but has few blocks, seed it
                if (!entries[0].blocks || entries[0].blocks.length < 5) {
                    shouldSeed = true;
                }
            }

            if (shouldSeed) {
                console.log("Seeding Landing Page with default blocks...");
                if (documentId) {
                    await strapi.documents('api::landing-page.landing-page').update({
                        documentId: documentId,
                        data: seedData,
                        status: 'published'
                    });
                } else {
                    await strapi.documents('api::landing-page.landing-page').create({
                        data: seedData,
                        status: 'published'
                    });
                }
                console.log("Successfully seeded Landing Page!");
            }
        } catch (err) {
            console.error("Failed to seed Landing Page", err);
        }
    },
};

