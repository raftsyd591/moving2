import React from 'react';
import { seoConfig } from '../../config/seo';
import { articles } from '../../data/articles';

/**
 * مكون لإنشاء Sitemap ديناميكي
 */
const SitemapGenerator = () => {
  const { siteUrl } = seoConfig;

  // الصفحات الثابتة
  const staticPages = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/services', priority: 0.9, changefreq: 'weekly' },
    { url: '/about', priority: 0.8, changefreq: 'monthly' },
    { url: '/contact', priority: 0.8, changefreq: 'monthly' },
    { url: '/blog', priority: 0.9, changefreq: 'daily' },
    { url: '/terms', priority: 0.5, changefreq: 'yearly' },
    { url: '/privacy', priority: 0.5, changefreq: 'yearly' }
  ];

  // صفحات المقالات
  const articlePages = articles.map(article => ({
    url: `/blog/${article.slug}`,
    priority: 0.8,
    changefreq: 'weekly',
    lastmod: article.dateModified || article.date
  }));

  // جميع الصفحات
  const allPages = [...staticPages, ...articlePages];

  // إنشاء XML للـ sitemap
  const generateSitemapXML = () => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPages.map(page => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${page.lastmod || new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    ${page.image ? `<image:image>
      <image:loc>${siteUrl}${page.image}</image:loc>
      <image:caption>${page.title || 'صورة'}</image:caption>
    </image:image>` : ''}
  </url>`).join('\n')}
</urlset>`;
    return xml;
  };

  // إنشاء robots.txt
  const generateRobotsTxt = () => {
    return `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${siteUrl}/sitemap.xml

# Optimize crawling
Crawl-delay: 1

# Block admin areas
Disallow: /admin/
Disallow: /api/

# Allow important files
Allow: /images/
Allow: /css/
Allow: /js/

# Block search parameters
Disallow: /*?*
Allow: /*?utm_*`;
  };

  // تحميل الـ sitemap
  const downloadSitemap = () => {
    const xml = generateSitemapXML();
    const blob = new Blob([xml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // تحميل robots.txt
  const downloadRobots = () => {
    const txt = generateRobotsTxt();
    const blob = new Blob([txt], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'robots.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">إدارة Sitemap</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded">
          <h4 className="font-semibold mb-2">إحصائيات الموقع</h4>
          <p>إجمالي الصفحات: {allPages.length}</p>
          <p>الصفحات الثابتة: {staticPages.length}</p>
          <p>صفحات المقالات: {articlePages.length}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded">
          <h4 className="font-semibold mb-2">آخر تحديث</h4>
          <p>{new Date().toLocaleDateString('ar-SA')}</p>
          <p className="text-sm text-gray-600">تم إنشاؤه تلقائياً</p>
        </div>
      </div>

      <div className="flex space-x-4 rtl:space-x-reverse">
        <button
          onClick={downloadSitemap}
          className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded transition-colors"
        >
          تحميل Sitemap.xml
        </button>
        
        <button
          onClick={downloadRobots}
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition-colors"
        >
          تحميل Robots.txt
        </button>
      </div>

      {/* معاينة الـ sitemap */}
      <details className="mt-6">
        <summary className="cursor-pointer font-semibold">معاينة Sitemap</summary>
        <pre className="bg-gray-100 p-4 mt-2 text-xs overflow-auto max-h-64 rounded">
          {generateSitemapXML()}
        </pre>
      </details>
    </div>
  );
};

export default SitemapGenerator; 