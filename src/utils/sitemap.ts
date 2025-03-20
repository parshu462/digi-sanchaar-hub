
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

/**
 * Generates a sitemap XML for the website
 * @returns Promise with the sitemap as string
 */
export const generateSitemap = async (baseUrl: string) => {
  // Define all routes in the application
  const routes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/services', changefreq: 'weekly', priority: 0.8 },
    { url: '/about', changefreq: 'monthly', priority: 0.7 },
    { url: '/students', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog', changefreq: 'weekly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.7 },
    { url: '/get-started', changefreq: 'monthly', priority: 0.7 },
    { url: '/clients', changefreq: 'monthly', priority: 0.7 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: baseUrl });
  
  // Return a promise that resolves with the XML
  return streamToPromise(
    Readable.from(routes).pipe(stream)
  ).then(data => data.toString());
};
