# ShiftTap Website - Deployment Guide

Diese Website enthält die Datenschutzerklärung und Landing Page für ShiftTap.

## Dateien

- `index.html` - Startseite mit Features
- `privacy.html` - Datenschutzerklärung (erforderlich für App Store)
- `support.html` - Support & FAQ Seite

---

## Deployment-Optionen

### Option 1: GitHub Pages (Empfohlen - Kostenlos)

#### Schritt 1: GitHub Repository erstellen

```bash
# Erstelle neues Repository auf GitHub
# Name: shifttap-website (public)

# Lokal
cd /Users/enrique/Dev/Projekte/ShiftTap/website
git init
git add .
git commit -m "Initial website commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shifttap-website.git
git push -u origin main
```

#### Schritt 2: GitHub Pages aktivieren

1. Gehe zu **GitHub Repository → Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** → Folder: **/ (root)**
4. Klicke **Save**

✅ Website ist jetzt live unter: `https://YOUR_USERNAME.github.io/shifttap-website/`

#### Schritt 3: Custom Domain konfigurieren

1. **Domain kaufen** (z.B. bei Namecheap, GoDaddy, Hostinger)
   - Domain: `shifttap.app`

2. **DNS Settings konfigurieren:**

   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   TTL: Auto

   Type: A
   Host: @
   Value: 185.199.109.153
   TTL: Auto

   Type: A
   Host: @
   Value: 185.199.110.153
   TTL: Auto

   Type: A
   Host: @
   Value: 185.199.111.153
   TTL: Auto

   Type: CNAME
   Host: www
   Value: YOUR_USERNAME.github.io
   TTL: Auto
   ```

3. **In GitHub Pages:**
   - Custom domain: `shifttap.app`
   - ☑️ Enforce HTTPS (warten bis DNS propagiert)

✅ Website ist jetzt live unter: `https://shifttap.app`

---

### Option 2: Vercel (Empfohlen - Kostenlos & Schnell)

#### Schritt 1: Vercel Account erstellen

1. Gehe zu [vercel.com](https://vercel.com)
2. Registriere dich mit GitHub

#### Schritt 2: Projekt deployen

```bash
# Vercel CLI installieren
npm install -g vercel

# In website-Ordner wechseln
cd /Users/enrique/Dev/Projekte/ShiftTap/website

# Deployen
vercel
```

#### Schritt 3: Custom Domain

1. In Vercel Dashboard: **Settings → Domains**
2. Domain hinzufügen: `shifttap.app`
3. DNS Records wie angezeigt konfigurieren

✅ Website ist live mit automatischem HTTPS!

---

### Option 3: Netlify (Alternative - Kostenlos)

#### Drag & Drop Methode:

1. Gehe zu [netlify.com](https://netlify.com)
2. Ziehe den `website` Ordner auf die Seite
3. Fertig! Website ist live

#### Custom Domain:

1. Domain settings → Add custom domain
2. DNS Records konfigurieren

---

## Domain-Anbieter Empfehlungen

### Günstig & Gut:
1. **Namecheap** (€8-12/Jahr) - Empfohlen
2. **Porkbun** (€7-10/Jahr)
3. **Hostinger** (€10-15/Jahr)

### Premium:
4. **GoDaddy** (€15-20/Jahr)
5. **Google Domains** (€12-15/Jahr)

---

## App Store Connect URLs

Sobald die Website live ist, verwende diese URLs:

```
Privacy Policy URL: https://shifttap.app/privacy
Marketing URL: https://shifttap.app
Support URL: https://shifttap.app/support
```

---

## Testing vor Einreichung

### Checklist:

- [ ] Privacy Policy URL ist erreichbar: https://shifttap.app/privacy
- [ ] Support URL ist erreichbar: https://shifttap.app/support
- [ ] HTTPS ist aktiv (grünes Schloss)
- [ ] Mobile Ansicht funktioniert
- [ ] Alle Links funktionieren
- [ ] E-Mail support@shifttap.app ist eingerichtet

---

## E-Mail Setup (support@shifttap.app)

### Option 1: Namecheap Email Forwarding (Kostenlos)

1. Namecheap Dashboard → Email Forwarding
2. Forwarding einrichten: `support@shifttap.app` → `deine-gmail@gmail.com`

### Option 2: Google Workspace (€6/Monat)

1. Anmelden bei [workspace.google.com](https://workspace.google.com)
2. Domain verifizieren
3. E-Mail-Konto erstellen

### Option 3: Proton Mail (Kostenlos/Günstig)

1. Custom Domain bei Proton Mail
2. MX Records konfigurieren

---

## Schnellstart-Anleitung (GitHub Pages)

```bash
# 1. Repository erstellen auf github.com
# Name: shifttap-website

# 2. Dateien hochladen
cd /Users/enrique/Dev/Projekte/ShiftTap/website
git init
git add .
git commit -m "Add ShiftTap website"
git remote add origin https://github.com/YOUR_USERNAME/shifttap-website.git
git push -u origin main

# 3. GitHub Pages aktivieren (siehe oben)

# 4. Domain kaufen und DNS konfigurieren (siehe oben)

# 5. In App Store Connect URLs eingeben
```

---

## Troubleshooting

### "404 Not Found" nach Deployment:

- Warte 5-10 Minuten (DNS Propagation)
- Überprüfe Branch in GitHub Pages Settings
- Stelle sicher, dass `index.html` im root liegt

### "Not Secure" (kein HTTPS):

- In GitHub Pages: "Enforce HTTPS" aktivieren
- Warte 24h für DNS Propagation
- Bei Vercel/Netlify: Automatisch nach DNS Setup

### Domain funktioniert nicht:

- DNS Propagation kann 24-48h dauern
- Überprüfe DNS Records mit [dnschecker.org](https://dnschecker.org)
- Stelle sicher CNAME auf `YOUR_USERNAME.github.io` zeigt

---

## Kosten-Übersicht

| Service | Preis | Empfehlung |
|---------|-------|------------|
| GitHub Pages | **Kostenlos** | ✅ Beste für Anfang |
| Vercel | **Kostenlos** | ✅ Professionell |
| Netlify | **Kostenlos** | ✅ Alternative |
| Domain (.app) | €8-12/Jahr | Namecheap |
| E-Mail Forwarding | **Kostenlos** | Namecheap |
| Google Workspace | €6/Monat | Optional |

**Empfohlene Kombination:**
- GitHub Pages (kostenlos)
- Namecheap Domain (€10/Jahr)
- E-Mail Forwarding (kostenlos)

**Total: ~€10/Jahr** 🎉

---

## Next Steps

1. ✅ Dateien erstellt (erledigt)
2. ⏳ Domain kaufen (shifttap.app)
3. ⏳ GitHub Repository erstellen
4. ⏳ GitHub Pages aktivieren
5. ⏳ DNS konfigurieren
6. ⏳ E-Mail einrichten
7. ⏳ URLs in App Store Connect eingeben

---

*Bei Fragen: Diese README durchlesen oder mich fragen! 🚀*
