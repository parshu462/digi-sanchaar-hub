
import React, { useEffect, useState } from 'react';
import { generateSitemap } from '@/utils/sitemap';

const Sitemap = () => {
  const [sitemap, setSitemap] = useState<string>('');

  useEffect(() => {
    const baseUrl = window.location.origin;
    
    const fetchSitemap = async () => {
      try {
        const sitemapXml = await generateSitemap(baseUrl);
        setSitemap(sitemapXml);
        
        // Create a Blob from the XML
        const blob = new Blob([sitemapXml], { type: 'application/xml' });
        const url = URL.createObjectURL(blob);
        
        // Create an invisible link and trigger download (for demo purposes)
        const a = document.createElement('a');
        a.href = url;
        a.download = 'sitemap.xml';
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } catch (error) {
        console.error('Error generating sitemap:', error);
      }
    };

    fetchSitemap();
  }, []);

  // Display the sitemap contents
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Sitemap</h1>
      <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-[80vh] text-sm">
        {sitemap}
      </pre>
    </div>
  );
};

export default Sitemap;
