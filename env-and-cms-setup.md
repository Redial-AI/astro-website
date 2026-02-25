# Environment Map & Deployment Setup

## 1. Environment Variables Map

The application consists of a Strapi CMS and an Astro frontend. Below are the environment variables required for the production deployment (e.g., on Coolify).

### CMS (`cms/.env`)
These variables operate the Strapi backend. You must generate new cryptographic keys for the secrets in production.

```env
HOST=0.0.0.0
PORT=1337

# Secrets (Generate new random strings for production)
APP_KEYS=generate_new_app_keys_for_production
API_TOKEN_SALT=generate_new_salt
ADMIN_JWT_SECRET=generate_new_secret
ADMIN_ENCRYPTION_KEY=generate_new_encryption_key
TRANSFER_TOKEN_SALT=generate_new_transfer_salt
JWT_SECRET=generate_new_jwt_secret

# Database
# If using Coolify's Postgres/MySQL, update this. Otherwise, it defaults to SQLite:
DATABASE_FILENAME=.tmp/data.db

# URLs
PUBLIC_URL=https://cms.yourdomain.com
CLIENT_URL=https://yourdomain.com
```

### Astro Frontend (`astro-web/.env`)
These are for the Astro web layer to communicate with Strapi.

```env
# The URL where your Strapi CMS is accessible from the frontend build
STRAPI_URL=https://cms.yourdomain.com

# An API Token generated from the Strapi CMS Admin panel (used for SSR or build-time fetching)
STRAPI_API_TOKEN=your_generated_api_token

# The public URL of the Astro website
PUBLIC_SITE_URL=https://yourdomain.com
```

---

## 2. CMS Login Credentials & Admin Setup

**By default, there are no hardcoded login credentials (like username:admin / password:admin).** 

Because the local SQLite database (`cms/.tmp/data.db`) is ignored by `.gitignore`, the production deployment will start with a completely **empty** database.

### How to set up the Admin:
1. Once deployed on Coolify, navigate to your public CMS URL: `https://cms.yourdomain.com/admin`
2. Since the database is fresh, Strapi will detect that no users exist and will immediately prompt the **first visitor** to create the initial Super Admin account.
3. **Important:** Ensure you do this immediately after successful deployment so that nobody else can visit the URL and register the admin account first.

### How to set up the API Token for Astro:
1. Log in to the Strapi Admin panel.
2. Go to **Settings > Global Settings > API Tokens**.
3. Create a new token (Read-only or Full Access depending on Astro's needs).
4. Copy the token and add it to Astro's `STRAPI_API_TOKEN` environment variable in Coolify.
