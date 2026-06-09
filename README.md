# KRIDO Wellness — Next.js rebuild

A scalable rebuild of the KRIDO Wellness site (originally Framer) on **Next.js + TypeScript + Tailwind**, ready for **GitHub + Vercel**. Booking and product sales run through **Vagaro**; the blog lives in the repo as Markdown.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. (`npm run build` is verified — all pages compile.)

## Deploy to GitHub + Vercel

1. Push to a new GitHub repo:
   ```bash
   git init && git add . && git commit -m "Initial KRIDO rebuild"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/krido-wellness.git
   git push -u origin main
   ```
2. On vercel.com → New Project → import the repo → Deploy (Next.js auto-detected).
3. In Vercel → Settings → Domains, add `kridowellness.com` + `www.kridowellness.com` and update DNS at your registrar. The Framer site stays live until you switch DNS, so there's **zero downtime** — you flip only when you're happy.

## How it's structured

```
app/                 Routes (one folder per page)
  page.tsx           Home page
  layout.tsx         Fonts + SEO metadata
  blog/              Blog index + [slug] post pages
  cryo-services/ …   Service/landing pages (ready to build out)
components/          Reusable sections (Header, Hero, Treatments, …)
content/blog/        ⭐ Your blog posts — one .md file each
lib/content.ts       ⭐ All site copy, links, and image URLs
lib/blog.ts          Reads + renders the markdown posts
```

**Edit content in `lib/content.ts` and `content/blog/` — rarely the components.**

## Vagaro (booking + products)

Both "Book Now" and product links open your Vagaro page (`vagaro.com/kridowellness`) in a new tab — Vagaro handles scheduling and checkout, so there's no cart to maintain here. It's all routed through one `BookNow` component and the `bookingUrl` / `shopUrl` values in `lib/content.ts`.

- **Want the booking calendar embedded in the page** instead of opening Vagaro? In Vagaro: Settings → Booking Widget → copy the embed code, and I'll drop it into a widget slot.
- **Want products to deep-link** to each item's exact Vagaro page? Send me the per-product URLs and I'll wire them in. Right now they all point to your Vagaro shop.

## Blog — how to post

Add a file to `content/blog/`, e.g. `content/blog/my-post.md`:

```md
---
title: "Your headline"
date: "2026-03-01"
excerpt: "One sentence shown on the blog list and in search results."
coverImage: "https://.../image.jpg"
---

Write your post here in Markdown. ## makes a heading, **bold** for emphasis.
```

Push it to GitHub and Vercel rebuilds automatically — the post appears on `/blog` and at `/blog/my-post`, with SEO tags generated for you. Two starter posts are included as examples; delete them whenever.

Prefer logging into a **visual editor** instead of editing files? Say the word and I'll connect a free CMS (Sanity) so you write posts in a dashboard.

## Still needed to be pixel-identical

1. **Exact fonts.** I used Fraunces + Inter as a close match. Send the real Framer font names (or files) and it's a one-block swap in `app/layout.tsx`.
2. **Self-host assets.** Images/video currently load from Framer's CDN so it looks right immediately. Before fully cutting over, move them into `/public` so you don't depend on Framer.
3. **Contact form backend.** The form UI works; connect an endpoint (Formspree ID in `components/ContactForm.tsx`, or I can add a Next.js API route + email).
4. **Inner service pages** (`/cryo-services`, `/facials`, etc.) are scaffolded and ready to build out.
