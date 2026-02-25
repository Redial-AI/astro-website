# Redial BPO Landing Page (Strapi + Next.js)

This workspace contains:

- `cms/`: Strapi CMS project for editable landing page content.
- `web/`: Next.js frontend that renders the landing page from Strapi content.

The implementation is designed so non-technical editors can update text, CTAs, FAQs, services, metrics, logos, and locations directly in Strapi.

## 1. Install and run

1. Copy environment file:

```bash
cp .env.example .env
```

2. Install dependencies:

```bash
npm install
```

3. Start Strapi (Terminal 1):

```bash
npm run dev:cms
```

4. Start frontend (Terminal 2):

```bash
npm run dev:web
```

- Strapi Admin: `http://localhost:1337/admin`
- Landing page: `http://localhost:3000`

## 2. Configure Strapi access

In Strapi admin:

1. Go to `Settings -> Users & Permissions plugin -> Roles -> Public`.
2. Enable `find` permission for:
- `Landing Page`
- `Site Setting`

This allows the landing page to render published content without requiring auth.

## 3. Content model (editor-friendly)

### Single types

- `Landing Page`
- `Site Setting`

### Main editable sections

- Hero
- Social proof logo strip
- Value propositions
- Metrics
- Services
- Process steps
- Industries
- Testimonials
- FAQs
- Delivery centers
- Final CTA panel
- Header/footer and contact settings

## 4. Editing workflow for non-technical users

1. Open `Content Manager` in Strapi.
2. Edit `Landing Page` fields section-by-section.
3. Upload logos/images in media fields.
4. Click `Save`, then `Publish`.
5. Refresh `http://localhost:3000`.

## 5. Deployment notes

- Set `STRAPI_URL` in frontend environment to your deployed Strapi URL.
- Optionally set `STRAPI_API_TOKEN` if you keep content private.
- Ensure CORS is configured in Strapi for your frontend domain.

## 6. Why this structure

- Strapi components keep sections modular and easy to maintain.
- Single types are used for one-page marketing content and global site settings.
- Next.js server rendering + revalidation provides fast page loads and SEO-ready HTML.
- If Strapi data is missing, frontend falls back to safe default content so the page never breaks.
# astro-website
