# brand.cave.technology

The Cave brand site: the logo, symbol, icons, patterns and colours, with the rules for using them, in English (`/`) and Arabic (`/ar/`). Plain static files, no build step and no code to publish.

These assets are **not open source**. Anyone may use the unmodified logo files to refer to Cave; anything else needs written permission (see the Licence section of the page and `kit/` > `LICENSE.txt` inside the zip). The code of the design system is separate and open source: https://design.cave.technology.

## Contents

- `index.html`, `ar/index.html`: the pages (hand-edited; keep the two in step).
- `assets/logos`, `assets/icons`, `assets/patterns`: the SVG files, from the Cave design system artifact's asset store.
- `assets/css`: `tokens.css` and `components.css` are copies of the design system's generated files; `brand.css` and `fonts.css` are this site's own.
- `assets/fonts`: Poppins, Almarai and Hero, used only to draw this site. Fonts are not offered for download here: Poppins and Almarai are open fonts (Google Fonts), and Hero and Blue Ocean are licensed to Cave and not distributed.
- `kit/cave-brand-kit.zip`: logos, icons, patterns and `LICENSE.txt`. Rebuild it when an asset changes (zip the three asset folders plus the licence text into `cave-brand-kit/`).

## Not included on purpose

The letterhead images (they still print the old support address, reprint first), the brand presentation PDF (it still shows the retired "Software Solutions" line), and the product icons.

## Deploying

A Firebase Hosting site is needed (no project yet). Then `firebase use --add`, `firebase deploy --only hosting --account shmaisanimostafa@gmail.com`, and add the domain `brand.cave.technology`. `firebase.json` serves this folder as it is.
