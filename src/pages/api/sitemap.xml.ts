import { generateSitemap } from "@/utils/sitemap";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * API handler for generating sitemap.xml
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8080";
    const sitemapXml = await generateSitemap(baseUrl);

    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(sitemapXml);
  } catch (error) {
    console.error("Error generating sitemap:", error);
    res.status(500).send("Failed to generate sitemap");
  }
}
