
# richapp

Starter scaffold: **Next.js (App Router) + Prisma** — configured for deployment to **Vercel**.

## What's included
- Next.js app (TypeScript)
- Prisma schema + SQLite for local dev, Postgres for production
- Example API route and a sample page
- `.gitignore`, `LICENSE`, and GitHub Actions workflow

## Quickstart (local)
```bash
git init
npm install
npx prisma migrate dev --name init
npm run dev
```

## Deploy to Vercel
1. Push this repo to GitHub.
2. Import project to Vercel (connect your GitHub account).
3. Set env var `DATABASE_URL` for production (Postgres).
4. Vercel will auto-deploy on push to `main`.
