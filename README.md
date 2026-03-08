# ExpoScout — Landing Site

Bilingual (RU/EN) landing site for ExpoScout — B2B SaaS for remote expo-based supplier scouting.

## Tech Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** + shadcn/ui components
- **Radix UI** primitives (Accordion, Dialog)
- No external CMS, no paid assets

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 (redirects to /ru)
```

## Project Structure

```
exposcout/
├── app/
│   ├── [lang]/           # Route group: /ru and /en
│   │   ├── page.tsx      # Home page
│   │   ├── pricing/      # Pricing page
│   │   ├── privacy/      # Privacy policy
│   │   └── terms/        # Terms of service
│   ├── api/lead/         # POST /api/lead — form submissions
│   ├── layout.tsx        # Root layout (fonts, structured data)
│   ├── globals.css       # Tailwind + CSS variables
│   ├── sitemap.ts        # Auto-generated sitemap.xml
│   └── robots.ts         # robots.txt
├── components/
│   ├── ui/               # shadcn/ui primitives
│   └── *.tsx             # Section components (hero, features, etc.)
├── lib/
│   ├── content.ts        # ⭐ All RU/EN copy — edit here
│   └── utils.ts          # cn() helper + resolveHref
├── data/                 # leads.json created at runtime
├── middleware.ts          # / → /ru redirect, locale validation
└── public/               # Static assets (favicon, OG image)
```

## Editing Content (RU/EN)

All copy is centralized in **`lib/content.ts`**. The file exports a `content` object with `ru` and `en` keys. Each key contains all text for:

- Hero, social proof, pathways, how it works, features
- Product mock, pricing teaser, FAQ
- Pricing page, privacy, terms
- Header, footer, lead form

To update copy:
1. Open `lib/content.ts`
2. Find the section you want to edit (e.g., `content.ru.hero.h1`)
3. Change the text
4. Both languages are in the same file for easy comparison

## Lead Form

The "Get early access" form submits to `POST /api/lead`. Submissions are appended to `/data/leads.json` (created automatically).

Fields: name, email, company, role, message (optional).
Includes a honeypot field for basic spam protection.

## Pages

| Path | Description |
|------|-------------|
| `/ru` | Home (Russian, default) |
| `/en` | Home (English) |
| `/ru/pricing` | Pricing |
| `/en/pricing` | Pricing |
| `/ru/privacy` | Privacy Policy |
| `/en/privacy` | Privacy Policy |
| `/ru/terms` | Terms of Service |
| `/en/terms` | Terms of Service |

## Deploy to Vercel

1. Push the `exposcout/` folder to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo
4. Set the root directory to `exposcout` (if it's a subfolder)
5. Deploy — Vercel auto-detects Next.js

Or use the CLI:

```bash
npm i -g vercel
cd exposcout
vercel
```

**Note:** The `/api/lead` route writes to the filesystem, which works on Vercel's serverless functions but data won't persist across deployments. For production, switch to a database or external service.

## Customization

- **Colors:** Edit CSS variables in `app/globals.css` (`:root` section)
- **Domain:** Replace `https://exposcout.io` in `app/sitemap.ts` and `app/robots.ts`
- **OG Image:** Replace `public/og-placeholder.png` with your actual image
- **Favicon:** Replace `public/favicon.ico`
- **Legal pages:** Update company name and contact email in `lib/content.ts` (privacy/terms sections)
