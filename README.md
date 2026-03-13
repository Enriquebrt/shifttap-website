# ShiftTap Website

Next.js App Router Projekt für die ShiftTap Landingpage, Support-Seite und Datenschutzerklärung.

## Stack

- Next.js
- React
- Vercel Analytics
- Vercel Speed Insights

## Routen

- `/` - deutsche Landingpage
- `/en` - englische Landingpage
- `/support` - Support und FAQ
- `/privacy` - Datenschutzerklärung

## Entwicklung

```bash
npm install
npm run dev
```

Lokaler Dev-Server: `http://localhost:3000`

## Production Build

```bash
npm run build
npm run start
```

## Inhalte und Assets

- Die bestehenden HTML-Dateien (`index.html`, `en/index.html`, `support.html`, `privacy.html`) bleiben als Inhaltsquelle im Repo.
- Die Next.js Routen rendern diese Inhalte über den App Router.
- Mockups liegen unter `public/images/mockups/`.

## Vercel Integrationen

Die Integration erfolgt im Root-Layout:

- `@vercel/analytics`
- `@vercel/speed-insights`

## Deployment

Empfohlenes Deployment: Vercel.

```bash
vercel
```

## App Store URLs

- Marketing URL: `https://shifttap.app`
- Support URL: `https://shifttap.app/support`
- Privacy URL: `https://shifttap.app/privacy`
