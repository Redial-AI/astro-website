"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
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
                    "frame-src": ["'self'", "http://localhost:3000", "http://192.168.1.5:3000"],
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
