import { SITE_BASE_URL } from '@/constants';
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '',
    },
    sitemap: `${SITE_BASE_URL}/sitemap.xml`,
  };
}
