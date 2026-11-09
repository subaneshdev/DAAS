import type { Metadata, Viewport } from "next";
import { Header, Footer } from "@/components/shell";
import { Navigation } from "@/components/navigation";
import { StructuredData } from "@/components/structured-data";
import { organization } from "@/lib/seo";
import { site } from "@/content/site";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "DaaS.media — Distribution as a Service",
    template: "%s | DaaS.media",
  },
  description: site.description,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
  },
};
export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body id="top">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@graph": [
              organization,
              {
                "@type": "WebSite",
                "@id": `${site.url}/#website`,
                url: site.url,
                name: site.name,
                publisher: { "@id": organization["@id"] },
                inLanguage: "en-IN",
              },
            ],
          }}
        />
        {children}
        <Footer />
        <Navigation />
      </body>
    </html>
  );
}
