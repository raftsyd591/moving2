import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { createWriteStream } from 'fs'; // Not strictly needed if using fs.writeFileSync
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import { glob } from 'glob';
import fs from 'fs';

const execPromise = promisify(exec);
const siteUrl = process.env.VITE_SITE_URL || 'https://www.elitemovers.com.sa';

// Dynamically import articles data
let articlesData = [];
try {
  const articlesModule = await import('../src/data/articles.js');
  articlesData = articlesModule.articles || [];
  if (articlesData.length === 0 && articlesModule.default) {
    articlesData = articlesModule.default || [];
  }
  if (articlesData.length === 0 && articlesModule.articlesFromData) {
    articlesData = articlesModule.articlesFromData || [];
  }
  if (articlesData.length > 0) {
    console.log(`Successfully loaded ${articlesData.length} articles from articles.js`);
  } else {
    console.warn("articles.js loaded, but no articles found in expected exports. Blog posts will be missing.");
  }
} catch (e) {
  console.error("Error loading or processing articles.js for sitemap generation. Blog posts will be missing.", e);
}

async function getLastModifiedDate(filePath) {
  try {
    const { stdout } = await execPromise(`git log -1 --format=%cI "${filePath}"`);
    const gitDate = stdout.trim();
    if (gitDate) return gitDate;
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString();
  } catch (error) {
    console.warn(`Could not get git log for ${filePath}. Using file mtime. Error: ${error.message}`);
    try {
      const stats = fs.statSync(filePath);
      return stats.mtime.toISOString();
    } catch (fsError) {
      console.warn(`Could not get file mtime for ${filePath}. Using current date. Error: ${fsError.message}`);
      return new Date().toISOString();
    }
  }
}

// دالة لتحديد أولوية المقال بناءً على تاريخه وفئته
function getArticlePriority(article) {
  const now = new Date();
  const articleDate = new Date(article.date || article.datePublished);
  const daysDiff = Math.floor((now - articleDate) / (1000 * 60 * 60 * 24));
  
  // أولوية أعلى للمقالات الحديثة
  if (daysDiff <= 30) return 0.9; // مقالات جديدة
  if (daysDiff <= 90) return 0.8; // مقالات حديثة
  if (daysDiff <= 180) return 0.7; // مقالات متوسطة
  return 0.6; // مقالات قديمة
}

// دالة لتحديد تكرار التغيير بناءً على نوع المحتوى
function getChangeFreq(article) {
  const category = article.category?.toLowerCase() || '';
  
  if (category.includes('نصائح') || category.includes('دليل')) {
    return 'monthly'; // الأدلة والنصائح تتغير شهرياً
  }
  if (category.includes('أخبار') || category.includes('تحديث')) {
    return 'weekly'; // الأخبار والتحديثات تتغير أسبوعياً
  }
  return 'monthly'; // افتراضي
}

// إنشاء sitemap فرعي للصور
async function generateImageSitemap(articles) {
  const imageLinks = [];
  
  articles.forEach(article => {
    if (article.image && article.slug) {
      imageLinks.push({
        url: `/blog/${article.slug}`,
        img: {
          url: `${siteUrl}${article.image}`,
          caption: article.title,
          title: article.title,
          geoLocation: 'Riyadh, Saudi Arabia'
        }
      });
    }
  });

  if (imageLinks.length > 0) {
    const imageStream = new SitemapStream({ 
      hostname: siteUrl,
      xmlns: {
        image: true
    }
    });
    
    const imageSitemapContent = await streamToPromise(
      Readable.from(imageLinks).pipe(imageStream)
    ).then(data => data.toString());
    
    fs.writeFileSync('./public/sitemap-images.xml', imageSitemapContent);
    console.log(`✅ Image sitemap generated with ${imageLinks.length} images`);
  }
}

// إنشاء sitemap للأخبار (News Sitemap)
async function generateNewsSitemap(articles) {
  const recentArticles = articles.filter(article => {
    const articleDate = new Date(article.date || article.datePublished);
    const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
    return articleDate >= twoDaysAgo;
  });

  if (recentArticles.length > 0) {
    const newsLinks = recentArticles.map(article => ({
      url: `/blog/${article.slug}`,
      news: {
        publication: {
          name: 'النخبة للنقل',
          language: 'ar'
        },
        genres: 'UserGenerated',
        publication_date: article.date || article.datePublished,
        title: article.title,
        keywords: article.keywords?.join(', ') || article.category
      }
    }));

    const newsStream = new SitemapStream({ 
      hostname: siteUrl,
      xmlns: {
        news: true
      }
    });
    
    const newsSitemapContent = await streamToPromise(
      Readable.from(newsLinks).pipe(newsStream)
    ).then(data => data.toString());
    
    fs.writeFileSync('./public/sitemap-news.xml', newsSitemapContent);
    console.log(`✅ News sitemap generated with ${newsLinks.length} recent articles`);
  }
}

// إنشاء robots.txt محسن
function generateRobotsTxt() {
  const robotsContent = `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${siteUrl}/sitemap.xml
Sitemap: ${siteUrl}/sitemap-images.xml
Sitemap: ${siteUrl}/sitemap-news.xml

# Optimize crawling
Crawl-delay: 1

# Block admin areas (if any)
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important files
Allow: /images/
Allow: /css/
Allow: /js/

# Block search parameters
Disallow: /*?*
Allow: /*?utm_*

# Block duplicate content
Disallow: /print/
Disallow: /mobile/

# Special instructions for search engines
User-agent: Googlebot
Crawl-delay: 1

User-agent: Bingbot
Crawl-delay: 2

User-agent: Slurp
Crawl-delay: 2

# Block problematic bots
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /
`;

  fs.writeFileSync('./public/robots.txt', robotsContent);
  console.log('✅ robots.txt generated successfully');
}

async function generateSitemap() {
  try {
    const links = [];
    const processedPaths = new Set();

    // Define static routes from router.jsx (excluding dynamic ones and test page)
    const staticRoutes = [
      { 
        path: '/', 
        priority: 1.0, 
        changefreq: 'daily', 
        file: 'src/pages/HomePage.jsx',
        alternates: [
          { lang: 'en', href: '/en/' },
          { lang: 'ar', href: '/' }
        ]
      },
      { 
        path: '/services', 
        priority: 0.9, 
        changefreq: 'weekly', 
        file: 'src/pages/ServicesPage.jsx',
        alternates: [
          { lang: 'en', href: '/en/services' },
          { lang: 'ar', href: '/services' }
        ]
      },
      { 
        path: '/about', 
        priority: 0.8, 
        changefreq: 'monthly', 
        file: 'src/pages/AboutPage.jsx' 
      },
      { 
        path: '/contact', 
        priority: 0.8, 
        changefreq: 'monthly', 
        file: 'src/pages/ContactPage.jsx' 
      },
      { 
        path: '/blog', 
        priority: 0.9, 
        changefreq: 'daily', 
        file: 'src/pages/blog/index.jsx' 
      },
      { 
        path: '/terms', 
        priority: 0.5, 
        changefreq: 'yearly', 
        file: 'src/pages/TermsPage.jsx' 
      },
      { 
        path: '/privacy', 
        priority: 0.5, 
        changefreq: 'yearly', 
        file: 'src/pages/PrivacyPage.jsx' 
      }
    ];

    for (const route of staticRoutes) {
      if (processedPaths.has(route.path)) continue;
      
      let lastmod;
      if (fs.existsSync(route.file)) {
        lastmod = await getLastModifiedDate(route.file);
      } else {
        console.warn(`File ${route.file} for route ${route.path} not found. Using current date for lastmod.`);
        lastmod = new Date().toISOString();
      }
      
      const linkData = {
        url: route.path,
        changefreq: route.changefreq,
        priority: route.priority,
        lastmod,
      };

      // إضافة اللغات البديلة إذا كانت متوفرة
      if (route.alternates) {
        linkData.links = route.alternates;
      }

      links.push(linkData);
      processedPaths.add(route.path);
    }

    // Add blog post URLs from articlesData
    if (articlesData && articlesData.length > 0) {
      for (const article of articlesData) {
        if (article.slug) {
          const routePath = `/blog/${article.slug}`;
          if (processedPaths.has(routePath)) continue;

          links.push({
            url: routePath,
            changefreq: getChangeFreq(article),
            priority: getArticlePriority(article),
            lastmod: article.dateModified || article.date || new Date().toISOString(),
            img: article.image ? [{
              url: `${siteUrl}${article.image}`,
              caption: article.title,
              title: article.title
            }] : undefined
          });
          processedPaths.add(routePath);
        }
      }
    } else {
      console.warn('No articlesData found or loaded, blog post URLs will not be added to sitemap.');
    }

    // Create sitemap
    const stream = new SitemapStream({ 
      hostname: siteUrl,
      xmlns: {
        image: true,
        xhtml: true
      }
    });
    
    const sitemapContent = await streamToPromise(Readable.from(links).pipe(stream))
      .then(data => data.toString())
      .catch(err => {
        console.error("Error during sitemap stream to promise:", err);
        throw err; // Rethrow to be caught by outer try-catch
      });
    
    fs.writeFileSync('./public/sitemap.xml', sitemapContent);
    
    // إنشاء sitemaps إضافية
    await generateImageSitemap(articlesData);
    await generateNewsSitemap(articlesData);
    
    // إنشاء robots.txt
    generateRobotsTxt();

    // إنشاء sitemap index
    const sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteUrl}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${siteUrl}/sitemap-images.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${siteUrl}/sitemap-news.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;

    fs.writeFileSync('./public/sitemap-index.xml', sitemapIndexContent);
    
    console.log('✅ Sitemap generated successfully at public/sitemap.xml');
    console.log('✅ Sitemap index generated at public/sitemap-index.xml');
    console.log(`📄 Generated ${links.length} URLs:`);
    links.forEach(l => console.log(`  - ${siteUrl}${l.url} (lastmod: ${l.lastmod}, priority: ${l.priority}, changefreq: ${l.changefreq})`));
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();