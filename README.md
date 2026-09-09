# [YOUR NAME] — Portfolio

A creative-tech personal portfolio built with **React + Vite**, styled with
plain CSS (no Tailwind, no TypeScript) in a soft pastel, editorial-magazine
aesthetic.

---

## 1. Project overview

Single-page portfolio with the following sections, in order:

1. **Navbar** — sticky, with a mobile hamburger menu
2. **Hero** — headline, intro, availability status, CTA buttons
3. **About** — bio, identity facts, tags
4. **Selected Work** — 4 projects, with *Mumbels* shown as a large featured case study
5. **Creative Playground** — masonry-style gallery of visual experiments
6. **Toolkit** — design / development / AI skills as pastel pill groups
7. **Experience & Education** — internship + academic timeline
8. **Contact** — large pastel call-to-action block with social links
9. **Footer**

---

## 2. Folder structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── images/        ← put your project screenshots here
│   │   └── icons/         ← optional custom icons
│   ├── components/        ← one component + one CSS file per section
│   ├── data/
│   │   ├── config.js      ← your name, email, social links, resume
│   │   ├── projects.js    ← "Selected Work" project list
│   │   └── playground.js  ← "Creative Playground" gallery items
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── utils/
│   │   └── getImage.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css          ← design tokens (colors, fonts, spacing) + globals
├── index.html
├── package.json
└── vite.config.js
```

---

## 3. How to install

Open the project folder in VS Code, open a terminal, then run:

```bash
npm install
```

## 4. How to run

```bash
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`) — open it in
your browser. The page hot-reloads as you edit files.

---

## 5. How to replace images

All images live in **`src/assets/images/`**. If an image referenced in the
data files doesn't exist yet, the site automatically shows a soft pastel
placeholder labelled with the expected filename — so nothing breaks while
you're still collecting screenshots.

To add a real image, just drop a file into `src/assets/images/` with the
**exact filename** used in the data file. For example, for the Mumbels
project, add:

| File you add                          | Used for                          |
|----------------------------------------|------------------------------------|
| `cardivision-cover.jpg`                | Cardivision AI — small cover image |
| `cardivision-login.png`                | Cardivision AI — large photo (login page) |
| `cardivision-dashboard.png`            | Cardivision AI — large photo (dashboard) |
| `mumbels-logo.png`                     | 4-frame row — logo                 |
| `mumbels-menu-typographic.png`         | 4-frame row — typographic menu     |
| `mumbels-coming-soon.png`              | 4-frame row — coming soon promo    |
| `mumbels-menu-illustrated.png`         | 4-frame row — illustrated menu     |
| `course-recommendation.jpg`            | Project 02                         |
| `emotion-detection.jpg`                | Project 03                         |
| `service-provider-app.jpg`             | Project 04                         |
| `hero-portrait.png`                    | Hero section photo                 |
| `play-01.jpg` … `play-06.jpg`          | Creative Playground gallery items  |

You can rename these in `src/data/projects.js` and `src/data/playground.js`
if you'd rather use different filenames.

---

## 6. How to edit my name

Open **`src/data/config.js`** and change:

```js
name: '[YOUR NAME]',
initial: 'M.',
```

This updates the navbar, hero, footer and page title automatically.

---

## 7. How to edit email

Also in **`src/data/config.js`**:

```js
email: 'yourname@email.com',
```

The Contact section's "Email" link uses `mailto:` automatically.

---

## 8. How to edit social links

Still in **`src/data/config.js`**:

```js
linkedin: 'https://linkedin.com/in/your-username',
github: 'https://github.com/your-username',
instagram: 'https://instagram.com/your-username',
resume: '#', // link to your hosted resume PDF
```

---

## 9. How to add projects

Open **`src/data/projects.js`** and add a new object to the array:

```js
{
  id: '05',
  slug: 'my-new-project',
  title: 'My New Project',
  category: 'Category here',
  description: 'One or two sentences about the project.',
  tools: ['Tool 1', 'Tool 2'],
  accent: 'mint', // pink | mint | peach | yellow | lavender | blush
  featured: false,
  image: 'my-new-project.jpg',
},
```

To feature a project the way *Mumbels* is featured, set `featured: true` and
add a `gallery: ['img1.jpg', 'img2.jpg', 'img3.jpg']` array.

For the Creative Playground gallery, edit **`src/data/playground.js`** the
same way — `size` can be `small`, `tall`, or `wide`.

---

## 10. How to build for production

```bash
npm run build
```

This creates an optimized production build inside a `dist/` folder.

To preview the production build locally:

```bash
npm run preview
```

---

## 11. How to deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and sign in.
3. Click **Add New → Project** and import your GitHub repo.
4. Vercel auto-detects Vite — keep the defaults:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
5. Click **Deploy**. Your portfolio will be live at a `*.vercel.app` URL,
   which you can also connect to a custom domain later.

---

## Design tokens

All colors, fonts and spacing live at the top of **`src/index.css`** as CSS
variables, so you can re-theme the whole site by editing one place:

```css
:root {
  --bg: #FFF9F4;
  --surface: #FFFFFF;
  --text: #2F2927;
  --muted: #756B68;
  --pink: #EFB7C8;
  --blush: #F6D6D6;
  --peach: #F8D8C0;
  --mint: #D7EBDD;
  --yellow: #F7E7A9;
  --lavender: #DDD6F3;
  --border: rgba(47, 41, 39, 0.12);
}
```
