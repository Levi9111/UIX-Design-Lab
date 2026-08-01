import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about-us',
    '/all-projects',
    '/features',
    '/get-in-touch',
    '/pricing',
    '/select-your-project',
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
