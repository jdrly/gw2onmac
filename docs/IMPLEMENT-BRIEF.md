# Brief: implement gw2onmac.com from the approved design

Jan approved the design on 2026-11-04. This repository is a copy of `jdrly/sw-on-mac` (the Astro
site behind swonmac.com, with its GitHub Pages workflow). Turn it into gw2onmac.com: one app,
**GW2 on Mac**, with the look of `docs/gw2onmac.pen`.

## The design

- `docs/gw2onmac.pen`: read it only through the Pencil MCP tools; the file is encrypted. Frames:
  - Landing (Light) and Landing (Dark), 1440 wide;
  - Mobile (Light) and Mobile (Dark), 390 wide;
  - the Mobile Menu (Light and Dark);
  - the Social Preview (1200×630).
- PNG exports in `docs/exports/`.
- Tokens: the `g-*` variables (the older SW variables are unused).
- Fonts: Cinzel (wordmark, buttons, version numbers), Marcellus (headings), Alegreya Sans (text).
  All are SIL OFL; self-host them like the current site does its fonts.
- Artwork in `docs/art/`:
  - the light header stroke `stroke-light.png` (multiply on the parchment, then a fade to the
    page colour);
  - the dark header stroke `stroke-dark.png` (painted on black, so use `mix-blend-mode: lighten`
    on the dark page, then a fade);
  - the painting `painting.webp` (transparent);
  - the app icon `app-icon.png`;
  - app screenshots `shot-*.png`. Light uses `shot-ready.png`, dark uses `shot-ready-dark.png`.

## What the site does

- **Sections, in order:** header and hero (`#top`), `#features`, `#install` (the Steam and
  ArenaNet routes plus the requirements), `#faq` (Is it safe? plus the FAQ as `<details>`),
  `#releases`, then support and footer.
  - Keep the current site's theme toggle (system, light, dark), the mobile menu, accessibility,
    the pointer cursors and the OG and meta setup.
  - The header stroke, fades and painting change with the theme.
- **Releases and download:** as the current site does for SWTOR on Mac, read from the GitHub
  releases of **`jdrly/gw2-on-mac`** (the app's future public repo), at build time.
  - That repo doesn't exist yet, so the site must build and look right with no release: the
    Download button then reads "Coming soon" (disabled), and the release section shows a short
    "First release coming soon" entry.
  - Keep the `repository_dispatch` release trigger in `deploy.yml`.
- **FAQ answers** (write them plainly, in Jan's voice, no claims we can't back):
  - **ArenaNet support:** no, it's unofficial; ask on Discord or GitHub.
  - **Macs:** Apple Silicon, macOS 26 or later, Rosetta.
  - **Speed:** depends on the scene. Big crowds are limited by the game's own main thread under
    Rosetta. No FPS numbers.
  - **Addons:** arcdps-style `d3d11.dll` addons load first and pass calls on. Blish HUD isn't
    supported yet.
  - **Uninstall:** removes the app's bottle, including the game files in it.
- **Content:** take the copy from the design. Remove everything SWTOR, SWGL and Star Wars: data,
  components, the benchmark, starfield and warp artwork, `docs/brand` and the SW images.
  `public/CNAME` = `gw2onmac.com`. Update the README, `AGENTS.md`, `DESIGN-BRIEF.md` and the
  release-notes template for GW2 on Mac.
- **Legal:** the footer disclaimer exactly as in the design; no ArenaNet or NCSOFT logos, fonts or
  art.

## Rules

- **Work in `/Users/jd/Development/personal/gw2onmac`**, on `main`. No remote exists yet: don't
  create, push or publish anything on GitHub. The coordinator does that.
- **Verify with `npm run build` and screenshots:** `scripts/shot.mjs`, or a headless browser that
  doesn't open windows on Jan's screen. Shoot desktop and mobile, light and dark, compare them
  with `docs/exports/`, and save the shots under `docs/shots/`.
- Commit at milestones, each marked as written by an AI agent.
- **Report to the coordinator** (Zeron chat c4679499-ac7f-4877-868d-b2a6bdc0fb22) with
  `SITE READY: <commit>; shots: <paths>`, or with any question the design doesn't settle.
