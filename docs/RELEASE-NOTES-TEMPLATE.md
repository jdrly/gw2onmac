# Release notes template

Each release's notes live in the app repo (`jdrly/gw2-on-mac`) at `release-notes/<version>.md`
and go to three places unchanged: the GitHub release, the in-app update window (Sparkle) and
gw2onmac.com. The site reads the GitHub release as HTML and relies on the structure below.

```markdown
## GW2 on Mac 0.1.1

One sentence that says what this release is about.

### First change, as a short headline
What changed and what it means for the player, in a short paragraph. Technical references
go in inline code, e.g. DXMT `68c7190`.

### Second change
- Bullets are fine when a change has several parts.
- Keep each bullet to one or two sentences.

### After updating
Open GW2 on Mac and click *Update to 0.1.1* in the window (with the game closed).

### Support
GW2 on Mac is an unofficial project, not made, endorsed or supported by ArenaNet or NCSOFT, and
you use it at your own risk. Please send questions and bug reports to Pharaphobia on
[Discord](https://discord.gg/AnV3fZWz2b) or as a [GitHub issue](https://github.com/jdrly/gw2-on-mac/issues),
never to ArenaNet or Steam support.
```

## Rules

| Part | Required | How the site uses it |
|---|---|---|
| `## GW2 on Mac <version>` | yes, first line | Removed; the site shows its own version and date |
| Summary paragraph | yes, right after the title, one sentence | The first paragraph of the newest release; the one-liner of a folded older one |
| `### <change>` sections | at least one | One heading per change |
| `### After updating` | only when the player has to do something | Shown last before Support |
| `### Support` | yes, last | Shown as is; the wording above is fixed |

- No other `##` headings, and no `####`: the site styles `###` as a change and nothing deeper.
- Inline code shows as a chip. Code blocks are fine for commands but keep them rare.
- Pre-releases (development builds, `-dev.N`) use the same structure; the title ends in
  `(development build)`. The site leaves them out, and drafts too.
- Attach the signed `.dmg` to the release: the site's Download button links to the first `.dmg`
  asset of the newest stable release.
