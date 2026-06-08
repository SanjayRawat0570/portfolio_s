# Sanjay Rawat — Portfolio

A modern, animated developer portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Features a light/dark theme toggle, a resume download, and a working contact form (Resend).

## Tech
- Next.js 16 + React 19
- Tailwind CSS v4 (CSS-based theme tokens, light + dark)
- Framer Motion (scroll reveals, staggered hero, animated navbar)
- Resend (contact form email delivery)

## Develop
```bash
npm install
cp .env.example .env.local   # then fill in RESEND_API_KEY
npm run dev                  # http://localhost:3000
npm run build                # production build
npm run start                # serve production build
```

## Edit content
All content lives in **`src/lib/data.ts`** — profile, stats, skills, experience, projects.
Components are in `src/components/`.

### ✏️ Update before publishing
In `src/lib/data.ts` replace the placeholder URLs:
- `github` → your GitHub profile
- `linkedin` → your LinkedIn profile
- per-project `github` / `live` links

Email and phone are already wired in. Your resume is at `public/Sanjay_Rawat_Resume.pdf`
(replace that file to update the download).

## Contact form (Resend)
1. Create a free account at https://resend.com and grab an API key.
2. Put it in `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxx
   CONTACT_TO_EMAIL=sanjayrawat0570@gmail.com
   CONTACT_FROM_EMAIL=Portfolio <onboarding@resend.dev>
   ```
3. Restart `npm run dev`. Messages arrive in your inbox (reply-to is the sender).

> Without a verified domain, Resend only lets `onboarding@resend.dev` send to **your own**
> account email. To send from your own domain (e.g. `hello@sanjay.dev`), verify it in Resend
> and update `CONTACT_FROM_EMAIL`.

## Theme
Light/dark toggle in the navbar. Preference is saved to `localStorage` and applied before
paint (no flash). Default is dark.

## Deploy (Vercel)
```bash
npm i -g vercel
vercel
```
Add the same env vars (`RESEND_API_KEY`, etc.) in the Vercel project settings → Environment Variables.
Or push to GitHub and import at https://vercel.com/new.
