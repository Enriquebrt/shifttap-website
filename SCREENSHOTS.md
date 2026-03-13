# ShiftTap Screenshot Setup

Die neue Website ist so gebaut, dass du echte App-Screenshots einfach in den Ordner `images/` legst. Wenn eine Datei fehlt, zeigt die Seite automatisch einen stilvollen Platzhalter statt eines kaputten Bildes.

## Screenshot-Dateien

Lege diese Dateien in `/Users/enrique/Dev/Projekte/ShiftTap/website/images/` ab:

- `hero-overview.png`
- `hero-quick-actions.png`
- `dashboard.png`
- `insights.png`
- `schedule.png`
- `live-activity.png`

## Wo welche Datei verwendet wird

- `hero-overview.png`
  Die grosse iPhone-Darstellung im Hero und die erste breite Galerie-Karte.
- `hero-quick-actions.png`
  Das zweite kleinere iPhone im Hero.
- `dashboard.png`
  Der erste grosse Story-Block fuer deine Home- oder Dashboard-Ansicht.
- `insights.png`
  Der Analytics-Story-Block und die Analytics-Galerie.
- `schedule.png`
  Der Planungs-Story-Block und die Schedule-Galerie.
- `live-activity.png`
  Die letzte Galerie-Karte fuer Live Activity oder Lock Screen.

## Empfohlene Formate

- iPhone Screens: PNG
- Aufloesung: mindestens 1290 x 2796 px, wenn du bereits App-Store-Screens nutzt
- Hintergrund: am besten direkt aus der App, ohne zusaetzliche Geraeterahmen

Die Website setzt ihre eigenen Device-Frames und Karten bereits um.

## Schnelltest lokal

1. Screenshots in `images/` ablegen
2. Seite lokal oeffnen
3. Pruefen, ob die Platzhalter automatisch verschwinden

## Optional zusaetzlich sinnvoll

- `app-icon.png` fuer Favicons und Apple Touch Icon
- `og-image.png` fuer Social Sharing Preview

## Deployment

```bash
cd /Users/enrique/Dev/Projekte/ShiftTap/website
git add index.html support.html privacy.html styles.css script.js images SCREENSHOTS.md
git commit -m "Modernize marketing site and add screenshot slots"
git push origin main
```
