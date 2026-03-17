# Memory

Web-basiertes Memory-Spiel mit mehreren Spielfeldgroessen, Themes und Spielerfarben.

## Projektstatus

Die Angular-Umsetzung ist vorhanden und deckt aktuell Startseite, Settings, Spielansicht, Exit-Popup sowie Endbildschirme fuer `Coding vibes` und `Gaming` ab.

## Features (laut Checkliste)

- Startseite mit Start-Button und Controller-Animation
- Settings-Ansicht fuer Spielerfarbe, Spielfeldgroesse und Theme
- Mindestens 2 visuelle Layouts / Farbschemata
- Spielfeld in den Groessen 4x4, 4x6 und 6x6
- Spielstatus-Anzeige (Punkte, aktiver Spieler, Exit)
- Karten-Flip-Animation
- Endbildschirme fuer Spielende / Gewinner und Rueckkehr in den Flow

## Abnahme-Checkliste

### User Story 1

- [ ] Homescreen laut Vorgabe umgesetzt
- [ ] Button zur Settings-Page vorhanden
- [ ] Controller-Icon mit Animation korrekt positioniert

### User Story 2

- [ ] 2 Spielerfarben waehlbar (z. B. Blau / Orange)
- [ ] Spielfeldgroessen 4x4, 4x6, 6x6 waehlbar
- [ ] Mehrere Themes waehlbar
- [ ] Mindestens 2 Themes implementiert

### User Story 3

- [ ] Layout-Auswahl aendert Farbschema
- [ ] Layout-Auswahl aendert Themengebiet der Karten

### User Story 4

- [ ] Spielfeld entspricht ausgewaehlter Groesse
- [ ] Theme wird in Farben und Motiven sichtbar
- [ ] Punktestand, aktiver Spieler und Exit-Button oberhalb des Spielfelds
- [ ] Karten drehen sich mit fluessiger Animation

### User Story 5

- [ ] Game-Over-Anzeige mit Punktestand
- [ ] Gewinner mit meisten Punkten wird angezeigt
- [ ] Home-Button startet neue Runde ueber Startseite

### Code Conventions

- [ ] HTML Coding Conventions eingehalten
- [ ] TypeScript Coding Conventions eingehalten

## Projektstruktur

- `docs/checkliste/checkliste.md`: Projektanforderungen
- `docs/checkliste/design.md`: Design-Dokumentation
- `public/`: Assets und SVGs
- `src/app/`: Angular-Komponenten und Seiten
- `.github/workflows/deploy-ftp.yml`: Deploy via FTP/FTPS auf `/memory/`

## Lokales Arbeiten

- `npm install`
- `npm start`
- `npm run build`

## QA-Stand

- Build geprueft mit `npm run build`
- Hauptflows manuell geprueft: Home -> Settings -> Game -> Winner / Game Over -> zurueck in den Flow
- Theme-Wechsel geprueft fuer `Coding vibes` und `Gaming`
- Bekannte Restpunkte:
  - Es gibt aktuell keinen separaten Lint-Script in `package.json`
  - Die SCSS-Dateien fuer `game` und `settings` liegen ueber dem konfigurierten Budget

## Deployment

Deploy-Branch ist `main`.

Die GitHub Action deployed automatisch nach Push auf `main` auf den Serverpfad `/memory/`:

- Primaer: FTPS (explizites TLS)
- Fallback: FTP (Normal), falls der FTPS-Datenkanal fehlschlaegt

Benoetigte Repository-Secrets:

- `FTP_SERVER`
- `FTP_USERNAME`
- `FTP_PASSWORD`

## Naechste Schritte

- Offene GitHub-Issues weiter gegen den aktuellen Projektstand abgleichen
- SCSS-Budgets reduzieren
- Checkliste im Verlauf abhaken
