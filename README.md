# Northstar Amazon Product Research

Internal Amazon US product-opportunity research workspace built with Next.js, TypeScript, Tailwind CSS, Supabase PostgreSQL, and Recharts.

## Local development

```bash
pnpm install
pnpm dev
```

Copy `.env.example` to `.env.local` when a Supabase project is available. The current application uses `MockOpportunityRepository`, so no credentials are required.

## Architecture

- `app/` — App Router pages and layouts
- `components/` — shared application shell and dashboard components
- `lib/mock-data.ts` — realistic API-free sample dataset
- `lib/repositories/` — data access contracts; swap the mock repository for Supabase later
- `lib/supabase/` — Supabase client factory
- `types/` — domain types shared across pages and repositories
- `supabase/schema.sql` — PostgreSQL schema, indexes, constraints, and RLS preparation

## Deployment

Import the repository into Vercel, set the two Supabase environment variables when the backend is enabled, and deploy using the standard Next.js preset.
