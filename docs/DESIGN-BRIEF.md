# gw2onmac.com: design brief

Landing page for **GW2 on Mac**, a free, open-source macOS app by Jan Drlý that runs Guild Wars 2
on Apple Silicon Macs. Repo: [jdrly/gw2-on-mac](https://github.com/jdrly/gw2-on-mac).

Static site (Astro on GitHub Pages), **one page**. The approved design is `docs/gw2onmac.pen`
(Landing, Mobile and Mobile Menu, light and dark, plus the Social Preview), exported to
`docs/exports/`.

## Look

- Parchment (light) and near-black (dark) pages under a red ink band; the header sits on the band.
- A watercolour painting above a screenshot of the app window in the hero.
- Fonts: Cinzel (wordmark, buttons, version numbers), Marcellus (headings), Alegreya Sans (text).
- Lucide icons. Tokens: the `g-*` variables.

## Layout, top to bottom

1. **Header** on the ink band: the GW2 on Mac wordmark with the app icon; Features, Install,
   Releases, FAQ; GitHub, Discord and the theme toggle (System, Light, Dark). On mobile, a menu
   button opens a full-screen menu.
2. **Hero** (`#top`): kicker, "Guild Wars 2, at home on your Mac.", the lede, Download and
   "Requirements & install", the version line; the painting and the app window.
3. **Features** (`#features`): six, with an icon each.
4. **Install** (`#install`): the Steam and ArenaNet routes, four steps each, and the requirements.
5. **Is it safe?** and the **FAQ** (`#faq`), the FAQ as `<details>`.
6. **Release notes** (`#releases`): stable releases from GitHub, newest first and open, older ones
   folded. Before the first release, a "First release coming soon" entry.
7. **Need help?** and the footer with the disclaimer and links (Source, DXMT fork, Licence).

## Without a release

The Download button reads "Coming soon" and is disabled; the version line says the first release
is coming soon.

## Footer disclaimer (verbatim)

> Unofficial. Not made, endorsed or supported by ArenaNet or NCSOFT. Guild Wars 2 is a trademark
> of NCSOFT Corporation. Mac is a trademark of Apple Inc.

## Hard constraints

- No ArenaNet or NCSOFT logos, fonts or art, and no official key art.
- Screenshots of the app are fine.
- Static only: no logins, no backend. Collapsible parts use native `<details>`.
- Responsive from mobile to wide desktop; light and dark.
- No claims the app can't back: no FPS numbers.
