# Tripto

Travel booking front end built with React 19, Vite, Tailwind CSS 4 and React Router 7.

```bash
pnpm install
pnpm dev      # start dev server
pnpm build    # production build
pnpm lint     # oxlint
```

## Project structure

```
src/
├── main.jsx, App.jsx, index.css   entry point, router, global styles and Tailwind theme
├── assets/
│   ├── fonts/
│   └── images/          kebab-case file names; country flags in images/flags/
├── context/             React context (GuestContext + GuestProvider)
├── data/mockData.js     static content until there is an API
├── layouts/             route layouts (AppLayout renders the Header + <Outlet/>)
├── pages/               one component per route
└── components/
    ├── common/          small reusable UI shared across features
    ├── layout/          Header, SearchBar, footer/
    └── home/            Home page sections, grouped by section:
        ├── hero/            hero + booking search form (dates, guests, location)
        ├── deals/           deal sliders and cards
        ├── destinations/    trending destinations, top sights, things to do
        ├── explore/         video showcase
        ├── testimonials/
        └── Facilities.jsx
```

## Conventions

- One component per file; the file name matches the component name (PascalCase).
- Hooks and plain modules use camelCase (`useGuest`, `mockData.js`).
- Keep a component next to the feature that uses it; move it to `components/common/` only once a second feature needs it.
- Import paths are case-sensitive in CI/Linux even though macOS is not, so match file names exactly.
