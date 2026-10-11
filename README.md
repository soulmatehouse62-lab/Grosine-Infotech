# Grosine Infotech website

Static marketing website for Grosine Infotech, a digital marketing and website
development agency in Jaipur. Built with Next.js (App Router), TypeScript,
Tailwind CSS, Framer Motion and lucide-react. It exports to plain HTML, CSS and
JavaScript, so it can be hosted anywhere and needs no server or database.

> **Before going live:** the site ships with placeholder contact details,
> stats, testimonials and portfolio projects. Work through the
> [placeholder checklist](#placeholder-checklist) at the end of this file.

## Requirements

- Node.js 20.9 or newer (22 LTS recommended)
- npm

## Run it

```bash
npm install        # first time only
npm run dev        # development server at http://localhost:3000
```

| Command             | What it does                                           |
| ------------------- | ------------------------------------------------------ |
| `npm run dev`       | Development server with live reload                    |
| `npm run build`     | Builds the static site into the `out/` folder          |
| `npm run preview`   | Serves the built `out/` folder locally to check it     |
| `npm run lint`      | Runs ESLint                                            |
| `npm run typecheck` | Runs the TypeScript compiler without emitting files    |

## Project structure

```
src/
  app/                  Routes (one folder per page), layout, global CSS,
                        sitemap.ts, robots.ts, icon.svg (favicon)
    services/[slug]/    Service detail template, one page per service
  components/
    layout/             Header, mega menu, mobile drawer, footer, logo,
                        quote modal, floating WhatsApp button
    sections/           Page sections (Hero, StatsBand, Process, CtaBand ...)
    ui/                 Small reusable pieces (Button, Card, SectionHeading,
                        Accordion, Modal, EnquiryForm ...)
  data/                 ALL site content (see below)
  lib/                  Helpers: SEO metadata, JSON-LD schema, contact links
public/                 Static files: og.png (social image), your logo
scripts/                Post-build step run automatically by `npm run build`
                        (copies Next.js prefetch files to the names browsers
                        request, so a plain static host returns no 404s)
```

## Editing content

All text content lives in typed files in `src/data/`. Edit the file, save, and
the pages update. You do not need to touch any component.

| File              | Controls                                                                 |
| ----------------- | ------------------------------------------------------------------------ |
| `site.ts`         | Company name, tagline, address, phone, email, WhatsApp, social links, map, hours, site URL |
| `services.ts`     | The six services: titles, summaries, features, process, benefits, FAQs, SEO title and description |
| `faqs.ts`         | General FAQs on the home page                                            |
| `stats.ts`        | Numbers in the stats band                                                |
| `testimonials.ts` | Testimonials slider                                                      |
| `portfolio.ts`    | Portfolio projects and filter categories                                 |
| `process.ts`      | The six-step "Our process" framework                                     |
| `benefits.ts`     | "Why choose us" cards and the values on the About page                   |
| `industries.ts`   | "Industries we serve" grid                                               |
| `navigation.ts`   | Header and footer links, button labels                                   |

Notes:

- **Adding a service:** add an entry to the array in `services.ts`. Its detail
  page, menu link, footer link, form option and sitemap entry are generated
  automatically. Pick an icon name from <https://lucide.dev/icons>.
- **Removing a service:** delete its entry. Nothing else needs changing.
- **Page headlines** (hero text, section headings) are in the page files under
  `src/app/` and the section files under `src/components/sections/`.
- **Page titles and meta descriptions** are at the top of each page file in
  `src/app/`, and in the `seo` field of each service in `services.ts`.
- **Portfolio images:** project cards use generated artwork, so no images are
  needed. To use real screenshots later, add an `image` field to `Project` in
  `portfolio.ts` and render it with `next/image` in
  `src/components/ui/ProjectCard.tsx`.

## Changing colours

The whole palette is defined once, in the `@theme` block at the top of
`src/app/globals.css`:

- `--color-primary-*` deep teal (headers, links, dark sections)
- `--color-accent-*` saffron amber (main buttons and highlights)
- `--color-ink`, `--color-body`, `--color-muted`, `--color-line`,
  `--color-surface`, `--color-surface-alt` (neutrals)

Change the hex values there and every page follows. Keep each scale running
from light (50) to dark (950) so text contrast stays accessible. Two places
repeat a colour as a literal and should be updated to match: `themeColor` in
`src/app/layout.tsx` and the favicon `src/app/icon.svg`.

## Changing fonts

Fonts are loaded in `src/app/layout.tsx` with `next/font` (Bricolage Grotesque
for headings, Inter for body). Swap the two imports for any other Google font;
nothing else needs to change.

## Changing the logo

The header and footer show a text wordmark until a logo file exists.

1. Save the logo as `public/logo.svg`.
2. Optional: save a light version for the dark footer as
   `public/logo-light.svg`. Without it, the footer uses `logo.svg`.
3. Rebuild (`npm run build`), or restart `npm run dev`.

The check happens at build time in `src/components/layout/Logo.tsx`. Also
replace the favicon `src/app/icon.svg` and the social sharing image
`public/og.png` (1200 x 630 px) with branded versions.

## Connecting the contact form

The site is static, so the form posts to a third-party form service.

1. Copy `.env.example` to `.env.local`.
2. Set `NEXT_PUBLIC_FORM_ENDPOINT`:
   - **Web3Forms:** `https://api.web3forms.com/submit`, and also set
     `NEXT_PUBLIC_FORM_ACCESS_KEY` to the access key from your dashboard.
   - **Formspree:** `https://formspree.io/f/your-form-id` (no access key).
3. Rebuild. The values are baked into the site at build time, so if you build
   on a hosting platform, add the same variables in its settings.

The form sends a JSON `POST` with `name`, `email`, `phone`, `service`,
`message` and `subject`.

**If the endpoint is left empty**, the form still works: on submit it opens a
pre-filled WhatsApp message to the number in `site.ts`. While that number is
still the placeholder, it opens a pre-filled email instead.

The same form is used in three places: the "Get a Quote" modal (opened from
the header on every page), the call-to-action band at the foot of most pages,
and the Contact page.

## SEO

- Every page has its own title, meta description, canonical URL, Open Graph
  and Twitter tags (built by `src/lib/seo.ts`).
- JSON-LD structured data (built by `src/lib/schema.ts`): LocalBusiness on the
  home and contact pages, Service on each service page, FAQPage wherever FAQs
  appear, BreadcrumbList on inner pages.
- `sitemap.xml` and `robots.txt` are generated at build time.
- All of these use `siteUrl` from `src/data/site.ts`. **Set it to the real
  domain before deploying.**
- Placeholder phone, email and social links are deliberately left out of the
  structured data until you replace them.

After launch, validate a few pages with Google's Rich Results Test, submit
`sitemap.xml` in Google Search Console, and run PageSpeed Insights on the live
URL. Make sure the host serves files with gzip or Brotli compression and long
cache lifetimes for `/_next/static/`; both matter for the performance score.

## Deploying

```bash
npm run build
```

This creates the `out/` folder. Upload its **contents** to any static host:

- **cPanel / shared hosting:** upload the contents of `out/` into
  `public_html` (File Manager or FTP).
- **Netlify / Cloudflare Pages / Vercel:** connect the repository, set the
  build command to `npm run build` and the output directory to `out`. Add the
  form environment variables in the platform settings.
- **Any other server (Nginx, Apache, S3):** serve the `out/` folder as static
  files.

Each page is exported as `folder/index.html`, so no rewrite rules are needed.
For the custom 404 page, point the host's "not found" page at `/404.html`
(Netlify, Cloudflare Pages and GitHub Pages do this automatically; on Apache
add `ErrorDocument 404 /404.html` to `.htaccess`).

## Placeholder checklist

Everything below is placeholder content that must be replaced or confirmed
with real client data before the site goes live. Search the project for `TODO`
to find each one.

### `src/data/site.ts`

- [ ] `siteUrl`: the live domain (currently `https://www.grosineinfotech.com`, unconfirmed)
- [ ] `phone`: currently `+91 00000 00000`
- [ ] `email`: currently `hello@example.com`
- [ ] `whatsapp`: currently `910000000000`
- [ ] `social`: Facebook, Instagram, LinkedIn, X and YouTube profile URLs
      (set any you don't use to `""` to hide the icon)
- [ ] `hours`: business hours (currently Monday to Saturday, 10 AM to 7 PM)

### Other data files

- [ ] `src/data/stats.ts`: all four figures (projects, clients, years, retention)
- [ ] `src/data/testimonials.ts`: all three testimonials
- [ ] `src/data/portfolio.ts`: all nine projects, and the category list
- [ ] `src/data/industries.ts`: confirm the industries the client serves

### Pages

- [ ] `src/app/privacy-policy/page.tsx`: placeholder policy, needs review
- [ ] `src/app/terms/page.tsx`: placeholder terms, needs review

### Configuration and assets

- [ ] `.env.local`: `NEXT_PUBLIC_FORM_ENDPOINT` (and access key for Web3Forms)
- [ ] `public/logo.svg` (and optionally `public/logo-light.svg`)
- [ ] `src/app/icon.svg`: favicon, currently a placeholder "G" mark
- [ ] `public/og.png`: social sharing image, currently a generated placeholder
- [ ] Brand colours in `src/app/globals.css`, once the client's palette is known

### Copy to confirm with the client

The service and FAQ copy was written without client input. It makes no claims
about awards, client names or results, but it does describe how the agency
works. Please confirm these points are true, or edit them in
`src/data/services.ts`, `src/data/faqs.ts` and `src/data/benefits.ts`:

- [ ] Content can be produced in Hindi as well as English
- [ ] Writing, design and development are done by an in-house team
- [ ] Clients get a named point of contact and monthly reports
- [ ] Ad accounts, domains and hosting are registered in the client's name
- [ ] Design ownership transfers to the client on full payment
- [ ] Website maintenance and support plans are offered
- [ ] There are no long lock-in contracts
- [ ] The first consultation and the quote are free
