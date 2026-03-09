# Design-Dokument für Memory-Spiel

**Version:** 1.0 (Code Vibes Theme - Basis)  
**Datum:** 9. März 2026  
**Autor:** FriggemannMichael

Dieses Dokument beschreibt das visuelle Design des Memory-Spiels. Es umfasst Layout, Farben, Schriftarten, Interaktionen und responsive Elemente. Alle Angaben basieren auf dem Figma-Design und sind für die Implementierung in ts gedacht.

**Hinweis:** Version 1.0 beschreibt das Code Vibes Theme als Basis. Home und Settings sind themenübergreifend gleich. Ab Version 2.0 folgen spezifische Game-Themes (z. B. Gaming Theme).

## 1. Startseite (Landing Page)

### Allgemeines Layout

- **Abmessungen:** 1440px Breite × 1024px Höhe (Desktop-Ansicht).
- **Hintergrundfarbe:** #303131 (dunkelgrau).

### Textelemente

- **Untertitel (Span):**
  - Schriftart: Almarai, 400 Regular.
  - Größe: 48px.
  - Farbe: #FFFFFF (weiß).
  - Inhalt: "Almari 400 regular 48 px #FFFFFF" (Platzhalter für "It's play time.").

- **Hauptüberschrift (H1):**
  - Schriftart: Red Rose, 700 Bold.
  - Größe: 140px.
  - Farbe: #FFFFFF (weiß).
  - Inhalt: "Ready to play?".

### Bild-Elemente

- **Controller-Bild:**
  - Quelle: stadia_controller.
  - Opazität: 5%.
  - Farbe: #F0EA6E (gelb).
  - Transformation: Rotation -37.42 Grad.

### Interaktive Elemente

- **Play-Button:**
  - Hintergrundfarbe: #F0EA6E (gelb).
  - Schriftart: Red Rose, 700 Bold, 40px.
  - Textfarbe: #303131 (dunkelgrau).
  - Inhalt: "Play".
  - Abmessungen: 85px Breite × 50px Höhe.
  - Hover-Effekt: Icon (Pfeil) rotiert um 25.77 Grad.

---

## 2. Settings Page

### Layout

- **Linke Seite:** Einstellungen für Spieler und Brettgröße.
  - Hinweis: Nur eine Option pro Kategorie auswählbar.

- **Rechte Seite:** Themen-Auswahl mit Bildern.

### Textelemente

- **H2-Überschrift:**
  - Schriftart: Red Rose, 700 Bold.
  - Größe: 54px.
  - Farbe: #303131 (dunkelgrau).
  - Linie: 4px solid #F0EA6E, rotiert -180 Grad.
  - Breite: 251px.

- **Unterüberschriften:**
  - Schriftart: Almarai, 700 Bold.
  - Größe: 24px.
  - Ausgewählt: 20px mit Unterstreichung.
  - Nicht ausgewählt: 20px Regular.

### Optionen

- **Spielthemen:**
  - Code Vibes Theme.
  - Gaming Theme.
  - DA Projects Theme.
  - Foods Theme.

- **Spielerfarben:**
  - Blau: #2BB1FF.
  - Orange: #F58E39.
  - Aktueller Spieler: Farbe entsprechend der Auswahl.

- **Brettgrößen:**
  - 16 Karten.
  - 24 Karten.
  - 36 Karten.

### Bild-Elemente

- **Themen-Bilder:** Property "IT logos" für Auswahl-Buttons.

---

## 3. Spielseite (Game Page)

### Header

- **Spieler-Label:**
  - Breite: 24px, Höhe: 20px.

- **Aktueller Spieler-Label:**
  - Breite: 29px, Höhe: 24px.

- **Exit-Button:**
  - Bild: exit_icon.
  - Schriftart: Red Rose, 700 Bold, 24px.
  - Hintergrund: #86E9D633 (hellgrün, 20% Opazität).
  - Border: 1px solid #4DD5BC.
  - Animation: 300ms ease-out zurück zur Seite 2 bei Klick.

### Karten

- **Kartengröße:** 120px × 120px.
- **Abstände (Gap):**
  - 16 Karten: 16px.
  - 24 Karten: 6px.
  - 36 Karten: 6px.

---

## 4. Spielende-Seite (Game Over Page)

### Bild-Elemente

- **Game-Over-Bild:** img:Game_over.

### Textelemente

- **Text:**
  - Schriftart: Red Rose, 400 Regular.
  - Größe: 26px.
  - Farbe: #FFFFFF (weiß).

---

## Hinweise zur Implementierung

- Alle Schriftarten (Red Rose, Almarai) müssen local geladen werden.
- Responsive Design: Anpassungen für Mobile/Tablets erforderlich (z. B. kleinere Schriftgrößen).
- Animationen: Verwende CSS-Transitions für Hover- und Klick-Effekte.
- Versionierung: Dies ist Version 1.0. Zukünftige Updates werden in separaten Versionen dokumentiert.

Für detaillierte Figma-Links oder Änderungen, siehe Repository-Commits.

---

## Design Data (Zusammengefasst aus design_data.md)

Diese Sektion enthält alle strukturierten Design-Daten (Fonts, Farben, Gradienten, Layouts, etc.) aus den verschiedenen Themes/Versions, für die einfache Nutzung in SCSS. Daten sind nach Themes geordnet, mit Untersektionen für spezifische Versionen. Verwende diese Daten, um SCSS-Variablen zu definieren, z.B. `$primary-font: 'Red Rose', sans-serif;`.

### 1. Code Vibes Theme

#### 1.1 Basis (Version 1.0 - Home & Settings)

##### Fonts

- **Red Rose:**
  - Gewicht: 400 Regular, 700 Bold.
  - Größen: 24px, 26px, 30px, 40px, 48px, 140px.
  - Farben: #FFFFFF, #2BB1FF, #F58E39.
  - Verwendung: Haupttexte, Buttons, Scores.
- **Almarai:**
  - Gewicht: 400 Regular, 700 Bold.
  - Größen: 20px, 24px, 48px.
  - Farben: #303131.
  - Verwendung: Unterüberschriften, Labels.

##### Colors

- **Hintergründe:** #303131 (dunkelgrau).
- **Texte:** #FFFFFF (weiß).
- **Buttons:** #F0EA6E (gelb, Hintergrund), #303131 (Text).
- **Akzente:** #2BB1FF (blau), #F58E39 (orange).

##### Layouts & Andere

- **Buttons:** Padding 16px 24px, Border-Radius 10px.
- **Icons:** play-icon.svg (Opazität 5%, Rotation -37.42°).

##### Komponente: Primary Button

- **Container:** Flex-Column, align-items center, padding 20px, gap 20px, background #303131 (Primary Dark), border 1px dashed #8A38F5, border-radius 5px.
- **Default State:**
  - Button frame: Flex-Row, padding 24px, gap 20px, background #F0EA6E (secondary yellow).
  - Icon (play-icon.svg): 44x32px, fill #303131.
  - Text "Play": Red Rose 700 Bold 40px, color #303131.
  - Arrow: 33px width line border 2px solid #303131.
- **Hover State:**
  - Frame size slightly larger, icon rotates ‑25.77°, arrow border thickness increases to 4px.
  - Text remains same.

> **Note:** Primary button uses the same yellow accent as Settings for active elements; hover adds rotation to the controller icon. Button is generally used on landing page.

##### Komponente: Secondary Button (Exit)

- **Container:** Flex-Column, align-items center, padding 16px 18px, gap 22px; background #303131 (Primary Dark), border 1px dashed #8A38F5, border-radius 5px.
- **Default State:**
  - Frame: Flex-Row wrap, padding 16px 24px, gap 10px, background rgba(240,234,110,0.1) (secondary yellow transparency), border 1px solid #F0EA6E.
  - Icon: exit-icon.svg 30x30px with bounding box #D9D9D9; icon fill #FFFFFF.
  - Text "Exit game": Red Rose 700 Bold 24px, color #FFFFFF.
- **Hover State:**
  - Border becomes 3px solid #F0EA6E and adds box-shadow 4px 4px 4px rgba(240,234,110,0.2).
  - Icon box-shadow 2px 2px 3px rgba(0,0,0,0.25).
  - Text remains white.

> **Note:** This secondary button appears in overlays/popups; hover effects provide visual feedback but base coloring stays translucent.

##### Komponente: Exit Button (Code Vibes Theme)

- **Container:** Flex-Column, align-items flex-start, padding 20px, gap 20px; background #303131 (Primary Dark), border 1px dashed #8A38F5, border-radius 5px.
- **Default State:**
  - Frame: Flex-Row centered, padding 16px 24px, gap 10px, background rgba(134,233,214,0.14) with 2px solid #4DD5BC border.
  - Icon: exit-icon.svg 30x30px with bounding box #D9D9D9; fill #FFFFFF.
  - Text "Exit game": Red Rose 700 Bold 24px, color #FFFFFF.
- **Hover State:**
  - Background opacity increases to rgba(134,233,214,0.26); border thickens to 3px solid #4DD5BC and adds box-shadow 4px 4px 6px rgba(77,213,188,0.2).
  - Icon gains drop-shadow 3px 3px 4px rgba(0,0,0,0.25).
  - Text remains white.

> **Note:** Styled consistency with Code Vibes colors; use on game page when exiting. Hover enhances contrast and shadow.

#### 1.2 Game (Version 2.4 - 16 Karten)

##### Fonts

- **Red Rose:** Wie oben, plus 26px für "Current player".
- **October Devanagari:**
  - Gewicht: 700 Bold.
  - Größen: 24px.
  - Farben: #2BB1FF, #F58E39.
  - Verwendung: Zahlen in Scores.

##### Colors

- **Hintergründe:** #303131 (dunkelgrau), #E8F3F0 (hellgrün für Karten-Rückseiten).
- **Texte:** #FFFFFF (weiß), #2BB1FF (blau), #F58E39 (orange).
- **Buttons:** rgba(134, 233, 214, 0.2) (Hintergrund), #4DD5BC (Border).
- **Gradienten:** linear-gradient(212.26deg, #4DD5BC 29.42%, #286F62 123.94%) (für Karten-Vorderseiten).

##### Layouts & Andere

- **Karten:** 120px × 120px, 4x4 Gitter.
- **Icons:** Tech-Logos (git-logo.svg #DE4C36, typescript-logo.svg #3178C6, angular-logo.svg #E23237, html-logo.svg #E44D26, css-logo.svg #264DE4, django-logo.svg #2BA977, javascript-logo.svg #F7DF1E, vscode-logo.svg #2489CA).
- **Bilder:** memory-card-front.png für Karten-Vorderseiten.

---

### 2. Gaming Theme

#### 2.1 Settings (Version 2.0)

##### Fonts

- **Almarai:**
  - Gewicht: 400 Regular, 700 Bold.
  - Größen: 20px, 24px.
  - Farben: #303131.
  - Verwendung: Labels, Überschriften.
- **Red Rose:**
  - Gewicht: 700 Bold.
  - Größen: 20px, 54px.
  - Farben: #303131.
  - Verwendung: Buttons, Headlines.
- **Orbitron:**
  - Gewicht: 700 Bold.
  - Größen: 8px, 10px.
  - Farben: #FFFFFF.
  - Verwendung: Zahlen.

##### Colors

- **Hintergründe:** #FFFFFF (weiß), rgba(253, 150, 201, 0.2) (rosa für Header).
- **Texte:** #303131 (dunkelgrau), #FFFFFF (weiß).
- **Buttons:** #F0EA6E (gelb), rgba(237, 27, 118, 0.05) (hellpink).
- **Radio-Buttons:** #D9D9D9 (Hintergrund), #303131 (aktiv).
- **Gradienten:** linear-gradient(226.04deg, #294F60 19.4%, #2086B4 111.63%) (für Theme-Visual).

##### Layouts & Andere

- **Buttons:** Padding 14px 20px, Border-Radius 10px.
- **Icons:** player-icon.svg (#1AE5BE blau, #0635C9 orange), start-icon.svg (#303131).

##### Komponente: Choose Settings + Button

- **Container:** Flex-Column, gap 40px, padding 20px, border 1px dashed #8A38F5, border-radius 5px.
- **Optionzeilen:** Flex-Row, padding 14px 20px, gap 16px, background #F6F6F6.
- **Beschriftungen:** Almarai 400 Regular 20px, color #303131.
- **Trennlinien:** 8px solid #F0EA6E, rotiert ~109° (Akzentgerade).
- **Start-Button (small):** Flex-Row, padding 14px 20px, gap 8px, background #DBDBD6 (standard) oder #F0EA6E (aktive Variante). Text Red Rose 700 Bold 20px, color #A3A1A1 (standard) bzw. #303131 (aktiv).
- **Button-Icons:** start-icon.svg 24px; bounding box Hintergrund #D9D9D9; icon fill #A3A1A1 (standard) bzw. #303131 (aktiv).
  > **Note:** This component is interactive. Each time the user makes a selection, it will be added here — for example, selecting a game theme. Once the user has chosen all three settings, the Start button becomes active. By default, it is disabled.

#### 2.2 Game (Version 2.1 - 16 Karten)

##### Fonts

- **Orbitron:**
  - Gewicht: 700 Bold.
  - Größen: 20px, 30px, 32px.
  - Farben: #FFFFFF, #097FC5, #EA6900.
  - Verwendung: Scores, Labels.

##### Colors

- **Hintergründe:** #294F60 (dunkelblau), rgba(253, 150, 201, 0.2) (rosa für Header), #F6F1F3 (hell für Karten-Rückseiten).
- **Texte:** #FFFFFF (weiß).
- **Buttons:** rgba(237, 27, 118, 0.08) (hellpink), #E71C4F (Border).
- **Gradienten:** linear-gradient(147.13deg, #ED1B76 1.28%, #0A2835 142.53%) (für Karten-Vorderseiten).

##### Layouts & Andere

- **Karten:** 105px × 120px, 4x4 Gitter.
- **Icons:** player-icon.svg (#097FC5 blau, #EA6900 orange), exit-icon.svg (#FFFFFF).
- **Bilder:** memory-card-back.svg für Karten.

#### 2.3 Game Over (Version 2.2)

##### Fonts

- **Orbitron:**
  - Gewicht: 700 Bold, 900 Black.
  - Größen: 28px, 40px, 124px.
  - Farben: #FFFFFF, #ED1B76.
  - Verwendung: Titel, Scores.

##### Colors

- **Hintergründe:** #294F60 (dunkelblau), #FFFFFF (weiß für Score-Box).
- **Texte:** #FFFFFF (weiß), #ED1B76 (pink).
- **Gradienten:** Keine spezifischen.

##### Layouts & Andere

- **Score-Box:** Border-Radius 10px.
- **Icons:** player-icon.svg (#097FC5 blau, #EA6900 orange).

#### 2.4 Popup (Version 2.3)

##### Fonts

- **Orbitron:**
  - Gewicht: 700 Bold.
  - Größen: 16px, 28px.
  - Farben: #294F60, #FFFFFF, #ED1B76.
  - Verwendung: Text, Buttons.

##### Colors

- **Hintergründe:** #F0F6F9 (hellblau), #ED1B76 (pink für Button), rgba(237, 27, 118, 0.08) (hellpink für Button).
- **Texte:** #294F60 (dunkelblau), #FFFFFF (weiß), #ED1B76 (pink).
- **Borders:** #E71C4F (pink).

##### Layouts & Andere

- **Popup:** Border-Radius 20px, Padding 40px.
- **Buttons:** Border-Radius 10px.
- **Icons:** exit-icon.svg (#D9D9D9 mit #FFFFFF).

##### Komponente: Popup Button

- **Container:** Flex-Column, align-items flex-start, padding 20px, gap 20px; border 1px dashed #8A38F5, border-radius 5px.
- **Default State:**
  - Frame: Flex-Row center, padding 16px 24px, gap 10px, width 182px, height 57px, background #66CFBC.
  - Icon: exit-icon.svg hidden (display none) but bounding box #D9D9D9 present.
  - Text "Exit game": Red Rose 700 Bold 20px, color #FFFFFF.
- **Hover State:**
  - Background becomes rgba(102,207,188,0.7); border 3px solid #3ABCA4; box-shadow 4px 4px 6px rgba(77,213,188,0.2).
  - Icon remains hidden; bounding box unchanged.
  - Text remains white.

> **Note:** This button appears inside popups; hover increases opacity and adds a teal border/shadow to indicate interactivity.

---

## SCSS-Beispiel für Variablen

Basierend auf diesen Daten kannst du SCSS-Variablen definieren. Hier ein Beispiel pro Theme:

### Code Vibes Theme

```scss
$code-vibes-bg: #303131;
$code-vibes-text: #ffffff;
$code-vibes-blue: #2bb1ff;
$code-vibes-orange: #f58e39;
$code-vibes-accent: #f0ea6e;
$code-vibes-green: #4dd5bc;
$code-vibes-gradient: linear-gradient(
  212.26deg,
  #4dd5bc 29.42%,
  #286f62 123.94%
);
$code-vibes-font-primary: "Red Rose", serif;
$code-vibes-font-secondary: "Almarai", sans-serif;
$code-vibes-font-numbers: "October Devanagari", serif;
```

### Gaming Theme

```scss
$gaming-bg: #294f60;
$gaming-text: #ffffff;
$gaming-pink: #ed1b76;
$gaming-blue: #097fc5;
$gaming-orange: #ea6900;
$gaming-popup-bg: #f0f6f9;
$gaming-border: #e71c4f;
$gaming-gradient: linear-gradient(147.13deg, #ed1b76 1.28%, #0a2835 142.53%);
$gaming-font-primary: "Orbitron", monospace;
$gaming-font-secondary: "Red Rose", serif;
$gaming-font-tertiary: "Almarai", sans-serif;
```

Verwende diese Variablen in deinen SCSS-Dateien, um Themes zu wechseln oder zu stylen. Für spezifische Versionen kannst du Unter-Variablen hinzufügen.

## Version 2.0 (Settings Theme Gaming)

**Datum:** 9. März 2026  
**Autor:** FriggemannMichael

Dieses Update beschreibt die erweiterten Einstellungen für das Gaming-Theme im Memory-Spiel, basierend auf dem neuen Figma-CSS.

### Allgemeines Layout

- **Abmessungen:** 1440px Breite × 1024px Höhe.
- **Hintergrundfarbe:** #FFFFFF (weiß).
- **Haupt-Content-Bereich:** 1103px Breite × 539px Höhe, positioniert bei left: 170px, top: 243px.

### Auswahl- und Button-Bereich (Rechte Seite)

- **Layout:** Flex-Column mit Gap 42px, positioniert bei left: 539px, top: 458px.
- **Ausgewählte Einstellungen + Button:**
  - Flex-Row, Padding 14px 20px, Gap 16px.
  - Abmessungen: 546.08px Breite × 81px Höhe.
  - Hintergrund: #F6F6F6 (hellgrau).
  - **Textelemente:**
    - "Theme": Almarai, 400 Regular, 20px, Farbe #303131.
    - "Player": Almarai, 400 Regular, 20px, Farbe #303131.
    - "Board size": Almarai, 400 Regular, 20px, Farbe #303131.
  - **Linien:** 8px solid #F0EA6E, rotiert 109.33 Grad.
  - **Start-Button:**
    - Abmessungen: 126px Breite × 53px Höhe.
    - Hintergrund: #F0EA6E (gelb).
    - Padding: 14px 20px.
    - Icon: smart_display (24px × 24px, Hintergrund #303131).
    - Text: "Start", Red Rose, 700 Bold, 20px, Farbe #303131.

### Spieler- und Brettgröße (Linke Seite)

- **Layout:** Flex-Column mit Gap 54px, positioniert bei left: 0px, top: 233px.

#### Spieler-Auswahl

- **Überschrift:** "Choose player", Almarai, 700 Bold, 24px, Farbe #303131.
- **Optionen:**
  - Blau: Icon chess_pawn (Hintergrund #1AE5BE).
  - Orange: Icon chess_pawn (Hintergrund #0635C9).
- **Radio-Buttons:** Kreise mit Hintergrund #D9D9D9, aktive mit #303131.

#### Brettgröße

- **Überschrift:** "Board size", Almarai, 700 Bold, 24px, Farbe #303131.
- **Optionen:**
  - 16 Cards.
  - 24 Cards.
  - 36 Cards.
- **Radio-Buttons:** Wie oben.

### Spielthemen (Game Themes)

- **Layout:** Flex-Row mit justify-content space-between, Gap 185px, positioniert bei left: 0px, top: 0px.
- **Überschrift:** "Game themes", Almarai, 700 Bold, 24px, Farbe #303131.
- **Themen-Optionen:**
  - Code Vibes Theme (aktiv mit Linie).
  - Gaming Theme.
  - DA Projects Theme.
  - Foods Theme.
- **Radio-Buttons:** Kreise mit Hintergrund #D9D9D9, aktive mit #303131.
- **Icons:** palette (#DA1EBA), mode_standby (#303131).

### Theme-Visual (Gaming Theme)

- **Layout:** Flex-Column, Padding 17px 7px, Gap 10px, Abmessungen 460px × 412px.
- **Hintergrund:** Linear-Gradient (226.04deg, #294F60 19.4%, #2086B4 111.63%), Border-Radius 16px.
- **Spieler-Anzeige:**
  - Hintergrund: rgba(253, 150, 201, 0.2), Box-Shadow, Border-Radius 10px.
  - Spieler-Icons: chess_pawn (Blau #097FC5, Orange #EA6900).
  - Zahlen: Orbitron, 700 Bold, 10px, Farben entsprechend.
  - Aktueller Spieler: "Current player:", Orbitron, 700 Bold, 8px, Farbe #FFFFFF.
  - Icon-Hintergrund: #1FAAFC, Border-Radius 3px.
- **Exit-Button:**
  - Abmessungen: 88px × 20px.
  - Hintergrund: rgba(237, 27, 118, 0.05).
  - Border: 1px solid #E71C4F.
  - Icon: move_item (#E71C4F).
  - Text: "Exit game", Red Rose, 700 Bold, 10px, Farbe #FFFFFF.
- **Karten-Visual:**
  - Front: 170px × 220px, Linear-Gradient (#ED1B76 to #0A2835), Box-Shadow, Border-Radius 19px, Rotation.
  - Inhalt: Bild "zarcheta", Rotation 5.42 Grad.
  - Hintergrund: #F6F1F3, Box-Shadow, Border-Radius 19px.
- **Headline:** "Settings", Red Rose, 700 Bold, 54px, Farbe #303131, Linie 4px solid #F0EA6E rotiert 180 Grad.

### Hinweise zur Implementierung (Version 2.0)

- Zusätzliche Schriftarten: Orbitron für Zahlen.
- Neue Farben und Gradienten für Gaming-Theme.
- Interaktive Elemente: Radio-Buttons für Auswahl, Hover-Effekte für Buttons.

---

## Version 2.1 (Games Theme 16)

**Datum:** 9. März 2026  
**Autor:** FriggemannMichael

Dieses Update beschreibt die Spielseite für 16 Karten im Gaming-Theme, basierend auf dem neuen Figma-CSS.

### Allgemeines Layout

- **Abmessungen:** 1440px Breite × 1024px Höhe.
- **Hintergrundfarbe:** #294F60 (dunkelblau).
- **Haupt-Content-Bereich:** 1219px Breite × 684px Höhe, zentriert bei top: 41px.

### Header

- **Layout:** Flex-Row mit justify-content space-between, Padding 24px, Gap 160px.
- **Abmessungen:** 1219px Breite × 102px Höhe.
- **Hintergrund:** rgba(253, 150, 201, 0.2), Border-Radius 10px.
- **Spieler-Scores:**
  - Box: 182px Breite × 54px Höhe, Hintergrund #FFFFFF, Border-Radius 10px.
  - Icons: chess_pawn (Blau #097FC5, Orange #EA6900).
  - Zahlen: Orbitron, 700 Bold, 30px, Farben entsprechend.
- **Aktueller Spieler:**
  - Text: "Current player:", Orbitron, 700 Bold, 32px, Farbe #FFFFFF, Letter-Spacing 0.07em.
  - Icon-Hintergrund: #1FAAFC, Border-Radius 3px.
  - Icon: chess_pawn (#FFFFFF).
- **Exit-Button:**
  - Abmessungen: 195px Breite × 54px Höhe.
  - Hintergrund: rgba(237, 27, 118, 0.08).
  - Border: 2px solid #E71C4F, Border-Radius 10px.
  - Icon: move_item (#FFFFFF).
  - Text: "Exit game", Orbitron, 700 Bold, 20px, Farbe #FFFFFF, Letter-Spacing 0.04em.

### Spielbereich (Game Area)

- **Layout:** Flex-Column mit Gap 54px.
- **Karten-Gitter:** 4x4 (16 Karten), jede 105px × 120px,
- **Karten-Design:**
  - **Rückseite (Back):** #F6F1F3 (hell), Border-Radius 12px, Drop-Shadow.
  - **Vorderseite (Front):** Linear-Gradient (147.13deg, #ED1B76 1.28%, #0A2835 142.53%), Border-Radius 12px, Drop-Shadow, Matrix-Transformation.
  - **Bild:** "Squit games 01" (54px × 70px, zentriert).

### Hinweise zur Implementierung (Version 2.1)

- Schriftart: Orbitron für Header-Texte und Zahlen.
- Animationen: Drop-Shadow für Karten-Flip-Effekte.
- Responsive: Anpassungen für kleinere Bildschirme (z. B. kleinere Karten).

---

## Version 2.2 (Game Over Theme Gaming)

**Datum:** 9. März 2026  
**Autor:** FriggemannMichael

Dieses Update beschreibt die Game-Over-Seite für das Gaming-Theme, basierend auf dem neuen Figma-CSS.

### Allgemeines Layout

- **Abmessungen:** 1440px Breite × 1024px Höhe.
- **Hintergrundfarbe:** #294F60 (dunkelblau).
- **Content-Bereich:** 969px Breite × 379px Höhe, zentriert bei left: 236px, top: 291px.
- **Layout:** Flex-Column mit Gap 104px, Align-Items center.

### Textelemente

- **Hauptüberschrift "GAME OVER":**
  - Schriftart: Orbitron, 900 Black.
  - Größe: 124px.
  - Zeilenhöhe: 155px.
  - Letter-Spacing: 0.07em.
  - Farbe: #ED1B76 (pink).
  - Abmessungen: 969px Breite × 155px Höhe.

- **Unterüberschrift "Final score":**
  - Schriftart: Orbitron, 700 Bold.
  - Größe: 28px.
  - Zeilenhöhe: 35px.
  - Text-Align: center.
  - Letter-Spacing: 0.07em.
  - Farbe: #FFFFFF (weiß).
  - Abmessungen: 222px Breite × 30px Höhe.

### Score-Anzeige

- **Layout:** Flex-Column mit Gap 24px, Align-Items center.
- **Abmessungen:** 222px Breite × 120px Höhe.
- **Score-Box:**
  - Hintergrund: #FFFFFF (weiß).
  - Border-Radius: 10px.
  - Padding: 8px 16px.
  - Layout: Flex-Row mit Gap 40px, Justify-Content center, Align-Items center.
  - Abmessungen: 222px Breite × 66px Höhe.
  - **Erster Spieler (Orange):**
    - Icon: chess_pawn, Hintergrund #EA6900 (orange), 26px × 32px.
    - Zahl: "6", Orbitron, 700 Bold, 40px, Farbe #EA6900, Text-Align right.
  - **Zweiter Spieler (Blau):**
    - Icon: chess_pawn, Hintergrund #097FC5 (blau), 26px × 32px.
    - Zahl: "12", Orbitron, 700 Bold, 40px, Farbe #097FC5, Text-Align right.

### Hinweise zur Implementierung (Version 2.2)

- Schriftart: Orbitron für alle Texte und Zahlen.
- Farben: Dunkler Hintergrund mit kontrastierenden Akzenten (Pink für Titel, Weiß für Scores).
- Layout: Zentriertes Flex-Layout für Game-Over-Bildschirm.
- Interaktionen: Keine Buttons im CSS erwähnt; eventuell für Neustart oder Zurück hinzufügen.

---

## Version 2.3 (Popup Theme Gaming)

**Datum:** 9. März 2026  
**Autor:** FriggemannMichael

Dieses Update beschreibt das Bestätigungs-Popup für das Verlassen des Spiels im Gaming-Theme, basierend auf dem neuen Figma-CSS.

### Allgemeines Layout

- **Abmessungen:** 481px Breite × 254px Höhe.
- **Hintergrundfarbe:** #F0F6F9 (hellblau).
- **Border-Radius:** 20px.
- **Padding:** 40px.
- **Layout:** Flex-Column mit Align-Items flex-end, Gap 40px.

### Content-Bereich

- **Layout:** Flex-Column mit Align-Items center, Gap 54px.
- **Abmessungen:** 401px Breite × 174px Höhe.

### Textelemente

- **Frage "Are you sure you want to quit the game?":**
  - Schriftart: Orbitron, 700 Bold.
  - Größe: 28px.
  - Zeilenhöhe: 40px.
  - Text-Align: center.
  - Letter-Spacing: 0.02em.
  - Farbe: #294F60 (dunkelblau).
  - Abmessungen: 376px Breite × 76px Höhe.

### Buttons

- **Layout:** Flex-Row mit Justify-Content center, Align-Items center, Gap 24px.
- **Abmessungen:** 401px Breite × 44px Höhe.

- **Exit-Button (Primär):**
  - Abmessungen: 201px Breite × 44px Höhe.
  - Hintergrund: #ED1B76 (pink).
  - Border: 1px solid #E71C4F.
  - Border-Radius: 10px.
  - Padding: 12px 20px.
  - Layout: Flex-Row, Justify-Content center, Align-Items center.
  - Text: "Exit game", Orbitron, 700 Bold, 16px, Farbe #FFFFFF (weiß), Letter-Spacing 0.04em.
  - Icon: move_item (verborgen, aber Bounding Box #D9D9D9 mit #FFFFFF).

- **Cancel-Button (Sekundär):**
  - Abmessungen: 176px Breite × 44px Höhe.
  - Hintergrund: rgba(237, 27, 118, 0.08) (hellpink, 8% Opazität).
  - Border: 2px solid #E71C4F.
  - Border-Radius: 10px.
  - Padding: 12px 20px.
  - Layout: Flex-Row, Justify-Content center, Align-Items center.
  - Text: "Exit game" (wahrscheinlich Platzhalter, eventuell "Cancel"), Orbitron, 700 Bold, 16px, Farbe #ED1B76 (pink), Letter-Spacing 0.04em.
  - Icon: move_item (verborgen, Bounding Box #D9D9D9 mit #FFFFFF).

### Hinweise zur Implementierung (Version 2.3)

- Schriftart: Orbitron für Text und Buttons.
- Farben: Hellblauer Hintergrund mit pinken Akzenten für Buttons.
- Layout: Modal-Popup-Style mit zwei Buttons (Bestätigen und Abbrechen).
- Interaktionen: Hover-Effekte für Buttons, Modal-Overlay für Hintergrund.

---

## Version 2.4 (Code Vibes Theme 16)

**Datum:** 9. März 2026  
**Autor:** FriggemannMichael

Dieses Update beschreibt die Spielseite für 16 Karten im Code Vibes Theme, basierend auf dem neuen Figma-CSS.

### Allgemeines Layout

- **Abmessungen:** 1440px Breite × 1024px Höhe.
- **Hintergrundfarbe:** #303131 (dunkelgrau).
- **Content-Bereich:** 1217px Breite × 644px Höhe, zentriert bei top: 41px.

### Header

- **Layout:** Flex-Row mit Justify-Content space-between, Gap 669px.
- **Abmessungen:** 1217px Breite × 62px Höhe.
- **Spieler-Scores:**
  - Box: 292px Breite × 62px Höhe, Hintergrund rgba(134, 233, 214, 0.2), Border-Radius 10px, Padding 17px 20px.
  - **Blauer Spieler:** Icon (24px × 20px, #2BB1FF), Text "Blue" in Red Rose, 700 Bold, 24px, #2BB1FF, Zahl "0" in October Devanagari, 700 Bold, 24px, #2BB1FF.
  - **Oranger Spieler:** Icon (24px × 20px, #F58E39), Text "Orange" in Red Rose, 700 Bold, 24px, #F58E39, Zahl "6" in October Devanagari, 700 Bold, 24px, #F58E39.
- **Aktueller Spieler:** "Current player:", Red Rose, 400 Regular, 26px, #FFFFFF, Icon (29px × 24px, #2BB1FF).
- **Exit-Button:** 207px Breite × 62px Höhe, Hintergrund rgba(134, 233, 214, 0.2), Border 1px solid #4DD5BC, Padding 16px 24px, Text "Exit game" in Red Rose, 700 Bold, 24px, #FFFFFF, Icon move_item (#D9D9D9 mit #FFFFFF).

### Spielbereich (Game Area)

- **Layout:** Flex-Column mit Gap 54px.
- **Karten-Gitter:** 4x4 (16 Karten), jede 120px × 120px.
- **Karten-Design:**
  - **Rückseite (Back):** #E8F3F0 (hellgrün), Border-Radius 12px, Icons (70px × 70px) für verschiedene Tech: Git (#DE4C36), TypeScript (#3178C6), Angular (#E23237), HTML (#E44D26), CSS (#264DE4), Django (#2BA977), JavaScript (#F7DF1E), VS Code (#2489CA).
  - **Vorderseite (Front):** Linear-Gradient (212.26deg, #4DD5BC 29.42%, #286F62 123.94%), Border-Radius 12px, Bild "Nur pc negative-12.png" (60px × 48px).

### Hinweise zur Implementierung (Version 2.4)

- Schriftarten: Red Rose für Texte, October Devanagari für Zahlen.
- Farben: Dunkler Hintergrund mit grünen Akzenten (#4DD5BC, #286F62).
- Icons: Tech-Logos für Rückseiten, PC-Bild für Vorderseiten.
- Layout: Zentriertes Gitter mit absoluten Positionen für Karten.
