/**
 * SEO Configuration for Nila Ventures
 * Centralized configuration for all SEO-related metadata
 */

export const siteConfig = {
  title: "Nila Ventures - Premium Web Design & Digital Solutions",
  description: "Transform your business with innovative web design and digital solutions. Expert services in web development, e-commerce, and digital marketing.",
  url: "https://nila-ventures.vercel.app",
  domain: "nila-ventures.vercel.app",
  ogImage: "https://nila-ventures.vercel.app/og-image.png",
  twitterHandle: "@nilaventures",
  locale: "en_US",
  type: "website",
}

export const pages = {
  home: {
    title: "Nila Ventures - Premium Web Design & Digital Solutions",
    description: "Transform your business with innovative web design and digital solutions. Based in Kerala, serving businesses globally.",
    path: "/",
    keywords: "web design, digital solutions, web development, Kerala",
  },
  services: {
    title: "Our Services | Nila Ventures",
    description: "Explore our comprehensive digital solutions including web design, web development, e-commerce, and digital marketing.",
    path: "/services",
    keywords: "web design services, web development, e-commerce, digital marketing",
  },
  portfolio: {
    title: "Portfolio | Nila Ventures",
    description: "View our latest projects and case studies showcasing successful digital transformations.",
    path: "/portfolio",
    keywords: "portfolio, case studies, projects, web design examples",
  },
  pricing: {
    title: "Pricing | Nila Ventures",
    description: "Transparent, flexible pricing plans for all your digital needs. Get a quote today.",
    path: "/pricing",
    keywords: "pricing, plans, web design cost, affordable digital solutions",
  },
  process: {
    title: "Our Process | Nila Ventures",
    description: "Learn how we approach digital projects to deliver exceptional results.",
    path: "/process",
    keywords: "process, methodology, workflow, how we work",
  },
  contact: {
    title: "Contact Us | Nila Ventures",
    description: "Get in touch with our team. Let's discuss how we can transform your business.",
    path: "/contact",
    keywords: "contact, get in touch, support, inquiry",
  },
}

export const schemaMarkup = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nila Ventures",
    "url": "https://nilaventures.com",
    "logo": "https://nilaventures.com/logo.png",
    "description": "Premium Web Design & Digital Solutions for Growing Businesses",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kochi",
      "addressLocality": "Kochi",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.facebook.com/nilaventures",
      "https://www.twitter.com/nilaventures",
      "https://www.linkedin.com/company/nilaventures",
      "https://www.instagram.com/nilaventures"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "hello@nilaventures.com"
    }
  },
  service: (title, description) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Nila Ventures",
      "url": "https://nilaventures.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  }),
  breadcrumb: (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://nilaventures.com${item.url}`
    }))
  }),
}

export const generatePageMetaTags = (pageKey) => {
  const page = pages[pageKey] || pages.home
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    canonical: siteConfig.url + page.path,
    og: {
      title: page.title,
      description: page.description,
      url: siteConfig.url + page.path,
      image: siteConfig.ogImage,
      type: siteConfig.type,
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      image: siteConfig.ogImage,
      creator: siteConfig.twitterHandle,
    }
  }
}

export default {
  siteConfig,
  pages,
  schemaMarkup,
  generatePageMetaTags,
}
