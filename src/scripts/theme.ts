// Theme controls: the header toggle cycles System → Light → Dark, and the mobile menu has the
// three as buttons. System (the default) follows macOS. localStorage.theme holds the choice
// ('auto', 'light' or 'dark'); Base.astro applies it before the first paint.

type Choice = 'auto' | 'light' | 'dark';

const root = document.documentElement;
const order: Choice[] = ['auto', 'light', 'dark'];
const names: Record<Choice, string> = { auto: 'System', light: 'Light', dark: 'Dark' };
const systemQuery = matchMedia('(prefers-color-scheme: dark)');
const system = () => (systemQuery.matches ? 'dark' : 'light');

function saved(): Choice {
  try {
    const value = localStorage.getItem('theme');
    return value === 'light' || value === 'dark' ? value : 'auto';
  } catch {
    return 'auto';
  }
}

function sync() {
  const choice = saved();
  document.querySelectorAll<HTMLElement>('[data-theme-choice]').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.themeChoice === choice));
  });
  const next = order[(order.indexOf(choice) + 1) % order.length];
  document.querySelectorAll<HTMLElement>('[data-theme-toggle]').forEach((b) => {
    b.dataset.choice = choice;
    b.setAttribute('aria-label', `Theme: ${names[choice]}. Switch to ${names[next]}`);
    b.title = `Theme: ${names[choice]}`;
  });
  const bg = getComputedStyle(root).getPropertyValue('--c-bg').trim();
  if (bg) document.querySelector('meta[name="theme-color"]')?.setAttribute('content', bg);
}

function apply(choice: Choice) {
  try {
    localStorage.setItem('theme', choice);
  } catch {
    // Private mode or blocked storage: the choice lasts until the page is left.
  }
  root.dataset.theme = choice === 'auto' ? system() : choice;
  sync();
}

document.addEventListener('click', (e) => {
  const el = (e.target as Element).closest<HTMLElement>('[data-theme-choice],[data-theme-toggle]');
  if (!el) return;
  const choice = el.dataset.themeChoice as Choice | undefined;
  apply(choice ?? order[(order.indexOf(saved()) + 1) % order.length]);
});
systemQuery.addEventListener('change', () => {
  if (saved() === 'auto') apply('auto');
});
sync();
