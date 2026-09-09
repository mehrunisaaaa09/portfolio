// ============================================================
// EDIT ME — add, remove or edit projects here.
// `image` should point to a file inside src/assets/images/.
// If the file doesn't exist yet, a soft pastel placeholder is
// shown automatically, so you can add real screenshots later.
// ============================================================

export const projects = [
  {
    id: '01',
    slug: 'cardivision-ai',
    title: 'Cardivision AI',
    fullTitle: 'Cardivision AI — Cardiovascular Risk Assessment Platform', // EDIT: adjust if you'd like a different full title
    category: 'AI / Web Design', // EDIT: change to match your real project category
    description:
      // EDIT: replace with your real one/two-sentence description of Cardivision AI
      'An AI-powered web platform concept, paired with a clean, modern interface designed to make its results easy to understand and act on.',
    tools: ['AI', 'React', 'UI Design'], // EDIT: swap in the real tools/tech you used
    accent: 'mint',
    featured: true,
    galleryLayout: 'screens', // shows full, uncropped screenshots side by side
    gallery: ['cardivision-login.png', 'cardivision-dashboard.png'],
  },
  {
    id: '02',
    slug: 'mumbels',
    title: 'Mumbels',
    fullTitle: 'Mumbels — Coffee, Sweetened with Honey',
    category: 'Brand Identity / Web Design',
    description:
      "A playful coffee shop concept created for the Gen-Z crowd, combining bold coffee, natural honey sweetness, and a fun visual identity across branding, menu design, packaging, and web design.",
    tools: ['Canva', 'Branding'],
    accent: 'pink',
    featured: true,
    gallery: [
      'mumbels-logo.png',
      'mumbels-menu-typographic.png',
      'mumbels-coming-soon.png',
      'mumbels-menu-illustrated.png',
    ],
  },
]
