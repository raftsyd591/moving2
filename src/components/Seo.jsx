import React from 'react';
import { Helmet } from 'react-helmet-async';

const Seo = ({
  title,
  description,
  image,
  path,
  type = 'website',
  article = null,
  product = null,
  teamMembers = null,
  officeLocations = null,
  noIndex = false,
  keywords = [],
  author = null,
  publishedTime = null,
  modifiedTime = null,
  category = null,
  tags = [],
  lang = 'ar',
  alternateLanguages = [],
  breadcrumbs = [],
  faqData = null,
  reviewData = null,
  priceRange = null,
  serviceArea = null,
}) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://www.elitemovers.com.sa';
  const defaultTitle = 'النخبة للنقل | خدمات نقل العفش المتميزة في المملكة العربية السعودية';
  const defaultDescription = 'شركة النخبة للنقل - المزود الرائد لخدمات نقل العفش الاحترافية في جميع أنحاء المملكة العربية السعودية. حلول متكاملة لنقل آمن وفعال لمنزلك أو مكتبك.';
  const defaultImage = `/images/social-preview.jpg`;
  const siteName = 'النخبة للنقل';
  const defaultKeywords = [
    'نقل عفش',
    'نقل أثاث',
    'شركة نقل',
    'السعودية',
    'الرياض',
    'جدة',
    'الدمام',
    'خدمات نقل',
    'نقل منزلي',
    'نقل مكتبي'
  ];

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${path || ''}`,
    type: type || 'website',
    keywords: [...defaultKeywords, ...keywords].slice(0, 15), // حد أقصى 15 كلمة مفتاحية
  };

  // تحسين العنوان والوصف
  const optimizedTitle = seo.title.length > 60 ? seo.title.substring(0, 57) + '...' : seo.title;
  const optimizedDescription = seo.description.length > 160 ? seo.description.substring(0, 157) + '...' : seo.description;

  let structuredData = [];

  // Schema للموقع الرئيسي
  if (type === 'website' && path === '/') {
    structuredData.push(
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        'url': siteUrl,
        'name': siteName,
        'description': defaultDescription,
        'inLanguage': 'ar-SA',
        'potentialAction': {
          '@type': 'SearchAction',
          'target': `${siteUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'MovingCompany',
        '@id': `${siteUrl}/#organization`,
        'name': siteName,
        'url': siteUrl,
        'logo': {
          '@type': 'ImageObject',
          'url': `${siteUrl}/images/logo.png`,
          'width': 300,
          'height': 100
        },
        'image': `${siteUrl}/images/company-building.jpg`,
        'description': defaultDescription,
        'founder': {
          '@type': 'Person',
          'name': 'محمد العلي'
        },
        'foundingDate': '2015',
        'numberOfEmployees': '50-100',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'شارع الملك فهد',
          'addressLocality': 'الرياض',
          'addressRegion': 'الرياض',
          'postalCode': '11564',
          'addressCountry': 'SA'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '24.7136',
          'longitude': '46.6753'
        },
        'contactPoint': [
          {
            '@type': 'ContactPoint',
            'telephone': '+966-55-5071769',
            'contactType': 'customer service',
            'areaServed': 'SA',
            'availableLanguage': ['Arabic', 'English'],
            'hoursAvailable': {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
              'opens': '08:00',
              'closes': '20:00'
            }
          },
          {
            '@type': 'ContactPoint',
            'telephone': '+966-55-5071769',
            'contactType': 'sales',
            'areaServed': 'SA',
            'availableLanguage': 'Arabic'
          }
        ],
        'sameAs': [
          'https://www.facebook.com/EliteMoversSA',
          'https://twitter.com/EliteMoversSA',
          'https://www.instagram.com/elitemovers_sa',
          'https://www.linkedin.com/company/elite-movers-sa'
        ],
        'serviceArea': {
          '@type': 'Country',
          'name': 'Saudi Arabia'
        },
        'areaServed': [
          {
            '@type': 'City',
            'name': 'الرياض'
          },
          {
            '@type': 'City',
            'name': 'جدة'
          },
          {
            '@type': 'City',
            'name': 'الدمام'
          },
          {
            '@type': 'City',
            'name': 'مكة المكرمة'
          },
          {
            '@type': 'City',
            'name': 'المدينة المنورة'
          }
        ],
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'خدمات النقل',
          'itemListElement': [
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'نقل الأثاث المنزلي',
                'description': 'خدمة نقل الأثاث المنزلي الاحترافية'
              }
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'نقل المكاتب',
                'description': 'خدمة نقل المكاتب والشركات'
              }
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'التغليف والتعبئة',
                'description': 'خدمة التغليف الاحترافية للأثاث'
              }
            }
          ]
        },
        'priceRange': priceRange || '$$',
        'aggregateRating': reviewData ? {
          '@type': 'AggregateRating',
          'ratingValue': reviewData.averageRating,
          'reviewCount': reviewData.reviewCount,
          'bestRating': '5',
          'worstRating': '1'
        } : undefined
      }
    );
  }

  // Schema للمقالات
  if (type === 'article' && article) {
    structuredData.push({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': seo.url,
      'url': seo.url,
      'headline': article.title,
      'image': {
        '@type': 'ImageObject',
        'url': `${siteUrl}${article.image}`,
        'width': 1200,
        'height': 630
      },
      'datePublished': article.datePublished || article.date,
      'dateModified': article.dateModified || article.datePublished || article.date,
      'author': {
        '@type': 'Person',
        'name': article.author?.name || article.author,
        'url': article.author?.url || `${siteUrl}/author/${(article.author?.name || article.author).toLowerCase().replace(/\s+/g, '-')}`
      },
      'publisher': {
        '@type': 'Organization',
        'name': siteName,
        'logo': {
          '@type': 'ImageObject',
          'url': `${siteUrl}/images/logo.png`,
          'width': 300,
          'height': 100
        }
      },
      'description': article.excerpt || article.description,
      'articleBody': article.content,
      'wordCount': article.wordCount || (article.content ? article.content.split(' ').length : undefined),
      'timeRequired': article.readTime ? `PT${article.readTime}M` : undefined,
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': seo.url
      },
      'articleSection': article.category,
      'keywords': article.keywords || article.tags,
      'inLanguage': 'ar-SA',
      'isPartOf': {
        '@type': 'Blog',
        '@id': `${siteUrl}/blog`,
        'name': 'مدونة النخبة للنقل'
      }
    });
  }

  // Schema لصفحة الخدمات
  if (type === 'services') {
    structuredData.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'خدمات نقل العفش',
      'description': 'خدمات نقل العفش الاحترافية في المملكة العربية السعودية',
      'provider': {
        '@type': 'MovingCompany',
        '@id': `${siteUrl}/#organization`
      },
      'areaServed': {
        '@type': 'Country',
        'name': 'Saudi Arabia'
      },
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'خدمات النقل',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'نقل الأثاث المنزلي',
              'description': 'خدمة نقل الأثاث المنزلي الاحترافية مع ضمان السلامة'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'نقل المكاتب والشركات',
              'description': 'خدمة نقل المكاتب والشركات بأحدث المعدات'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'خدمات التغليف',
              'description': 'خدمة التغليف الاحترافية لحماية الأثاث أثناء النقل'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'خدمات التخزين',
              'description': 'خدمات التخزين الآمن للأثاث والممتلكات'
            }
          }
        ]
      }
    });
  }

  // Schema لصفحة من نحن
  if (type === 'aboutPage' && teamMembers && Array.isArray(teamMembers)) {
    const peopleSchema = teamMembers.map(member => ({
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': member.name,
      'jobTitle': member.position,
      'image': `${siteUrl}${member.image}`,
      'description': member.bio,
      'worksFor': {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`
      }
    }));
    
    structuredData.push(
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        '@id': seo.url,
        'url': seo.url,
        'name': seo.title,
        'description': seo.description,
        'isPartOf': { '@id': `${siteUrl}/#website` },
        'mainEntity': {
          '@type': 'Organization',
          '@id': `${siteUrl}/#organization`
        }
      },
      ...peopleSchema
    );
  }

  // Schema لصفحة الاتصال
  if (type === 'ContactPage') {
    structuredData.push({
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      '@id': seo.url,
      'url': seo.url,
      'name': seo.title,
      'description': seo.description,
      'isPartOf': { '@id': `${siteUrl}/#website` },
      'mainEntity': {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`
      }
    });

    if (officeLocations && Array.isArray(officeLocations)) {
      const locationsSchema = officeLocations.map(office => ({
        '@context': 'https://schema.org',
        '@type': 'MovingCompany',
        'name': `${siteName} - ${office.city}`,
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': office.address,
          'addressLocality': office.city,
          'addressRegion': office.region || office.city,
          'postalCode': office.postalCode,
          'addressCountry': 'SA'
        },
        'telephone': office.phone,
        'email': office.email,
        'url': seo.url,
        'image': `${siteUrl}${office.image || defaultImage}`,
        'geo': office.coordinates ? {
          '@type': 'GeoCoordinates',
          'latitude': office.coordinates.lat,
          'longitude': office.coordinates.lng
        } : undefined,
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
            'opens': '08:00',
            'closes': '20:00'
          }
        ],
        'parentOrganization': {
          '@type': 'Organization',
          '@id': `${siteUrl}/#organization`
        }
      }));
      structuredData.push(...locationsSchema);
    }
  }

  // Schema للأسئلة الشائعة
  if (faqData && Array.isArray(faqData)) {
    structuredData.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqData.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    });
  }

  // Schema للمراجعات
  if (reviewData && reviewData.reviews && Array.isArray(reviewData.reviews)) {
    const reviewsSchema = reviewData.reviews.map(review => ({
      '@context': 'https://schema.org',
      '@type': 'Review',
      'author': {
        '@type': 'Person',
        'name': review.author
      },
      'datePublished': review.date,
      'reviewBody': review.text,
      'reviewRating': {
        '@type': 'Rating',
        'ratingValue': review.rating,
        'bestRating': '5',
        'worstRating': '1'
      },
      'itemReviewed': {
        '@type': 'MovingCompany',
        '@id': `${siteUrl}/#organization`
      }
    }));
    structuredData.push(...reviewsSchema);
  }

  // Schema للتنقل (Breadcrumbs)
  if (breadcrumbs && Array.isArray(breadcrumbs) && breadcrumbs.length > 0) {
    structuredData.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': crumb.name,
        'item': `${siteUrl}${crumb.url}`
      }))
    });
  }

  // Schema افتراضي للصفحات الأخرى
  if (!['website', 'article', 'services', 'aboutPage', 'ContactPage'].includes(type)) {
    structuredData.push({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': seo.url,
      'url': seo.url,
      'name': seo.title,
      'description': seo.description,
      'isPartOf': { '@id': `${siteUrl}/#website` },
      'inLanguage': 'ar-SA',
      'datePublished': publishedTime,
      'dateModified': modifiedTime || publishedTime
    });
  }

  return (
    <Helmet>
      {/* HTML Lang */}
      <html lang={lang === 'ar' ? 'ar-SA' : lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} />

      {/* Basic Meta Tags */}
      <title>{optimizedTitle}</title>
      <meta name="description" content={optimizedDescription} />
      <meta name="keywords" content={seo.keywords.join(', ')} />
      <link rel="canonical" href={seo.url} />

      {/* Author and Publisher */}
      {author && <meta name="author" content={author} />}
      <meta name="publisher" content={siteName} />

      {/* Geographic Tags */}
      <meta name="geo.region" content="SA" />
      <meta name="geo.country" content="Saudi Arabia" />
      <meta name="geo.placename" content="Riyadh, Saudi Arabia" />

      {/* Language and Locale */}
      <meta httpEquiv="content-language" content={lang === 'ar' ? 'ar-SA' : lang} />

      {/* Alternate Languages */}
      {alternateLanguages.map(altLang => (
        <link
          key={altLang.lang}
          rel="alternate"
          hrefLang={altLang.lang}
          href={`${siteUrl}${altLang.path || path}`}
        />
      ))}

      {/* Open Graph Tags */}
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={seo.type === 'article' ? 'article' : 'website'} />
      <meta property="og:title" content={optimizedTitle} />
      <meta property="og:description" content={optimizedDescription} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={optimizedTitle} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="ar_SA" />

      {/* Article-specific Open Graph */}
      {seo.type === 'article' && article && (
        <>
          <meta property="article:published_time" content={article.datePublished || article.date} />
          <meta property="article:modified_time" content={article.dateModified || article.datePublished || article.date} />
          <meta property="article:author" content={article.author?.name || article.author} />
          {article.category && <meta property="article:section" content={article.category} />}
          {article.tags && article.tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
          {article.readTime && <meta property="article:read_time" content={article.readTime} />}
        </>
      )}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={optimizedTitle} />
      <meta name="twitter:description" content={optimizedDescription} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={optimizedTitle} />
      <meta name="twitter:site" content="@EliteMoversSA" />
      {article && article.author?.twitter && (
        <meta name="twitter:creator" content={article.author.twitter} />
      )}

      {/* Additional Meta Tags */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />

      {/* Theme and App Tags */}
      <meta name="theme-color" content="#0284c7" />
      <meta name="msapplication-TileColor" content="#0284c7" />
      <meta name="application-name" content={siteName} />

      {/* Robots Meta Tag */}
      <meta name="robots" content={noIndex ? "noindex, follow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      <meta name="googlebot" content="index, follow" />

      {/* Cache Control */}
      <meta httpEquiv="cache-control" content="public, max-age=31536000" />

      {/* Structured Data */}
      {structuredData.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default Seo;