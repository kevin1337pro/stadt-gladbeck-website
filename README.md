# Deine Stadt

Ortsneutraler Stadtportal-Entwurf mit Bildwelten, Themenbereichen, Schnellzugriffen, Beispielmeldungen, Newsletter-Demo und barrierearmen Interaktionsmustern. Kein offizielles Angebot einer Kommune.

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

Die Meldungen und Veranstaltungen sind fiktive, gekennzeichnete Beispielinhalte ohne echte Termine, Kontaktpersonen oder Behoerdenlinks.
Der Newsletter ist eine Formular-Demo und speichert keine Anmeldungen.
Die Inhalte stehen zentral in `assets/js/content.js`; es gibt keine CMS-Anbindung.
Menue, Suche und Karten fuehren zu lokalen Detailseiten ueber `?seite=...`.
Diese funktionieren auch direkt auf GitHub Pages ohne Server-Routing.

Die aktive Bildwelt zeigt echte Stadtaufnahmen aus Duisburg, Dortmund, Bochum und Essen. Alle vorher verwendeten Fotos wurden in Header, Rathaus-Kachel, Stories und Hintergrundflaeche ersetzt. Fotografen, Quellen und Bildlizenzen sind im aufklappbaren Bildnachweis im Footer sowie in [CREDITS.md](assets/media/city/CREDITS.md) dokumentiert. Historische Originaldateien und Git-Historie bleiben unveraendert.

Die Wort-Bild-Marke kombiniert ein geometrisches D mit einer ausgesparten Stadtsilhouette und der Wortmarke "deine stadt.". Das Symbol in `assets/media/brand/deine-stadt.svg` wird in Header, Footer und als Favicon verwendet und bleibt in jeder Groesse scharf. Es besteht aus nativen SVG-Pfaden, nicht aus einem Bitmap-Platzhalter.

`npm run build` erzeugt einen Build mit relativen Asset-Pfaden in `dist/`.
Dadurch kann er auch unter einem Unterverzeichnis ausgeliefert werden.

## Veroeffentlichung

Die oeffentliche Vorschau bleibt unter der bestehenden GitHub-Pages-Adresse erreichbar. Repository-Name und URL werden durch die inhaltliche Neutralisierung nicht geaendert.

GitHub Pages veroeffentlicht die statischen Dateien aus dem Wurzelverzeichnis
des Branches `main`. Die Datei `.nojekyll` deaktiviert die Jekyll-Verarbeitung.
Die Website ist auch ohne Build-Schritt direkt als statische Seite lauffaehig.
