# Faheem Shan K A — Portfolio (v2)

React + Vite + Tailwind CSS v4 + Framer Motion + React Router.

## 1. How to run this

```bash
cd Portfolio_V2
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

To build for deployment:

```bash
npm run build
npm run preview   # test the production build locally
```

Deploy the `dist/` folder to Vercel, Netlify, or GitHub Pages — all free for a static site like this.

## 2. Folder structure — what goes where

```
src/
  context/
    ThemeContext.jsx     ← global light/dark theme state (see below)

  components/             ← reusable, dumb UI pieces. Used across pages.
    Navbar.jsx
    Footer.jsx
    Button.jsx             ← use this everywhere instead of raw <button>
    ThemeToggle.jsx
    RevealSection.jsx      ← wraps content for the scroll-fade-in effect
    SectionHeading.jsx     ← "/label" + ghost text + title pattern
    ProjectCard.jsx
    SkillBox.jsx
    icons/BrandIcons.jsx   ← GitHub/LinkedIn SVGs (lucide-react dropped these)

  pages/                  ← one file per route, assembled from components
    Home.jsx
    About.jsx
    Projects.jsx
    ProjectDetail.jsx      ← dynamic route: /projects/:slug
    Skills.jsx
    Contact.jsx

  data/                   ← YOUR CONTENT LIVES HERE, separate from UI code
    profile.js              ← name, bio, experience, contact links
    projects.js              ← all 5 projects: description, tech, screenshots
    skills.js                ← skill categories and tags

  App.jsx                 ← routes are wired up here
  main.jsx                ← app entry point, wraps everything in ThemeProvider
  index.css                ← theme color variables (dark/light) + Tailwind import

public/
  projects/<slug>/         ← put real screenshots here for each project
```

**The rule to remember:** when you want to change text, links, or project
info, edit files in `src/data/` — never touch component files for that. When
you want to change how something *looks* or *behaves*, edit `src/components/`.

## 3. How theming works (ThemeContext)

`src/context/ThemeContext.jsx` holds one piece of global state: `theme`,
either `"dark"` or `"light"`. It's provided once in `main.jsx` so any
component anywhere can do:

```jsx
import { useTheme } from "../context/ThemeContext";

const { theme, toggleTheme } = useTheme();
```

The actual colors live as CSS variables in `src/index.css`
(`--bg`, `--text-primary`, `--accent`, etc.), switched by a
`data-theme="light"` attribute on `<html>`. This means:
- You never hardcode colors in components — always `var(--accent)` etc.
- Changing the whole site's palette means editing ONE place: `index.css`.
- The choice is remembered via `localStorage`, and defaults to the
  visitor's OS preference on first visit.

## 4. Adding a new project

Open `src/data/projects.js` and add an object to the array:

```js
{
  slug: "my-new-project",      // used in the URL: /projects/my-new-project
  name: "My New Project",
  tagline: "One-line category",
  description: "Short card description.",
  longDescription: "Full paragraph for the detail page.",
  tech: ["Python", "Django"],
  repo: "https://github.com/you/repo",
  demo: "",                     // optional live link
  screenshots: ["/projects/my-new-project/1.png"],
}
```

Then drop screenshot images into `public/projects/my-new-project/`.
That's it — the grid and detail page pick it up automatically.

## 5. TODO before this is ready to publish

- [ ] Replace placeholder GitHub repo URLs in `src/data/projects.js`
      (currently `your-username`) with your real repo links
- [ ] Replace `github`/`linkedin` URLs in `src/data/profile.js`
- [ ] Add real screenshots to `public/projects/<slug>/` (each folder has a
      README.txt placeholder telling you where to put them)
- [ ] The contact form is UI-only right now — it logs to the console instead
      of sending an email. Wire it to a real backend (a small FastAPI/Django
      endpoint of your own, since you're already backend-focused, or a
      no-code service like Formspree) before relying on it
- [ ] Update `profile.email` / `profile.phone` if they change

## 6. Notes on the accent color

Currently set to amber (`#F5A623` dark mode / `#D9820F` light mode) via
CSS variables in `index.css`. To try a different accent, change `--accent`
in both the `:root` and `[data-theme="light"]` blocks — every button,
link, and glow effect updates automatically since they all reference the
variable rather than a hardcoded color.
