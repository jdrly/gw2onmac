# gw2onmac.com

The website of [GW2 on Mac](https://github.com/jdrly/gw2-on-mac), a free, open-source app that
runs Guild Wars 2 on Apple Silicon Macs. One static page, built with Astro and published to
GitHub Pages.

## What's where

| Path | What |
| :--- | :--- |
| `src/pages/index.astro` | The page: `#top` (header and hero), `#features`, `#install`, `#faq`, `#releases`, then support and footer |
| `src/components/` | One component per section, plus the header, wordmark, icons and the Download button |
| `src/data/content.ts` | The page copy; `short` holds the mobile wording where the design shortens a line |
| `src/data/site.ts` | Name, title, links, the app repo and the footer disclaimer |
| `src/content.config.ts` | Reads the stable releases of `jdrly/gw2-on-mac` from the GitHub API at build time |
| `src/styles/global.css` | The design tokens (`g-*` in the design) for light and dark |
| `src/assets/art/` | The ink band, the painting, the app icon and the app screenshots |
| `docs/gw2onmac.pen` | The design (open it with Pencil); PNG exports in `docs/exports/` |
| `docs/shots/` | Screenshots of the built site, to compare with `docs/exports/` |

## Releases and the Download button

Versions, dates, the `.dmg` link and the release notes come from the GitHub releases of
`jdrly/gw2-on-mac`, read at build time. Drafts and pre-releases are left out. Before the first
stable release (or while the repo doesn't exist), the Download button reads "Coming soon" and the
release notes show a "First release coming soon" entry.

The site rebuilds on a push to `main`, by hand (Actions → Deploy → Run workflow) and when the app
repo sends a `release` `repository_dispatch` (see `.github/workflows/deploy.yml`). The notes'
format is in `docs/RELEASE-NOTES-TEMPLATE.md`.

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install the dependencies |
| `astro dev --background` | Start the dev server on `localhost:4321` (`astro dev stop` stops it) |
| `npm run build` | Build the site into `./dist/` |
| `npx astro check` | Type-check |
| `node scripts/shot.mjs` | Headless screenshots, desktop and mobile, light and dark, into `docs/shots/` |

Set `GITHUB_TOKEN` to avoid the GitHub API's limit of 60 unauthenticated requests an hour.

## Fonts and art

Cinzel, Marcellus and Alegreya Sans (SIL OFL), downloaded at build time and served from the
site. No ArenaNet or NCSOFT logos, fonts or art: the painting, the ink band and the icon are the
app's own.
