import type { Metadata } from "next";
import { site, isPreview } from "@/content/site";

export type PageMetadataOptions = {
  noIndex?: boolean;
  ogImage?: string;
  ogAlt?: string;
};

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  options: PageMetadataOptions = {},
): Metadata {
  const url = `${site.url}${path}`;
  const ogPath = options.ogImage || "/opengraph-image/";
  const ogImageUrl = ogPath.startsWith("http")
    ? ogPath
    : `${site.url}${ogPath.startsWith("/") ? ogPath : `/${ogPath}`}`;
  const ogAlt =
    options.ogAlt ||
    "DaaS.media — Distribution as a Service. Digital, physical and connected.";

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: site.name,
      title,
      description,
      url,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
    robots:
      isPreview || options.noIndex
        ? { index: false, follow: !isPreview }
        : { index: true, follow: true },
  };
}

export const organization = {
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  legalName: "DaaS.media",
  alternateName: [
    "DaaS media",
    "DaaS Media Chennai",
    "Distribution as a Service",
  ],
  description:
    "Digital marketing, content and distribution agency for businesses in Chennai and across India.",
  url: site.url,
  email: site.email,
  logo: `${site.url}/brand-logo.svg`,
  publishingPrinciples: `${site.url}/about/`,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: site.email,
    url: `${site.url}/contact/`,
    areaServed: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Chennai" },
    { "@type": "Country", name: "India" },
  ],
  knowsAbout: [
    "Digital Marketing",
    "Real Estate Marketing",
    "Content Distribution",
    "Performance Marketing",
    "Search Engine Optimization",
    "Lead Generation",
  ],
};

export function breadcrumbData(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function webPageData({
  type = "WebPage",
  name,
  description,
  path,
}: {
  type?: "WebPage" | "CollectionPage" | "AboutPage" | "ContactPage";
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${site.url}${path}#webpage`,
    url: `${site.url}${path}`,
    name,
    description,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function collectionPageData({
  name,
  description,
  path,
  items,
}: {
  name: string;
  description: string;
  path: string;
  items: { name: string; path: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${site.url}${path}#webpage`,
    url: `${site.url}${path}`,
    name,
    description,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${site.url}/#website` },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: `${site.url}${item.path}`,
      })),
    },
  };
}

export function guidePageData({
  type = "TechArticle",
  name,
  description,
  path,
  isFree,
}: {
  type?: "TechArticle" | "CreativeWork";
  name: string;
  description: string;
  path: string;
  isFree?: boolean;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${site.url}${path}#article`,
    url: `${site.url}${path}`,
    headline: name,
    name,
    description,
    inLanguage: "en-IN",
    ...(isFree ? { isAccessibleForFree: true } : {}),
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: { "@id": `${site.url}${path}` },
  };
}

export function serviceData(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${site.url}${path}`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "City", name: "Chennai" },
    ],
  };
}

export function aboutPageData() {
  return webPageData({
    type: "AboutPage",
    name: "About DaaS.media",
    description:
      "Who we are, our distribution methodology, Chennai focus and remote India delivery.",
    path: "/about/",
  });
}

export function contactPageData() {
  return webPageData({
    type: "ContactPage",
    name: "Contact DaaS.media",
    description:
      "Discuss your distribution goals, digital marketing campaigns and content requirements with DaaS.media.",
    path: "/contact/",
  });
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
