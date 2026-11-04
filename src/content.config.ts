import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { repo, site } from './data/site';

// Stable releases of GW2 on Mac from the GitHub API, loaded once per build (and at dev server
// start). The notes follow docs/RELEASE-NOTES-TEMPLATE.md: the `## GW2 on Mac <version>` title, a
// one-sentence summary, `###` per change, `### Support` last.
// Until the repo exists (404) or has a stable release, the collection is empty and the site shows
// "Coming soon". Set GITHUB_TOKEN to avoid the 60 requests/hour limit of unauthenticated calls.

interface GitHubRelease {
  tag_name: string;
  html_url: string;
  draft: boolean;
  prerelease: boolean;
  published_at: string;
  body_html?: string;
  assets: { name: string; browser_download_url: string }[];
}

const stripTags = (html: string) =>
  html
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();

function parseNotes(html: string) {
  // GitHub keeps the notes' line wrapping as <br>; it's only wrapping, not a line break.
  let body = html.replace(/<br>\n?/g, ' ').trim();
  body = body.replace(/^<h2[^>]*>[\s\S]*?<\/h2>\s*/, '');
  const firstParagraph = body.match(/^<p>([\s\S]*?)<\/p>\s*/);
  const summary = firstParagraph ? stripTags(firstParagraph[1]) : '';
  if (firstParagraph) body = body.slice(firstParagraph[0].length);
  return { summary, bodyHtml: body };
}

async function loadReleases() {
  const headers: Record<string, string> = { Accept: 'application/vnd.github.html+json' };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const res = await fetch(`https://api.github.com/repos/${repo}/releases?per_page=100`, { headers });
  // No public repo yet: no releases, not a failed build.
  if (res.status === 404) return [];
  if (!res.ok) throw new Error(`GitHub releases of ${repo}: ${res.status} ${res.statusText}`);
  const releases = (await res.json()) as GitHubRelease[];

  return releases
    .filter((r) => !r.draft && !r.prerelease)
    .map((r) => {
      const version = r.tag_name.replace(/^v/, '');
      const dmg = r.assets.find((a) => a.name.endsWith('.dmg'));
      return {
        id: version,
        version,
        title: `${site.name} ${version}`,
        publishedAt: r.published_at,
        url: r.html_url,
        dmgUrl: dmg?.browser_download_url ?? r.html_url,
        ...parseNotes(r.body_html ?? ''),
      };
    });
}

const releases = defineCollection({
  loader: loadReleases,
  schema: z.object({
    version: z.string(),
    title: z.string(),
    publishedAt: z.coerce.date(),
    url: z.url(),
    dmgUrl: z.url(),
    summary: z.string(),
    bodyHtml: z.string(),
  }),
});

export const collections = { releases };
