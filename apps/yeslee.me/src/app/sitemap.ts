import type { MetadataRoute } from 'next';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const sitemapFiles = [
    {
      priority: 1,
      url: 'https://yeslee.me/en',
      lastModified: new Date(),
    },
    { priority: 1, url: 'https://yeslee.me/zh-TW', lastModified: new Date() },
  ];
  return sitemapFiles;
};

export default sitemap;
