# ShiftTap Mockup Setup

Die Homepage nutzt jetzt echte iPhone-Mockups als Bilddateien und ist strukturell an `payer.framer.website` angelehnt.

## Mockup-Ordner

Lege deine fertigen Render in:

- `/Users/enrique/Dev/Projekte/ShiftTap/website/images/mockups/`

## Erwartete Dateinamen

- `hero-main.png`
- `quick-actions.png`
- `shift-overview.png`
- `insights.png`
- `live-activity.png`

## Wo sie eingesetzt werden

- `hero-main.png`
  Der grosse zentrale Device-Shot im Hero.
- `quick-actions.png`
  Die erste Showcase-Section "Quick Actions".
- `shift-overview.png`
  Die zweite grosse Showcase-Section fuer Schichtplanung.
- `insights.png`
  Der linke Device-Shot im unteren CTA-Bereich.
- `live-activity.png`
  Der rechte Device-Shot im unteren CTA-Bereich.

## Empfehlung fuer die Assets

- Format: PNG mit transparentem Hintergrund
- Inhalt: Das iPhone-Geraet sollte schon im Bild selbst enthalten sein
- Stil: dunkler Screen, warmer Glow, realistischer Metallrahmen
- Freistellung: moeglichst sauber, damit der Seitenhintergrund durchkommt

## Warum keine CSS-Frames mehr?

Du wolltest fertige iPhone-Mockups als Bild statt nachgebauter CSS-Geraete. Deshalb erwartet die Seite jetzt richtige Produkt-Render und nicht mehr nur Screens in einem HTML-Rahmen.

## Schnelltest

1. Dateien in `images/mockups/` ablegen
2. Startseite neu laden
3. Die Platzhalter verschwinden automatisch, sobald die Bilddateien existieren

## Deployment

```bash
cd /Users/enrique/Dev/Projekte/ShiftTap/website
git add index.html styles.css SCREENSHOTS.md images/mockups
git commit -m "Restructure homepage around image-based iPhone mockups"
git push origin main
```
