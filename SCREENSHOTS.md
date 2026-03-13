# ShiftTap - Screenshot-Anleitung

## Screenshots später hinzufügen

Die Website ist mit Platzhaltern vorbereitet. So fügst du später echte Screenshots hinzu:

---

## Option 1: Bilder hochladen (Empfohlen)

### Schritt 1: Screenshots erstellen

Erstelle Screenshots in der App:
1. iPhone Simulator oder echtes Gerät
2. Verschiedene Screens: Dashboard, Insights, Schedule, Live Activity
3. Format: PNG, mindestens 1170x2532px (iPhone 14 Pro)

### Schritt 2: Screenshots optimieren

```bash
# Erstelle images Ordner
mkdir /Users/enrique/Dev/Projekte/ShiftTap/website/images

# Screenshots dort speichern als:
- dashboard.png
- insights.png
- schedule.png
- live-activity.png
- hero-phone.png
```

### Schritt 3: HTML anpassen

Ersetze im `index.html`:

```html
<!-- Hero Screenshot -->
<div class="screenshot-placeholder">
    📱<br>App Icon &<br>Hauptansicht
</div>
```

**Mit:**

```html
<img src="images/hero-phone.png" alt="ShiftTap Dashboard">
```

**Und Screenshot-Cards:**

```html
<!-- Vorher -->
<div class="screen">📊</div>

<!-- Nachher -->
<div class="screen">
    <img src="images/dashboard.png" alt="Dashboard" style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;">
</div>
```

---

## Option 2: Externe Hosting (Schneller)

Lade Screenshots zu einem Image Host hoch:

1. **Imgur**: imgur.com/upload
2. **Cloudinary**: cloudinary.com (kostenlos)
3. **GitHub**: Direkt im Repo speichern

Dann verwende die URLs:

```html
<img src="https://i.imgur.com/XXXXX.png" alt="Dashboard">
```

---

## Screenshot-Empfehlungen für App Store

### Benötigte Screenshots:

#### 1. 6.7" Display (iPhone 14 Pro Max) - 1290 x 2796px
- Dashboard / Home
- Smart Insights
- Schichtplanung
- Live Activity (Lock Screen)
- Widgets Übersicht
- Premium Features

#### 2. 6.5" Display (iPhone 11 Pro Max) - 1242 x 2688px
(Falls du auch ältere Geräte unterstützen möchtest)

### Screenshot-Reihenfolge:

1. **Hero Shot** - Dashboard mit Daten
2. **Killer Feature** - Live Activity / Smart Insights
3. **Hauptfunktion** - Schichtplanung
4. **Zusatzfeature** - Widgets
5. **Premium** - Premium Features Übersicht

---

## App Icon für Website

Exportiere das App Icon aus Xcode:

```bash
# App Icon ist in:
ShiftTap/Resources/Assets.xcassets/AppIcon.appiconset/

# Kopiere die 1024x1024 Version als:
/Users/enrique/Dev/Projekte/ShiftTap/website/images/app-icon.png
```

Dann im HTML `<head>` hinzufügen:

```html
<link rel="icon" type="image/png" href="images/app-icon.png">
<link rel="apple-touch-icon" href="images/app-icon.png">
```

---

## Screenshot-Tools (Optional)

### 1. Simulator Screenshots

```bash
# Im Simulator:
# CMD + S = Screenshot
# Gespeichert in: ~/Desktop/
```

### 2. Framer für Marketing Screenshots

- **Rotato**: rotato.app (3D Mockups)
- **Screely**: screely.com (Browser Mockups)
- **Mockuuups**: mockuuups.studio (Device Frames)

### 3. Screenshot-Bearbeitung

```bash
# ImageMagick (Terminal)
brew install imagemagick

# Resize
convert input.png -resize 1290x2796 output.png

# Optimize
convert input.png -quality 85 output.png
```

---

## Farben aus der Website extrahieren

Die Website verwendet diese Farben (für Screenshot-Matching):

```css
Primary: #667eea (Lila-Blau)
Secondary: #764ba2 (Dunkellila)
Dark: #2d3748 (Fast-Schwarz)
Light: #f7fafc (Hellgrau)
```

---

## Open Graph Image (Social Media)

Für Social Media Previews:

```bash
# Erstelle ein 1200x630px Bild
# Mit: App Icon + Tagline + Gradient
# Speichere als: og-image.png
```

Im HTML `<head>` ist bereits vorbereitet:

```html
<meta property="og:image" content="https://shifttap.app/og-image.png">
```

---

## Deployment nach Screenshot-Update

```bash
cd /Users/enrique/Dev/Projekte/ShiftTap/website

# Füge neue Bilder hinzu
git add images/
git add index.html

# Commit
git commit -m "Add app screenshots"

# Push (Vercel deployed automatisch)
git push origin main
```

---

## Platzhalter vs. Echte Bilder

**Aktuell (Platzhalter):**
- ✅ Website funktioniert
- ✅ Layout ist fertig
- ✅ Kann für App Store eingereicht werden
- ⏳ Screenshots können später hinzugefügt werden

**Mit echten Screenshots:**
- ✅ Professioneller
- ✅ Bessere Conversion
- ✅ Nutzer sehen tatsächliche App
- ✅ Höhere Download-Rate

---

## Schnell-Anleitung (5 Minuten)

```bash
# 1. Screenshots im Simulator machen (CMD + S)
# 2. Bilder optimieren und umbenennen
# 3. In images/ Ordner kopieren

mkdir website/images
cp ~/Desktop/Simulator*.png website/images/

# 4. HTML anpassen (siehe oben)
# 5. Testen
open website/index.html

# 6. Deployen
cd website
git add .
git commit -m "Add screenshots"
git push origin main
```

---

**Für jetzt:** Die Platzhalter sind vollkommen ausreichend für den App Store Submission! Du kannst echte Screenshots später hinzufügen, wenn die App live ist.

🎉 **Die Website ist ready für App Store Connect!**
