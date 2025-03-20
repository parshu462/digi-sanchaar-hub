
import React, { useEffect, useState } from 'react';
import { getSitemapXml } from '@/api/sitemap';

const Sitemap = () => {
  const [sitemap, setSitemap] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const baseUrl = window.location.origin;
    
    const fetchSitemap = async () => {
      try {
        setIsLoading(true);
        const sitemapXml = await getSitemapXml(baseUrl);
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
        setError(null);
      } catch (error) {
        console.error('Error generating sitemap:', error);
        setError('Failed to generate sitemap');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSitemap();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Sitemap</h1>
      
      {isLoading && (
        <div className="text-center py-8">
          <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Generating sitemap...</p>
        </div>
      )}
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      {!isLoading && !error && (
        <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-[80vh] text-sm">
          {sitemap}
        </pre>
      )}
    </div>
  );
};

export default Sitemap;
