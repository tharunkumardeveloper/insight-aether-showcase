## Dharani K — Cinematic Portfolio

A premium, dark, multi-page portfolio site with cinematic motion. Designed to feel like a high-end tech/AI portfolio — deep navy/black backgrounds, soft violet-to-cyan gradient accents, glassmorphism cards, glowing hover states, and scroll-triggered reveals.

### Visual Direction
- **Palette**: Deep midnight base (`#0A0A14`), violet/indigo glow (`#7C3AED`), soft cyan accent (`#22D3EE`), warm ivory text. Subtle animated gradient mesh in hero.
- **Typography**: Modern sans (Inter / Space Grotesk) for body, a refined display face (e.g., Instrument Serif or Satoshi) for hero headlines for an elegant editorial accent.
- **Surfaces**: Glassmorphism cards with thin borders, soft inner glow, blurred backdrops.
- **Imagery**: Dharani's photo featured in the hero and About page with a soft glow ring and floating tech-themed accents.

### Pages (separate routes)
1. **Home (`/`)** — Cinematic hero
   - Animated gradient mesh background + floating particles
   - Large headline: "Dharani K — Building with Data & AI"
   - Animated typewriter rotating taglines (Data Analytics • AI/ML • Full Stack)
   - Photo with glowing ring + magnetic CTA buttons (View Work, Contact)
   - Quick stats strip: CGPA, Projects, Hackathons, Awards
   - Featured projects preview (3 glass cards with hover tilt)

2. **About (`/about`)**
   - Two-column layout: photo + executive summary
   - Education timeline with animated reveals
   - Languages, interests
   - Downloadable résumé CTA

3. **Experience (`/experience`)**
   - Vertical animated timeline (IEEE TEMS, Rudhra Info Solutions)
   - Glass cards with role, dates, bullet achievements
   - Scroll-progress line that fills as you scroll

4. **Projects (`/projects`)**
   - Grid of project cards (Urban Breeze, TalentTrack, FoodHopper)
   - 3D tilt + glow on hover, tech-stack chips, category tags
   - Each card expands details on click (modal/drawer)

5. **Skills & Achievements (`/skills`)**
   - Animated skill clusters (Programming, AI/ML, Web, Data) as glowing chips
   - Certifications grid (Coursera, NPTEL, AWS, Great Learning, Maiyyam)
   - Achievements section: 1st place IET, 10+ paper presentations, hackathons
   - Research paper highlight card

6. **Contact (`/contact`)**
   - Big animated "Let's connect" headline
   - Direct links: phone, email, LinkedIn, GitHub, location
   - Simple contact form (front-end only, mailto fallback) with floating-label inputs
   - Animated gradient background

### Global Elements
- **Sticky top nav** with logo monogram "DK", animated underline on active route, smooth route transitions
- **Footer** with social links and credit
- **Custom cursor glow** that follows the mouse (desktop only)
- **Page transitions**: fade + subtle slide between routes
- **Smooth scroll** + scroll-progress bar at top

### Animations (rich & cinematic)
- Animated gradient mesh hero background
- Floating particle field in hero
- Scroll-triggered fade/slide/scale reveals on every section (Framer Motion)
- Magnetic buttons that pull toward the cursor
- 3D tilt on project cards
- Animated number counters for stats
- Typewriter rotating roles in hero
- Glow pulses on accent elements
- Animated SVG timeline that draws as you scroll

### Content (from your résumé)
All text, dates, project descriptions, skills, certifications, achievements, and the research paper title will be lifted directly from the content you provided. Photo will be used in the hero and About page.

### Tech
- TanStack Start with separate route files per page (proper SSR + SEO; each page gets its own title/description/OG metadata)
- Tailwind v4 design tokens for the dark theme
- Framer Motion for animations
- Lucide icons
- No backend needed (static portfolio); contact form uses mailto

### What you'll get
A polished, recruiter-ready portfolio that loads fast, looks high-end on every device, and showcases Dharani's profile with motion that feels intentional — not gimmicky.