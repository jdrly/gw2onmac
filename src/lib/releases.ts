import { getCollection, type CollectionEntry } from 'astro:content';

export type Release = CollectionEntry<'releases'>['data'] & { id: string };

/** Stable releases, newest first; empty until the first one is out. */
export async function getReleases(): Promise<Release[]> {
  const entries = await getCollection('releases');
  return entries
    .map((e) => ({ id: e.id, ...e.data }))
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
}

/**
 * The newest release of an older line (`line`, a version prefix such as "0.1."), for the Macs the
 * latest doesn't run on. None while the latest is itself on that line, or before any release.
 */
export function olderLine(releases: Release[], line: string): Release | undefined {
  if (!releases[0] || releases[0].version.startsWith(line)) return undefined;
  return releases.find((r) => r.version.startsWith(line));
}

/** "November 2026" */
export const formatMonth = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });

/** "November 17, 2026" */
export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
