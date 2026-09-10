# Muscle Engineers — Frontend guide

This is a single-page marketing website for **Muscle Engineers Fitness Hub**, built with a dark editorial fitness aesthetic: off-white surfaces, near-black sections, one controlled red accent, cinematic photography, and serif-led display typography.

## Stack and libraries

| Tool / library | Why it is used |
| --- | --- |
| Next.js 16 (App Router) | Application framework, static generation, metadata, and image optimisation. |
| React 19 + TypeScript | Component structure and type-safe frontend code. |
| Tailwind CSS v4 | Loaded as the CSS foundation. The visual system itself is intentionally written as custom CSS rather than utility-heavy markup. |
| `next/image` | Optimised responsive rendering for the gym photography. |
| Lucide React | Lightweight UI icons: menu, arrows, phone, map pin, play, and training concepts. |
| Locomotive Scroll v5 | Smooth scrolling and in-view/parallax capability. Version 5 is built on Lenis. |
| Lenis | Installed transitively through Locomotive Scroll; it powers the smooth-scroll behavior. |

No shadcn/ui components are currently used. The site does not need form/dialog primitives yet, so adding it would only increase project surface area.

## Application structure

```text
src/
  app/
    layout.tsx                 Global metadata and local-business structured data
    page.tsx                   Homepage section composition
    globals.css                Design system, responsiveness, animations
  components/
    scroll-reveal.tsx          Locomotive Scroll / Lenis setup
    whatsapp-cta.tsx           Floating WhatsApp joining CTA
    layout/
      navbar.tsx               Desktop and mobile navigation
      footer.tsx               Footer navigation and business details
    sections/
      hero.tsx
      philosophy.tsx
      trainers.tsx
      programs.tsx
      transformations.tsx
      membership.tsx
      facility.tsx
      location.tsx
  lib/
    site-data.ts               Shared images, address, phone, memberships
public/
  images/                      Source photography used by the homepage
```

## Page sections

### Navigation — `components/layout/navbar.tsx`

- Transparent over the hero and becomes dark/blurred once the user scrolls.
- Desktop links jump to homepage sections.
- Includes an Instagram link and membership CTA.
- Mobile replaces links with a full-screen navigation overlay and prevents background scrolling while open.

### Hero — `components/sections/hero.tsx`

- Full-viewport first impression with editorial headline, support copy, two CTAs, brand signature, and scroll cue.
- Uses `hero.jpg` with a dark image wash so the type remains readable.
- Initial copy enters with a restrained translate/fade animation.
- `data-scroll-speed` gives the photo a subtle Locomotive parallax effect on supported devices.

### Brand philosophy — `components/sections/philosophy.tsx`

- Introduces the training philosophy: science, nutrition, coaching, and accessibility.
- Uses a two-column editorial layout: statement on the left, practical principles on the right.

### Trainers — `components/sections/trainers.tsx`

- Introduces the coaching approach and gives visitors a direct call-to-coach action.
- Uses a feature image and three concise coaching-focus points rather than unverified trainer profiles.
- Add approved trainer names, biographies, and portraits here when they are available.

### Programs — `components/sections/programs.tsx`

- Six pathways: strength training, weight loss, nutrition, cardio, CrossFit, and personal training.
- Uses asymmetric image cards rather than a conventional uniform card grid.
- Every card links to the membership/enquiry section.

The Cardio, CrossFit, Nutrition, and Weight Loss images are generated, project-owned PNG assets in `public/images/programs/`. They use landscape editorial compositions with dark left-side negative space for the card titles.

### Transformations — `components/sections/transformations.tsx`

- Horizontally draggable before/after comparison interface.
- It deliberately uses clearly labelled placeholders rather than making up member results or showing unapproved photography.
- Replace `pendingRecords` with consented member stories/photos when available.

### Membership — `components/sections/membership.tsx`

- Day pass, monthly, and yearly memberships from `lib/site-data.ts`.
- Monthly is visually emphasised but pricing remains simple and transparent.
- Enquiry and join links call the business phone number directly.

### Facility — `components/sections/facility.tsx`

- Feature image plus small visual gallery.
- Uses the supplied photography to establish the atmosphere of the gym and show varied image crops.

### Location — `components/sections/location.tsx`

- Shows the full Virar West address, phone number, and operating hours.
- Includes a Google Maps directions link.
- Includes the official lazy-loaded Google Maps embed centred on the gym pin (`19.45757168182716, 72.80142777515738`) for in-page location browsing.

### Footer — `components/layout/footer.tsx`

- Repeats the most important navigation, location, phone, and social information.
- The copyright year is automatic.

## Shared content and assets

Update these without searching through components:

- `src/lib/site-data.ts` — phone, address, image paths, membership copy/prices.
- `public/images/` — replace photography while preserving the filenames, or update their paths in `site-data.ts`.
- `src/app/layout.tsx` — page title, search/social metadata, and `HealthClub` JSON-LD structured data.

The floating WhatsApp button opens `+91 74208 83355` with this prefilled message: “Hi Muscle Engineers, I want to join the gym.” Update it in `src/components/whatsapp-cta.tsx` if the sales message or number changes.

The approved gym logo lives at `public/images/logo.png` and is used in the navigation, hero, and footer through `next/image`.

## Styling and motion

All custom visual CSS lives in `src/app/globals.css`.

- `--ink`, `--paper`, and `--red` are the main brand tokens.
- `display-heading` is the serif editorial heading treatment.
- `section-label` creates the small uppercase heading and red rule.
- `action-link` is the reusable compact CTA style.
- Responsive layouts switch at `800px` and `430px`.
- `[data-scroll]` elements receive `is-inview` from Locomotive Scroll; this activates opacity, vertical reveal, and clipped-image transitions.
- Motion is reduced or disabled for visitors with `prefers-reduced-motion` enabled.

The font stacks use local system fallbacks (`Georgia` for display and `Arial` for interface text). This avoids build-time dependence on Google Fonts. If branded web fonts are licensed later, self-host them under `public/fonts` and configure them with `next/font/local`.

## Local development and checks

```bash
npm run dev
npm run lint
npx next build --webpack
```

`npm run build` uses Turbopack by default in this project. In the current execution environment Turbopack cannot start its CSS worker because local port binding is restricted; `npx next build --webpack` is the verified production-build alternative and completed successfully.

## Suggested next additions

1. Replace transformation placeholders with consented before/after photography.
2. Add a real membership enquiry form or WhatsApp CTA if the business wants lead capture beyond phone calls.
3. Replace placeholder Facebook/YouTube footer links with real URLs or remove them.
4. Set `metadataBase` in `layout.tsx` to the production domain before launch.
