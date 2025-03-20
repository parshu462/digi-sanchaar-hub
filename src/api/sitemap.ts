
import { generateSitemap } from "@/utils/sitemap";

/**
 * API handler for sitemap generation
 * @param req - The request object
 * @param baseUrl - The base URL of the site
 * @returns The sitemap XML as a string
 */
export const getSitemapXml = async (baseUrl: string): Promise<string> => {
  try {
    const sitemapXml = await generateSitemap(baseUrl);
    return sitemapXml;
  } catch (error) {
    console.error('Error generating sitemap:', error);
    throw new Error('Failed to generate sitemap');
  }
};
