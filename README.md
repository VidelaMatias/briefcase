# Matias Videla — Portfolio

Personal portfolio of Matias Videla, Senior Frontend Engineer. Single-page site
with a sticky sidebar, scroll-tracked navigation, and sections for experience,
projects and certifications, plus a contact form.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for scroll-reveal animations
- **FormSubmit** for the contact form (no backend required)
- Deployed on **Vercel**, with **Vercel Analytics**

## Running locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Content

Experience and project entries live in `src/fakedata/*.json`, so updating the
site is a matter of editing those files — no component changes required.
Certifications and the tech-stack list are defined in their respective
components under `src/components/homepageSections/`.

## Accessibility & performance

The site is checked with WAVE and Lighthouse against WCAG 2.1: semantic
landmarks, a skip link, visible focus rings, labelled form controls, and a
`prefers-reduced-motion` fallback for all animations. Images are served as
optimised WebP through `next/image`.
