# Sonam Korade — Portfolio (React)

A React + Vite rebuild of the animated portfolio, populated with Sonam Rajesh Korade's resume content.

## Stack
- React 19 + Vite
- Framer Motion (scroll-reveal & hover animations)
- Plain CSS with light/dark theme tokens (no CSS framework)
- Zero external image/icon dependencies — all icons and illustrations are inline SVG

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in /dist
npm run preview   # preview the production build
```

## Structure

```
src/
  components/     Navbar, Hero, Achievements, Skills, Education, Projects, Contact, Footer, Loader
  data/           portfolioData.js — all resume content lives here, edit freely
  hooks/          useTheme.js, useTypewriter.js
  index.css       design tokens + all styles
public/
  Sonam_Korade_Resume.pdf   linked from the Download Resume buttons
```

## Customizing

- **Content** (name, achievements, education, projects, skills, contact links): edit `src/data/portfolioData.js`.
- **Colors/fonts**: edit the `:root` tokens at the top of `src/index.css`.
- **Avatar photo**: replace the `.avatar` initials block in `src/components/Contact.jsx` with an `<img>` tag once you have a headshot.
- **Resume file**: swap `public/Sonam_Korade_Resume.pdf` and update `profile.resume` in `portfolioData.js` if you rename it.

## Notes
- Update the GitHub/LinkedIn URLs in `portfolioData.js` (currently placeholders) to your real profiles.
- Google Fonts (Sora, JetBrains Mono) are loaded via `<link>` tags in `index.html`; the site still works offline, just falls back to system fonts.
