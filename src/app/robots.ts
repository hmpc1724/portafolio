import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: 'https://portafolio.agencia-liquid-glass.workers.dev/sitemap.xml',
  };
}
