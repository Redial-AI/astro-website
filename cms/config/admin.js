"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    secrets: {
        encryptionKey: env("ADMIN_ENCRYPTION_KEY", "dev-admin-encryption-key"),
    },
    auth: {
        secret: env("ADMIN_JWT_SECRET", "dev-admin-jwt-secret"),
    },
    apiToken: {
        salt: env("API_TOKEN_SALT", "dev-api-token-salt"),
    },
    transfer: {
        token: {
            salt: env("TRANSFER_TOKEN_SALT", "dev-transfer-token-salt"),
        },
    },
    preview: {
        enabled: true,
        config: {
            allowedOrigins: [env("CLIENT_URL", "http://localhost:3000")],
            async handler(uid, { documentId, locale, status }) {
                // Determine preview path based on content type
                let path = '/';

                // You can expand this switch statement as you add more content types
                switch (uid) {
                    case 'api::page.page':
                        path = `/${documentId}`;
                        // In reality, you'd likely fetch the slug here, 
                        // but documentId works as a robust fallback for previews
                        break;
                    default:
                        path = '/';
                }

                const frontendUrl = env("CLIENT_URL", "http://localhost:3000");
                return `${frontendUrl}/api/draft?documentId=${documentId}&uid=${uid}&locale=${locale || ''}&path=${encodeURIComponent(path)}`;
            },
        },
    },
});
