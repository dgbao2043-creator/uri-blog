import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Bài viết: src/content/blog/<vi|en>/<ten-bai>.md
 * Bản dịch của cùng một bài dùng chung `translationKey`.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['learn', 'live', 'go']),
    cover: z.string(),
    coverAlt: z.string(),
    /** Vùng ảnh được giữ khi cắt khung, ví dụ '50% 30%' (ngang dọc). Hữu ích cho ảnh dọc. */
    coverPosition: z.string().default('50% 50%'),
    translationKey: z.string(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

/** Trang tĩnh viết bằng Markdown: about, now. */
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    note: z.string().optional(),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { blog, pages };
