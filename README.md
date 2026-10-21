# brand.cave.technology

The Cave brand site: the logo, symbol, icons, patterns and colours, with the rules for using them, in English (`/`) and Arabic (`/ar/`). Plain static files, no build step and no code to publish.

The navigation's theme icon opens System, Light, Dark and Black choices in both languages. The choice is saved as `cave-brand-theme` in local storage and shared across this site's language pages and tabs. System follows device changes; blocked storage still allows switching for the current page. `assets/js/theme.js` also applies the saved choice before styles load, including on the 404 page.

These assets are **not open source**. Anyone may use the unmodified logo files to refer to Cave; anything else needs written permission (see the Licence section of the page and `kit/` > `LICENSE.txt` inside the zip). The code of the design system is separate and open source: https://design.cave.technology.

## Contents

- `index.html`, `ar/index.html`: the pages (hand-edited; keep the two in step).
- `assets/logos`, `assets/icons`, `assets/patterns`: the SVG files, from the Cave design system artifact's asset store.
- `assets/css`: `tokens.css` and `components.css` are copies of the design system's generated files; `brand.css` and `fonts.css` are this site's own.
- `assets/fonts`: Poppins and Almarai (SIL OFL), plus Hero, used only to draw this site. `Hero.otf` is **not in git** (the file says "All rights reserved" and has no licence): copy it into `assets/fonts/` locally before deploying to get Hero headings; without it the headings fall back to Poppins. Fonts are not offered for download here: Poppins and Almarai are open fonts (Google Fonts), and Hero and Blue Ocean are licensed to Cave and not distributed.
- `kit/cave-brand-kit.zip`: logos, icons, patterns and `LICENSE.txt`. Rebuild it when an asset changes (zip the three asset folders plus the licence text into `cave-brand-kit/`).

## Not included on purpose

The letterhead images (they still print the old support address, reprint first), the brand presentation PDF (it still shows the retired "Software Solutions" line), and the product icons.

## Deploying

The Firebase project is `cave-brand-kit` (Hosting site `cave-brand-kit`, default URL https://cave-brand-kit.web.app); `.firebaserc` points at it. It belongs to the shmaisanimostafa@gmail.com account, so pass that account:

`firebase deploy --only hosting --account shmaisanimostafa@gmail.com`

Then add the custom domain `brand.cave.technology` in the Hosting console and set the DNS records it shows. `firebase.json` serves this folder as it is.

## Unreleased local tools

The current working copy adds per-logo approved background previews, transparent
1600px PNG export using the original SVG, and copy-color controls with a manual
fallback. PNG export preserves the original proportions and does not include the
preview background. Asset terms are unchanged. Nothing from this work is deployed.
