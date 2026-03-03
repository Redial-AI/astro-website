module.exports = ({ env }) => [
    "strapi::logger",
    "strapi::errors",
    {
        name: "strapi::security",
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    "connect-src": ["'self'", "https:"],
                    "img-src": ["'self'", "data:", "blob:", "https:"],
                    "media-src": ["'self'", "data:", "blob:", "https:"],
                    "frame-src": ["'self'", env("CLIENT_URL", "http://localhost:3000")],
                    upgradeInsecureRequests: null,
                },
            },
        },
    },
    "strapi::cors",
    "strapi::poweredBy",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
];
