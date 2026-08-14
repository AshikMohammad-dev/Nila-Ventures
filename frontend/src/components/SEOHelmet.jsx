import React from 'react'
import { Helmet } from 'react-helmet-async'
import { generatePageMetaTags, schemaMarkup } from '../utils/seoConfig'

/**
 * SEOHelmet Component
 * Manages all meta tags and SEO-related head elements
 */
export default function SEOHelmet({ 
  pageKey = 'home', 
  title, 
  description, 
  keywords,
  canonical,
  schemaData = null,
  children 
}) {
  // Use custom meta tags if provided, otherwise use page config
  const metaTags = title || description ? {
    title: title || 'Nila Ventures',
    description: description || '',
    keywords: keywords || '',
    canonical: canonical || 'https://nilaventures.com/',
  } : generatePageMetaTags(pageKey)

  return (
    <Helmet>
      <title>{metaTags.title}</title>
      <meta name="description" content={metaTags.description} />
      {metaTags.keywords && <meta name="keywords" content={metaTags.keywords} />}
      <link rel="canonical" href={metaTags.canonical} />
      
      {/* Open Graph */}
      <meta property="og:type" content={metaTags.og?.type || 'website'} />
      <meta property="og:url" content={metaTags.og?.url || metaTags.canonical} />
      <meta property="og:title" content={metaTags.og?.title || metaTags.title} />
      <meta property="og:description" content={metaTags.og?.description || metaTags.description} />
      <meta property="og:image" content={metaTags.og?.image || 'https://nilaventures.com/og-image.png'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={metaTags.twitter?.card || 'summary_large_image'} />
      <meta name="twitter:title" content={metaTags.twitter?.title || metaTags.title} />
      <meta name="twitter:description" content={metaTags.twitter?.description || metaTags.description} />
      <meta name="twitter:image" content={metaTags.twitter?.image || 'https://nilaventures.com/og-image.png'} />
      <meta name="twitter:creator" content={metaTags.twitter?.creator || '@nilaventures'} />
      
      {/* Structured Data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
      
      {children}
    </Helmet>
  )
}
