# Kisa Fatima Website

A clean production-ready Next.js website for Kisa Fatima's personal brand.

## Fresh install

```powershell
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production checks

```powershell
npm run lint
npm run typecheck
npm run build
npm run validate
```

## Git workflow

```powershell
git checkout -b develop
git add .
git commit -m "Add clean launch-ready website"
git push -u origin develop
```

Open a pull request from `develop` to `main` when ready for production.

## Vercel

Production branch: `main`  
Preview branch: `develop`

## Environment variables

Copy `.env.example` to `.env.local` for local development.

The contact and newsletter APIs work safely without provider keys. If keys are missing, they return success in demo mode and log no secrets.

## Image placeholders

Replace these files later:

```text
public/images/kisa-hero.svg
public/images/kisa-speaking.svg
public/og-image.svg
```

## Dependency note

This package uses stable TypeScript 5.9.3 to avoid npm peer dependency conflicts.
