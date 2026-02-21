# Sadik Visuals — Photography Portfolio

A clean, content-driven photography portfolio website built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**. All site content is managed from a single configuration file — no JSX editing required to update text, images, or metadata.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customising Content](#customising-content)
  - [Site Metadata](#site-metadata)
  - [Hero Section](#hero-section)
  - [Gallery Sections](#gallery-sections)
  - [Home Page Featured Work](#home-page-featured-work)
  - [About Section](#about-section)
  - [Contact Section](#contact-section)
  - [Footer](#footer)
- [Adding Images](#adding-images)
- [Pages](#pages)
- [Components](#components)
- [Scripts](#scripts)
- [Deployment](#deployment)

---

## Features

- **Full-screen hero slideshow** — auto-rotating background images with a Ken Burns zoom effect and dot indicators.
- **Gallery sections** — filterable categories (People, Places, Presence) with lazy-loaded image grids.
- **Bento / mixed grid layout** — landscape images automatically span two columns on the home page featured section.
- **Lightbox modal** — full-screen image viewer with previous/next navigation and keyboard support (`←`, `→`, `Esc`).
- **Smart navbar** — transparent over the hero image, switches to a frosted-glass style on scroll or on inner pages.
- **Content-driven** — every heading, paragraph, image path, and link is managed in `src/data/siteContent.ts`.
- **Responsive design** — mobile-first layout using Tailwind CSS utility classes.
- **Client-side routing** — React Router v7 handles all page transitions without full page reloads.

---

## Tech Stack

| Layer        | Library / Tool             | Version |
| ------------ | -------------------------- | ------- |
| UI Framework | React                      | ^19.2   |
| Language     | TypeScript                 | ~5.9    |
| Styling      | Tailwind CSS (Vite plugin) | ^4.1    |
| Bundler      | Vite                       | ^7.2    |
| Routing      | React Router DOM           | ^7.11   |
| Linting      | ESLint + typescript-eslint | ^9      |

---

## Project Structure

```
photoPortfolio/
├── public/
│   └── images/
│       ├── about/          # Photographer portrait
│       ├── gallery/
│       │   ├── moments/    # "Presence" category images
│       │   ├── people/     # "People" category images
│       │   ├── places/     # "Places" category images
│       │   └── selected/   # Home page featured images
│       └── hero/           # Hero slideshow images
└── src/
    ├── App.tsx             # Root component: router + layout shell
    ├── main.tsx            # Entry point
    ├── components/         # Reusable UI components
    │   ├── Navbar.tsx          # Fixed top navigation bar
    │   ├── Footer.tsx          # Site footer
    │   ├── HeroGallery.tsx     # Full-screen hero slideshow
    │   ├── GallerySection.tsx  # Titled section wrapper around ImageGrid
    │   ├── ImageGrid.tsx       # Responsive image grid with lightbox trigger
    │   ├── LightboxModal.tsx   # Full-screen image viewer modal
    │   ├── AboutSection.tsx    # About blurb + stats
    │   ├── ContactSection.tsx  # Contact details + social links
    │   └── index.ts            # Barrel export for all components
    ├── data/
    │   └── siteContent.ts  # ★ Single source of truth for all content
    ├── pages/              # Route-level page components
    │   ├── HomePage.tsx
    │   ├── WorkPage.tsx
    │   ├── AboutPage.tsx
    │   ├── ContactPage.tsx
    │   ├── PrivacyPolicyPage.tsx
    │   ├── TermsOfServicePage.tsx
    │   └── index.ts        # Barrel export for all pages
    └── styles/
        └── index.css       # Global styles + Tailwind directives
```

---

## Getting Started

### Prerequisites

- **Node.js** 18 or later
- **npm** 9 or later (or pnpm / yarn)

### Install & Run

```bash
# Clone the repository
git clone <repo-url>
cd photoPortfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Customising Content

All site text and image paths live in **`src/data/siteContent.ts`**. Edit that file and the entire site updates automatically.

### Site Metadata

```ts
export const siteMetadata = {
  name: "Sadik Visuals", // Displayed in the navbar and footer
  tagline: "Capturing Authentic Moments",
  description: "...", // Used for meta tags
  copyright: "© 2026 ...", // Displayed in the footer
};
```

### Hero Section

```ts
export const heroContent = {
  headline: "Visual Stories",
  subheadline: "Photography that captures...",
  ctaText: "View Selected Work",
  ctaLink: "/work",
  images: [
    { src: "/images/hero/hero-1.jpg", alt: "..." },
    // Add more images for the slideshow
  ],
};
```

### Gallery Sections

Each section appears on the **Work** page and can be independently filtered.

```ts
export const gallerySections: GallerySection[] = [
  {
    id: "people", // Used by the category filter — must be unique
    title: "People",
    description: "...",
    aspectRatio: "portrait", // 'portrait' | 'landscape' | 'square'
    images: [
      {
        src: "/images/gallery/people/people-1.jpg",
        alt: "...",
        title: "Quiet Reflection",
      },
    ],
  },
];
```

### Home Page Featured Work

```ts
export const homePageFeatured = {
  sectionTitle: "Selected Work",
  sectionSubtitle: "A glimpse into recent projects",
  featuredSectionId: "moments", // Used when useManualSelection is false
  manualSelection: [
    {
      src: "/images/gallery/selected/selected-1.jpg",
      alt: "...",
      isLandscape: true,
    },
    // isLandscape: true → image spans 2 grid columns (bento layout)
  ],
  useManualSelection: true, // true = manualSelection, false = featuredSectionId
};
```

### About Section

```ts
export const aboutContent = {
  title: "About",
  subtitle: "The Story Behind the Lens",
  paragraphs: ["...", "..."],
  image: "/images/about/photographer.jpg",
  imageAlt: "Photographer at work",
  stats: [{ label: "Years of Experience", value: "8+" }],
};
```

### Contact Section

```ts
export const contactContent = {
  title: "Get in Touch",
  email: "you@example.com",
  phone: "+1 (000) 000-0000",
  location: "City, State, Country",
  availability: "Currently accepting bookings for 2026",
  socialLinks: [
    { platform: "Email", url: "mailto:you@example.com", icon: "email" },
  ],
};
```

### Footer

```ts
export const footerContent = {
  text: "Crafted with care in St. Louis",
  links: [
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
  ],
};
```

---

## Adding Images

Place images inside the `public/images/` directory. Vite serves everything under `public/` at the root URL, so `public/images/hero/hero-1.jpg` is referenced in code as `/images/hero/hero-1.jpg`.

| Folder                            | Purpose               | Recommended size             |
| --------------------------------- | --------------------- | ---------------------------- |
| `public/images/hero/`             | Hero slideshow        | ≥ 1920 × 1080 px, landscape  |
| `public/images/gallery/people/`   | "People" category     | Any portrait ratio           |
| `public/images/gallery/places/`   | "Places" category     | Landscape preferred          |
| `public/images/gallery/moments/`  | "Presence" category   | Any ratio                    |
| `public/images/gallery/selected/` | Home page featured    | Mix of landscape + portrait  |
| `public/images/about/`            | Photographer portrait | Square or portrait, high-res |

> **Tip:** Provide accurate `alt` text and an optional `title` for every image. The `title` is shown as a caption in the lightbox.

---

## Pages

| Route      | Component            | Description                                  |
| ---------- | -------------------- | -------------------------------------------- |
| `/`        | `HomePage`           | Hero slideshow + featured work grid with CTA |
| `/work`    | `WorkPage`           | Full gallery with category filter tabs       |
| `/about`   | `AboutPage`          | Photographer bio, portrait, and stats        |
| `/contact` | `ContactPage`        | Contact details and social links             |
| `/privacy` | `PrivacyPolicyPage`  | Auto-rendered from `privacyPolicyContent`    |
| `/terms`   | `TermsOfServicePage` | Auto-rendered from `termsOfServiceContent`   |

---

## Components

| Component        | Key Props                                                   | Description                                                 |
| ---------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `Navbar`         | `siteName`, `links`                                         | Fixed top bar; transparent on hero, frosted-glass on scroll |
| `Footer`         | `siteName`, `copyright`, `text`, `links`                    | Site footer with nav links                                  |
| `HeroGallery`    | `headline`, `subheadline`, `ctaText`, `ctaLink`, `images`   | Auto-rotating full-screen slideshow with Ken Burns effect   |
| `GallerySection` | `section`, `columns?`                                       | Section header + `ImageGrid` wrapper                        |
| `ImageGrid`      | `images`, `columns?`, `aspectRatio?`                        | Lazy-loaded grid; supports `mixed` bento layout             |
| `LightboxModal`  | `images`, `currentIndex`, `isOpen`, `onClose`, `onNavigate` | Full-screen viewer with keyboard navigation                 |
| `AboutSection`   | (reads `aboutContent`)                                      | Bio paragraphs, portrait image, and stat cards              |
| `ContactSection` | (reads `contactContent`)                                    | Email, phone, location, and social icon links               |

---

## Scripts

```bash
npm run dev       # Start local dev server  →  http://localhost:5173
npm run build     # Type-check + production build  →  dist/
npm run preview   # Serve the production build locally
npm run lint      # Run ESLint across all source files
```

---

## Deployment

`npm run build` outputs a fully static site to `dist/`. Deploy it to any static hosting provider:

- **Vercel** — connect the repo; Vite is auto-detected.
- **Netlify** — build command `npm run build`, publish directory `dist`.
- **GitHub Pages** — push `dist/` or use a GitHub Actions workflow.

> **SPA routing note:** Configure your host to redirect all requests to `index.html` so that deep links work correctly. On Netlify, add a `public/_redirects` file containing `/* /index.html 200`.
