import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLang, ui, type Lang, type UIKey } from './ui';

export function useTranslations(lang: Lang) {
  return (key: UIKey) => ui[lang][key] ?? ui[defaultLang][key];
}

/** Đường dẫn có tiền tố ngôn ngữ: vi → "/about", en → "/en/about". */
export function localePath(lang: Lang, path = '/') {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === '/' ? `/${lang}/` : `/${lang}${clean}`;
}

export const otherLang = (lang: Lang): Lang => (lang === 'vi' ? 'en' : 'vi');

/** "vi/hello-world" → "hello-world" */
export const postSlug = (post: CollectionEntry<'blog'>) => post.id.split('/').slice(1).join('/');
export const postLang = (post: CollectionEntry<'blog'>) => post.id.split('/')[0] as Lang;
export const postUrl = (post: CollectionEntry<'blog'>) =>
  localePath(postLang(post), `/blog/${postSlug(post)}/`);

export async function getPosts(lang: Lang) {
  const posts = await getCollection(
    'blog',
    (p) => postLang(p) === lang && (import.meta.env.DEV || !p.data.draft),
  );
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function readingTime(body = '') {
  const words = body.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function formatDate(date: Date, lang: Lang) {
  return new Intl.DateTimeFormat(lang === 'vi' ? 'vi-VN' : 'en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}
