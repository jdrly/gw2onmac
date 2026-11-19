// The page copy, from docs/gw2onmac.pen. Where the mobile frame shortens a line, `short` holds
// the mobile wording (shown below the md breakpoint, see .only-wide / .only-narrow in global.css).
// Versions, dates, downloads and release notes come from GitHub (src/content.config.ts).

export type IconName =
  | 'zap'
  | 'flame'
  | 'sparkles'
  | 'type'
  | 'gamepad-2'
  | 'file-text'
  | 'store'
  | 'download'
  | 'shield-check'
  | 'lock'
  | 'triangle-alert';

/** Text with an optional shorter mobile version */
export interface Copy {
  text: string;
  short?: string;
}

/** The second download: the newest 0.1.x, for the macOS versions 0.2 doesn't run on (min: what 0.1.x needs) */
export const olderMac = { line: '0.1.', macos: '26.0 to 26.3', min: '26.0' };

export const hero = {
  kicker: { text: 'A free, open-source app for Apple Silicon Macs', short: 'Free and open source, for Apple Silicon' },
  headline: 'Guild Wars 2, at home on your Mac.',
  lede: {
    text: "GW2 on Mac installs the game through Steam or ArenaNet's own installer, on a tuned Wine with Direct3D 11 straight to Metal. Your account, your install, no tinkering.",
    short:
      "GW2 on Mac installs the game through Steam or ArenaNet's own installer, on a tuned Wine with Direct3D 11 straight to Metal.",
  },
};

export const features: { icon: IconName; title: string; text: Copy }[] = [
  {
    icon: 'zap',
    title: 'Direct3D 11 straight to Metal',
    text: { text: "My own build of DXMT draws the game through Metal 4, tuned for GW2's busy maps." },
  },
  {
    icon: 'flame',
    title: 'Tuned for crowds',
    text: {
      text: "A tuned Wine for better performance in busy scenes like Lion's Arch and metas.",
      short: 'A tuned Wine for better performance in busy scenes.',
    },
  },
  {
    icon: 'sparkles',
    title: 'Fewer shader hitches',
    text: {
      text: 'The app remembers what your sessions built and prepares it before the game asks.',
      short: 'The app prepares what your sessions built before the game asks.',
    },
  },
  {
    icon: 'type',
    title: 'Sharp text at 4K',
    text: {
      text: "An optional larger interface drawn from the game's own crisp fonts.",
      short: "An optional larger interface from the game's own fonts.",
    },
  },
  {
    icon: 'gamepad-2',
    title: 'Game Mode and Retina',
    text: {
      text: "macOS gives the game priority in full screen, at your display's full resolution.",
      short: "Priority in full screen, at your display's full resolution.",
    },
  },
  {
    icon: 'file-text',
    title: 'Updates and logs',
    text: {
      text: 'The app keeps itself current, and Collect Logs makes bug reports one click.',
      short: 'Keeps itself current; Collect Logs makes bug reports one click.',
    },
  },
];

export interface Step {
  title: string;
  text: string;
  /** Mobile: one line instead of title + text */
  short: string;
}

export const routes: { id: string; icon: IconName; title: string; sub: string; steps: Step[] }[] = [
  {
    id: 'steam',
    icon: 'store',
    title: 'Through Steam',
    sub: 'For the Steam edition of Guild Wars 2.',
    steps: [
      { title: 'Download the .dmg', text: 'Drag GW2 on Mac to Applications and open it.', short: 'Download the .dmg, drag it to Applications' },
      {
        title: 'Choose Steam, click Install',
        text: "It sets up its engine, then downloads Steam's installer from Valve.",
        short: 'Choose Steam, click Install',
      },
      {
        title: 'Sign in, install the game',
        text: 'Steam opens. Sign in and install Guild Wars 2. Your login stays in Steam.',
        short: 'Sign in to Steam and install the game',
      },
      { title: 'Click Play', text: "Steam starts the game on GW2 on Mac's engine.", short: 'Click Play' },
    ],
  },
  {
    id: 'arenanet',
    icon: 'download',
    title: "With ArenaNet's installer",
    sub: 'For an account bought from ArenaNet.',
    steps: [
      { title: 'Download the .dmg', text: 'Drag GW2 on Mac to Applications and open it.', short: 'Download the .dmg, drag it to Applications' },
      {
        title: 'Get the official installer',
        text: 'Download Gw2Setup-64.exe from guildwars2.com.',
        short: 'Get Gw2Setup-64.exe from guildwars2.com',
      },
      {
        title: 'Drop it in, click Install',
        text: "GW2 on Mac runs ArenaNet's installer in its own bottle.",
        short: 'Drop it in, click Install',
      },
      { title: 'Click Play', text: "Log in in ArenaNet's launcher, as on Windows.", short: 'Click Play and log in' },
    ],
  },
];

export const requirements: { label: string; value: Copy }[] = [
  { label: 'Chip', value: { text: 'Apple Silicon (M1 or later)', short: 'Apple Silicon' } },
  { label: 'macOS', value: { text: '26.4 or later' } },
  { label: 'Rosetta', value: { text: 'Not needed' } },
  { label: 'Disk', value: { text: 'About 75 GB free for the game', short: 'About 75 GB free' } },
  { label: 'Account', value: { text: 'Your own, Steam or ArenaNet', short: 'Steam or ArenaNet' } },
];

export const requirementsNote = 'Every game download comes from Valve or ArenaNet. GW2 on Mac hosts nothing of the game.';

/** Under the requirements, on every width: the table is 0.2's */
export const requirementsOlder = "That's for 0.2. On macOS 26.0 to 26.3, use the 0.1 download at the top instead. It needs Rosetta.";

export const safety: { icon: IconName; tone: 'accent' | 'gold'; title: string; text: Copy }[] = [
  {
    icon: 'shield-check',
    tone: 'accent',
    title: 'Not a game mod',
    text: {
      text: 'It runs the official game unchanged, on a compatibility layer like CrossOver or Proton. Nothing touches gameplay or network traffic.',
      short: 'The official game runs unchanged, on a compatibility layer.',
    },
  },
  {
    icon: 'lock',
    tone: 'accent',
    title: 'Your account stays yours',
    text: {
      text: 'You sign in to Steam or ArenaNet yourself. GW2 on Mac never sees your password, and Collect Logs leaves account data out.',
      short: 'You sign in yourself; logs leave account data out.',
    },
  },
  {
    icon: 'triangle-alert',
    tone: 'gold',
    title: 'One optional extra, off by default',
    text: {
      text: "The sharper-interface addon changes the game's memory. It's off until you turn it on and accept the warning.",
      short: 'The interface addon is off until you accept its warning.',
    },
  },
];

// Answers are trusted HTML (rendered with set:html): paragraphs and links only.
export const faq: { q: Copy; a: string[] }[] = [
  {
    q: { text: 'Does ArenaNet support this?' },
    a: [
      "No. GW2 on Mac is an unofficial fan project. Please don't contact ArenaNet support about it; ask on Discord or GitHub instead.",
    ],
  },
  {
    q: { text: 'Which Macs and macOS versions?' },
    a: [
      "0.2 needs a Mac with Apple Silicon (M1 or later) on macOS 26.4 or later. Intel Macs aren't supported.",
      "0.2 doesn't need Rosetta. Wine and DXMT run as Apple Silicon code, and FEX translates the game's and Steam's Intel code inside Wine.",
      "On macOS 26.0 to 26.3, use the 0.1 download at the top. It runs under Rosetta. An installed 0.1 keeps working there as it is, but it gets no update.",
    ],
  },
  {
    q: { text: 'How fast is it?' },
    a: [
      "It depends on the scene. In big crowds, like Lion's Arch or a busy meta, the limit is usually the game's own main thread, whose Intel code FEX translates, so a faster GPU doesn't help much there.",
      "I don't give FPS numbers: they change too much from one Mac and one scene to the next.",
    ],
  },
  {
    q: { text: 'Can I use arcdps or other addons?' },
    a: [
      "Settings › Interface has two switches, off by default: arcdps and ReShade. Each asks first, then downloads the addon. Both can be on at once, and ReShade then loads arcdps itself. I've played on 0.2's engine with ReShade and arcdps on together.",
      "ReShade's presets, shaders and screenshots live outside the game, in <code>~/Library/Application Support/GW2 on Mac arm64/ReShade</code>. Drop a preset or a zip on the Settings window to add it.",
      "Other addons that install as a <code>d3d11.dll</code> next to the game load first and pass its calls on to GW2 on Mac's Direct3D 11. I haven't tested the Nexus loader. Blish HUD isn't supported yet.",
    ],
  },
  {
    q: { text: 'I play on GW2 on Mac 0.1. What does the update do?', short: 'What does the update from 0.1 do?' },
    a: [
      "On macOS 26.4 or later, 0.1 offers 0.2 as an update. At its first start 0.2 moves your install over by itself: a new bottle on the new engine, then Steam's folder with your login and the game, or on ArenaNet's route the game's folder. The game's settings, arcdps and ReShade come along. The move is a rename on the same disk, so it needs no room for a second copy and the game doesn't download again. If 0.1's game is on another disk, the move stops before it changes anything and says why.",
      "Some installs don't move by themselves, such as one where a 0.2 test build is already installed, or a game in a Steam library outside 0.1's bottle. The window's card Game files I already have brings that game over, with Choose folder… for a library elsewhere.",
      "After the move the game lives in 0.2. To go back, choose Rollback to 0.1.4 in Settings › Troubleshooting. It moves the game back to 0.1's folder and offers <a href=\"https://github.com/jdrly/gw2-on-mac/releases/download/v0.1.4/GW2-on-Mac-0.1.4.dmg\">0.1.4's DMG</a>: quit GW2 on Mac and drag 0.1.4 over it. 0.1's folders stay until you delete them, and once they're gone, so is the way back.",
    ],
  },
  {
    q: { text: 'What happens to my game when I uninstall?', short: 'What happens when I uninstall?' },
    a: [
      "Uninstall removes the app's bottle, and the game files in it go too. To play again later, you'd download the game again. Your account and characters are on ArenaNet's servers and aren't touched.",
      "After the update from 0.1, Uninstall refuses while the moved game is in the bottle, since that's its only copy. Choose Rollback to 0.1.4 first.",
    ],
  },
];
