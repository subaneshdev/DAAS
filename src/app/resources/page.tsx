import { resources } from "@/content/growth";
import { GrowthIndex } from "@/components/growth-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Free Marketing Planning Resources | DaaS.media",
  "Download practical property briefing, restaurant discovery and enquiry tracking templates from DaaS.media. Useful planning resources with no signup required.",
  "/resources/",
  {
    ogImage: "/resources/opengraph-image/",
    ogAlt: "Free Marketing Planning Resources — DaaS.media",
  },
);

export default function Page() {
  return (
    <GrowthIndex
      title="Resources"
      headline="Useful tools. Open to everyone."
      intro="Start with a better brief, a clearer customer journey and consistent enquiry records. These resources are free to download without submitting your email. They are practical worksheets, not promises of campaign performance."
      group="resources"
      pages={resources}
      editorialNote={{
        label: "HOW TO USE THESE WORKSHEETS",
        heading:
          "Every file works standalone in Markdown or spreadsheet software with no account creation or tracking gate.",
        blocks: [
          {
            title: "Before spending on creative or ads",
            text: "Use the Property Launch Briefing Template or Restaurant Discovery Checklist to confirm verified facts, owners, disclosures and basic customer actions before production begins.",
          },
          {
            title: "Measuring real conversations, not vanity clicks",
            text: "Use the Campaign Enquiry Tracker CSV to separate genuine enquiries from duplicates and record consistent qualification stages across Organic Search, Social, Referral and Offline channels.",
          },
        ],
        links: [
          {
            label: "See the property launch demonstration",
            href: "/sample-projects/property-launch/",
          },
          {
            label: "See the restaurant discovery demonstration",
            href: "/sample-projects/restaurant-discovery/",
          },
          {
            label: "Explore SEO & organic growth",
            href: "/services/seo/",
          },
          {
            label: "Explore marketing analytics",
            href: "/services/analytics/",
          },
        ],
      }}
    />
  );
}
