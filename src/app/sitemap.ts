import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://uixdesignlab.com';
  
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
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
