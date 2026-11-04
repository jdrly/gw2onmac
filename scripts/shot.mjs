// Screenshot the site headlessly (no window opens), to compare with docs/exports/.
//   node scripts/shot.mjs                      the full page and the mobile menu, desktop and
//                                              mobile, light and dark, into docs/shots/
//   node scripts/shot.mjs <selector> <out.png> [--width=1440] [--theme=light|dark] [--full]
// Needs the site on http://localhost:4321 (astro dev --background, or astro preview); --url= changes it.
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

const args = process.argv.slice(2);
const flags = Object.fromEntries(args.filter((a) => a.startsWith('--')).map((f) => f.replace(/^--/, '').split('=')));
const [selector, out] = args.filter((a) => !a.startsWith('--'));
const url = flags.url ?? 'http://localhost:4321/';

const browser = await chromium.launch({ headless: true });

async function shoot({ width, theme, path, selector = 'body', full = true, menu = false }) {
  const page = await browser.newPage({
    viewport: { width, height: width < 768 ? 844 : 900 },
    deviceScaleFactor: 1,
    reducedMotion: 'reduce',
  });
  await page.addInitScript((t) => localStorage.setItem('theme', t), theme);
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: 'astro-dev-toolbar { display: none !important; }' });
  await page.evaluate(() => document.fonts.ready);
  // Lazy images below the fold: scroll through once so a full-page shot has them.
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 40));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForLoadState('networkidle');
  if (menu) {
    await page.click('#site-menu > summary');
    await page.waitForTimeout(100);
    await page.screenshot({ path });
  } else if (selector === 'body' && full) {
    await page.screenshot({ path, fullPage: true });
  } else {
    await page.locator(selector).first().screenshot({ path });
  }
  console.log(`${path}: ${menu ? 'menu' : selector} at ${width}px, ${theme}`);
  await page.close();
}

if (selector) {
  await shoot({ width: Number(flags.width ?? 1440), theme: flags.theme ?? 'light', path: out ?? 'shot.png', selector, full: 'full' in flags });
} else {
  await mkdir('docs/shots', { recursive: true });
  for (const theme of ['light', 'dark']) {
    await shoot({ width: 1440, theme, path: `docs/shots/landing-${theme}.png` });
    await shoot({ width: 390, theme, path: `docs/shots/mobile-${theme}.png` });
    await shoot({ width: 390, theme, path: `docs/shots/mobile-menu-${theme}.png`, menu: true });
  }
}
await browser.close();
