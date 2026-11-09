import type { NextConfig } from "next";

const config: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "www.daas.media" }],
        destination: "https://daas.media/",
        permanent: true,
      },
      {
        source: "/:filePath(.*\\.[^/]+)",
        has: [{ type: "host", value: "www.daas.media" }],
        destination: "https://daas.media/:filePath",
        permanent: true,
      },
      {
        source: "/:path+",
        has: [{ type: "host", value: "www.daas.media" }],
        destination: "https://daas.media/:path+/",
        permanent: true,
      },
      {
        source: "/sitemap/",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/sitemap",
        destination: "/sitemap.xml",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default config;
