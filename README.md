# Abdallah Yahia Chat

React/Vite frontend for an Arabic educational community chat, with an Express API server, Supabase migrations, and shared TypeScript libraries.

## Packages

- `artifacts/ay-chat` — React/Vite frontend
- `artifacts/api-server` — Express API server
- `supabase/migrations` — database schema migrations
- `lib/*` — shared API, database, and object-storage packages

## Run locally

```bash
pnpm install
cp artifacts/ay-chat/.env.example artifacts/ay-chat/.env
cp artifacts/api-server/.env.example artifacts/api-server/.env
pnpm --filter @workspace/ay-chat dev
```

The API server requires the Supabase and database values documented in `artifacts/api-server/.env.example`.

## GitHub Pages preview

The static frontend preview is published from `docs/`. GitHub Pages can show the landing/auth UI, but authenticated chat actions and API routes require the API server to be deployed separately.

Local credential files are intentionally excluded from Git.
