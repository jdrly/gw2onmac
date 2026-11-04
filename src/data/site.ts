export const site = {
  name: 'GW2 on Mac',
  url: 'https://gw2onmac.com',
  title: 'GW2 on Mac: Guild Wars 2 on Apple Silicon Macs',
  description:
    "A free, open-source app for Apple Silicon Macs. GW2 on Mac installs Guild Wars 2 through Steam or ArenaNet's own installer, on a tuned Wine with Direct3D 11 straight to Metal.",
  author: 'Jan Drlý',
};

/** The app's GitHub repo; the site reads its releases at build time (src/content.config.ts). */
export const repo = 'jdrly/gw2-on-mac';

export const links = {
  repo: `https://github.com/${repo}`,
  issues: `https://github.com/${repo}/issues`,
  releases: `https://github.com/${repo}/releases`,
  license: `https://github.com/${repo}/blob/main/LICENSE`,
  dxmt: 'https://github.com/jdrly/dxmt',
  discord: 'https://discord.gg/AnV3fZWz2b',
};

export const disclaimer =
  'Unofficial. Not made, endorsed or supported by ArenaNet or NCSOFT. Guild Wars 2 is a trademark of NCSOFT Corporation. Mac is a trademark of Apple Inc.';
