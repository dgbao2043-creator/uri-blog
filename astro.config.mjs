// @ts-check
import { defineConfig } from 'astro/config';

// Đổi `site` thành tên miền thật của bạn khi deploy.
export default defineConfig({
  site: 'https://uriduong.vercel.app',
  i18n: {
    locales: ['vi', 'en'],
    defaultLocale: 'vi',
    routing: { prefixDefaultLocale: false },
  },
});
