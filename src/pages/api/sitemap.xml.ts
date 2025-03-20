import { NextApiRequest, NextApiResponse } from 'next';
import { generateSitemap } from '@/utils/sitemap';

/**
 * API handler for generating and serving the sitemap.xml
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Define the base URL dynamically
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.digisanchaar.org';
    
    // Generate the sitemap XML
    const sitemapXml = await generateSitemap(baseUrl);

    // Set the content type and return the sitemap
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(sitemapXml);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).end('Failed to generate sitemap');
  }
};

export default handler;
