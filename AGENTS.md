## Project

gw2onmac.com: one static Astro page for GW2 on Mac (Guild Wars 2 on Apple Silicon Macs),
published to GitHub Pages. See README.md for what's where.

- The design is `docs/gw2onmac.pen` (encrypted: read it only through the Pencil MCP tools) with
  PNG exports in `docs/exports/`. Tokens are its `g-*` variables, in `src/styles/global.css`.
- Releases come from the GitHub releases of `jdrly/gw2-on-mac` at build time. The site must still
  build and look right with no release (Download reads "Coming soon").
- Copy lives in `src/data/content.ts`. Write it plainly, in Jan's voice, with no claims the app
  can't back (no FPS numbers).
- Legal: keep the footer disclaimer as it is; no ArenaNet or NCSOFT logos, fonts or art.
- Check a change with `npm run build`, `npx astro check` and `node scripts/shot.mjs` (headless;
  never open browser windows), then compare `docs/shots/` with `docs/exports/`.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
