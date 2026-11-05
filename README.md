# Stadt Gladbeck Website

Modernisierte Konzeptseite fuer ein wertigeres Stadtportal Gladbeck. Der aktuelle Stand ist ein statischer Frontend-Prototyp mit lokalen Bildwelten, redaktionellen Modulen, Schnellzugriffen, News, Newsletter-Prototyp und barrierearmen Interaktionsmustern.

## Entwicklung

```bash
npm install
npm run dev
```

## Wichtige Skripte

- `npm run dev`: lokale Entwicklungsumgebung
- `npm run build`: Produktions-Build in `dist/`
- `npm run preview`: lokalen Build ansehen
- `npm run format`: HTML, CSS, JS und Markdown formatieren
- `npm run check`: Format, HTML, CSS und Build pruefen
- `npm run test:ui`: Produktions-Build in Desktop- und Mobilansicht testen

Fuer die Browserpruefungen einmal `npx playwright install chromium` ausfuehren.
Die Tests pruefen unter anderem Menue-Unterseiten, Suchbegriffe, Fokus,
Maus-Drag, Textvergroesserung und Bilder im Produktions-Build.

## Navigation und Inhalte

Das Menue bietet sechs Themenwelten, eine lokale Suche und einen umschaltbaren
vollen Textkontrast. Die Fokusanzeige unterstuetzt Touch, Maus und Tastatur.
Der News-Streifen laesst sich horizontal bewegen; am Ende gibt das Mausrad
den vertikalen Seitenscroll wieder frei.

Die Meldungen und Termine sind eine klar datierte Auswahl aus April/Mai 2026.
Der Newsletter ist eine Formular-Demo und speichert keine Anmeldungen.
Die Inhalte stehen weiterhin in `assets/js/main.js`; es gibt keine CMS-Anbindung.

`npm run build` erzeugt einen Build mit relativen Asset-Pfaden in `dist/`.
Dadurch kann er auch unter einem Unterverzeichnis ausgeliefert werden.

## Veroeffentlichung

Die oeffentliche Vorschau liegt unter:

https://kevin1337pro.github.io/stadt-gladbeck-website/

GitHub Pages veroeffentlicht die statischen Dateien aus dem Wurzelverzeichnis
des Branches `main`. Die Datei `.nojekyll` deaktiviert die Jekyll-Verarbeitung.
Die Website ist auch ohne Build-Schritt direkt als statische Seite lauffaehig.
