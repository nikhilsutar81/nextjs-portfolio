# Deployment Guide

This document walks you through deploying the portfolio to Vercel. The instructions assume the project has been audited and is building cleanly (no TypeScript or lint errors).

> **Security update:** the template now pins Next.js to 15.5.12, a patched release that addresses CVE‑2025‑66478. Always keep Next.js up to date in production.

## 1. Prepare Environment Variables

Copy `.env.example` to `.env.local` and fill in all values. The same variables should be configured in the Vercel dashboard under your project settings:

```
MONGO_URI
TOKEN_SECRET
SMTP_HOST
SMTP_PORT
SMTP_USER
SMTP_PASS
CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
```

> **Build tip:** the repository once included a calendar dependency (`react-day-picker`) which conflicted with `date-fns` v4 required by `react-datepicker`. That dependency has been removed; you shouldn't need to add it or install with `--legacy-peer-deps`.

## 2. GitHub & Vercel Setup

1. Create or use an existing GitHub repository and push your local `main` branch.
2. Log in to [Vercel](https://vercel.com) and import the GitHub project.
3. During import, Vercel auto-detects Next.js and sets build command to `npm run build` and output directory to `.next`.
4. Add the environment variables from step 1 using the Vercel UI (under Settings → Environment Variables).
5. Deploy the project. The first build may take a few minutes as caches are created.

## 3. Common Issues

- **NPM dependency errors**: With the current dependency set, the project builds locally and on Vercel. If you ever add packages with conflicting peers, ensure you resolve them by aligning versions or removing unused libraries.
- **Database connection errors**: Make sure `MONGO_URI` points to a MongoDB Atlas cluster accessible from Vercel. The code now reuses a singleton connection to avoid listener leaks.
- **Email delivering problems**: Verify Brevo SMTP credentials in the environment; logs appear in `/api/contact` responses.

## 4. Post-Deployment

- After a successful deploy, you can run administrative actions by visiting `/admin` and logging in with credentials created via the `npm run create-admin` script or the admin UI.
- Monitor logs via the Vercel dashboard for runtime errors or warnings. The application should not emit build-time eslint warnings.

---

This guide ensures a smooth deploy with zero build errors, warnings, or runtime crashes. Good luck!