import React from 'react';
import { Helmet } from 'react-helmet';

// Structured data for the organization
const structuredData = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "RAC Foundation",
  "alternateName": "RAC",
  "description": "RAC Foundation is a non-profit organization dedicated to empowering communities through education, health, and sustainable development initiatives in Kenya.",
  "url": "https://rac-foundation.org",
  "logo": "https://rac-foundation.org/logo.png",
  "sameAs": [
    "https://www.facebook.com/racfoundation",
    "https://twitter.com/racfoundation",
    "https://www.instagram.com/racfoundation",
    "https://www.linkedin.com/company/rac-foundation"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "P.O Box 123",
    "addressLocality": "Nairobi",
    "addressRegion": "Nairobi",
    "addressCountry": "KE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+254-XXX-XXX-XXX",
    "contactType": "customer service",
    "email": "info@rac-foundation.org"
  },
  "foundingDate": "2020",
  "areaServed": {
    "@type": "Country",
    "name": "Kenya"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Programs",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Education Initiatives",
          "description": "Providing quality education and learning resources to communities"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Health Programs",
          "description": "Improving community health through various healthcare initiatives"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Community Development",
          "description": "Empowering communities through sustainable development projects"
        }
      }
    ]
  }
};

const SEO = ({ 
    title = 'RAC Foundation',
    description = 'RAC Foundation is dedicated to empowering communities through education, health, and sustainable development initiatives in Kenya.',
    keywords = 'RAC Foundation, Kenya NGO, community development, education initiatives, health programs, sustainable development',
    ogImage = '/og-image.jpg',
    ogUrl = 'https://rac-foundation.org',
    canonicalUrl = 'https://rac-foundation.org'
}) => {
    return (
        <Helmet>
            {/* Basic meta tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            
            {/* Canonical URL */}
            <link rel="canonical" href={canonicalUrl} />
            
            {/* Open Graph meta tags */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={ogUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content="RAC Foundation" />
            
            {/* Twitter Card meta tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={ogUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            
            {/* Additional SEO meta tags */}
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content="RAC Foundation" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />
            
            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
            
            {/* Additional meta tags for better SEO */}
            <meta name="geo.region" content="KE" />
            <meta name="geo.placename" content="Nairobi" />
            <meta name="ICBM" content="-1.2921, 36.8219" />
            
            {/* Mobile app meta tags */}
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
            <meta name="apple-mobile-web-app-title" content="RAC Foundation" />
            
            {/* Theme color for browsers */}
            <meta name="theme-color" content="#C28720" />
            
            {/* Preconnect to important domains */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </Helmet>
    );
};

export default SEO; 