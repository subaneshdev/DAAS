export const site = {
  name: "DaaS.media",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://daas.media").replace(
    /\/$/,
    "",
  ),
  email: "contact@daas.media",
  cta: "Discuss your distribution goals",
  description:
    "Digital campaigns, content and distribution systems for businesses in Chennai. Real estate is our first specialist focus.",
  // Unknown phone, street address, legal entity, office hours and social profiles
  // are deliberately omitted from public content and structured data.
};
export const isPreview =
  process.env.PREVIEW_NOINDEX === "1" || process.env.VERCEL_ENV === "preview";
