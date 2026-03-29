# Closing Engage Frontend

Frontend-only implementation of the Closing Engage marketing website, auth entry screens, signing company dashboard, and notary dashboard.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- React Router DOM
- Lucide React
- clsx
- tailwind-merge

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Notes

- Public routes, company routes, and notary routes are wired in `src/App.tsx`.
- Mock data lives in `src/data/mock-data.ts`.
- Shared theme tokens live in `src/index.css` and `src/theme/tokens.ts`.
- The implementation is frontend-only and uses static placeholders where PDF/document previews are shown in the designs.
