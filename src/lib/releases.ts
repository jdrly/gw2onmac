import { getCollection, type CollectionEntry } from 'astro:content';

export type Release = CollectionEntry<'releases'>['data'] & { id: string };

/** Stable releases, newest first; empty until the first one is out. */
export async function getReleases(): Promise<Release[]> {
  const entries = await getCollection('releases');
  return entries
    .map((e) => ({ id: e.id, ...e.data }))
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
}

/** "November 2026" */
export const formatMonth = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });

/** "November 17, 2026" */
export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
