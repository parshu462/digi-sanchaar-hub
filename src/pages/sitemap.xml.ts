import { generateSitemap } from '@/utils/sitemap';
import { NextApiRequest, NextApiResponse } from 'next';

/**
 * API handler to serve the generated sitemap XML
 * @param req - The incoming request
 * @param res - The outgoing response
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.digisanchaar.org';
    const sitemapXml = await generateSitemap(baseUrl);

    res.setHeader('Content-Type', 'application/xml');
    res.write(sitemapXml);
    res.end();
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).end('Error generating sitemap');
  }
}
