# SpotiFLAC Mobile — Website

Official website for [SpotiFLAC Mobile](https://github.com/spotiflacapp/SpotiFLAC-Mobile), built with Next.js 14, TypeScript, and Tailwind CSS.

**Live site:** https://spotiflac.app

---

## ⚠️ Important: Do NOT run `npm audit fix --force`

Running `npm audit fix --force` will downgrade Next.js to an incompatible old version (v9 or lower), which breaks everything. The vulnerabilities reported by npm audit are inside internal dependencies of Next.js itself — they are **not exploitable in a statically exported website** and will be resolved by the Next.js team in future releases.

**The correct way to update is:** `npm install next@14.2.35` (replace with the latest 14.x patch when available).

---

## Requirements

| Tool | Minimum Version |
|------|----------------|
| Node.js | 18.17.0 |
| npm | 9.0.0 |

Check your versions:
```bash
node -v   # should be v18.17.0 or higher
npm -v    # should be 9.x or higher
```

Download Node.js 18 LTS from https://nodejs.org

---

## Setup (Windows, Mac, Linux)

### 1. Extract the archive

**Windows:**
Right-click `spotiflac-website-v3.tar.gz` → Extract All, or use 7-Zip.

**Mac/Linux:**
```bash
tar -xzf spotiflac-website-v3.tar.gz
cd spotiflac
```

### 2. Install dependencies

```bash
npm install
```

Expected output: `added X packages in Xs` — no errors.

> Do **not** run `npm audit fix` or `npm audit fix --force` after this.

### 3. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser. The site hot-reloads as you edit files.

### 4. Build for production

```bash
npm run build
```

You should see:
```
✓ Compiled successfully
✓ Generating static pages (14/14)
```

All 14 routes compile to static HTML — no server needed.

### 5. Start production server (optional, for local preview)

```bash
npm start
```

---

## Deployment

### Vercel (Recommended — free, zero config)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at https://vercel.com/new — Vercel auto-detects Next.js.

### Netlify

```bash
npm run build
# Upload the `.next` folder via Netlify dashboard
# Or use: netlify deploy --dir=.next
```

### Self-hosted (VPS/server)

```bash
npm run build
npm start          # runs on port 3000
# Point nginx/Caddy to localhost:3000
```

---

## Project Structure

```
spotiflac/
├── app/
│   ├── layout.tsx              # Root layout, global metadata, Navbar+Footer
│   ├── page.tsx                # Homepage (all sections)
│   ├── globals.css             # Global styles, CSS variables, animations
│   ├── sitemap.ts              # Auto-generated sitemap.xml
│   ├── robots.ts               # robots.txt
│   ├── download/page.tsx       # Download page (noindex)
│   ├── features/page.tsx       # Features detail page
│   ├── about/page.tsx          # About page
│   ├── faq/page.tsx            # Full FAQ page
│   ├── contact/page.tsx        # Contact page
│   ├── privacy-policy/page.tsx # Privacy policy (website-focused)
│   └── disclaimer/page.tsx     # Disclaimer (noindex)
├── components/
│   ├── Navbar.tsx              # Responsive navbar with smooth scroll
│   ├── Footer.tsx              # Full footer with all links
│   ├── FAQ.tsx                 # Accordion FAQ with schema microdata
│   ├── FeatureCard.tsx         # Feature grid card
│   ├── ContactForm.tsx         # Client-side contact form
│   └── DownloadButton.tsx      # Reusable download CTA
├── public/
│   ├── screenshot-home.jpg     # App screenshot — Home screen
│   ├── screenshot-library.jpg  # App screenshot — Library
│   ├── screenshot-store.jpg    # App screenshot — Extension Store
│   └── screenshot-settings.jpg # App screenshot — Settings
├── package.json                # Pinned exact dependency versions
├── .npmrc                      # Prevents audit auto-downgrade
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

---

## Updating dependencies safely

To update Next.js to a newer 14.x patch:

```bash
npm install next@14.2.XX    # replace XX with the new patch version
npm run build               # verify it still builds
```

To update other packages individually:

```bash
npm install tailwindcss@3.4.XX
npm install postcss@8.5.XX
```

Never use `npm update` or `npm audit fix --force` — these can cause breaking version changes.

---

## SEO notes

- All pages have canonical URLs pointing to `https://spotiflac.app`
- `/download` and `/disclaimer` are noindex, nofollow
- `sitemap.xml` auto-generated at https://spotiflac.app/sitemap.xml
- `robots.txt` auto-generated at https://spotiflac.app/robots.txt
- Structured data schemas: WebSite, SoftwareApplication, FAQPage, BreadcrumbList, Organization
- All external links use `rel="noopener noreferrer nofollow"`
- App screenshots include descriptive, non-spammy alt text

---

## Changing the download links

Edit `/app/download/page.tsx` — the `releases` array at the top of the file contains all three download links (ARM64 APK, ARM32 APK, iOS IPA).

## Changing the version number

Search and replace `4.3.1` across the project when a new version is released. Key files:
- `app/page.tsx` (hero badge, CTA footer)
- `app/download/page.tsx` (version card, release links)
- `app/layout.tsx` (schema metadata)
