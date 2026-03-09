# Memory

Web-basiertes Memory-Spiel mit mehreren Spielfeldgroessen, Themes und Spielerfarben.

## Projektstatus

Dieses Repository enthaelt aktuell vor allem Projekt-Dokumentation und Design-Assets. Die technische Umsetzung kann hier schrittweise erweitert werden.

## Features (laut Checkliste)

- Startseite mit Start-Button und Controller-Animation
- Settings-Ansicht fuer Spielerfarbe, Spielfeldgroesse und Theme
- Mindestens 2 visuelle Layouts / Farbschemata
- Spielfeld in den Groessen 4x4, 4x6 und 8x8
- Spielstatus-Anzeige (Punkte, aktiver Spieler, Exit)
- Karten-Flip-Animation
- Game-Over-Anzeige mit Gewinner und Rueckkehr zum Home-Screen

## Abnahme-Checkliste

### User Story 1

- [ ] Homescreen laut Vorgabe umgesetzt
- [ ] Button zur Settings-Page vorhanden
- [ ] Controller-Icon mit Animation korrekt positioniert

### User Story 2

- [ ] 2 Spielerfarben waehlbar (z. B. Blau / Orange)
- [ ] Spielfeldgroessen 4x4, 4x6, 8x8 waehlbar
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
- `docs/design/design.md`: Design-Dokumentation
- `docs/design/img/`: Assets und Icon-Sammlungen
- `.github/workflows/deploy-ftp.yml`: Deploy via FTP/FTPS auf `/memory/`

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

- Spiel-Frontend und Logik implementieren
- README um lokale Start-Anleitung (`npm install`, `npm run dev/build`) erweitern, sobald die App-Struktur vorhanden ist
- Checkliste im Verlauf abhaken