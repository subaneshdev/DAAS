import { industries } from "@/content/growth";
import { GrowthIndex } from "@/components/growth-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Industry Marketing & Distribution | DaaS.media",
  "Explore proposed marketing scopes for restaurants, manufacturing, B2B, food and FMCG. Digital and physical distribution with clear inputs and deliverables.",
  "/industries/",
  {
    ogImage: "/industries/opengraph-image/",
    ogAlt: "Industry Marketing & Distribution — DaaS.media",
  },
);

export default function Page() {
  return (
    <GrowthIndex
      title="Industries"
      headline="Different businesses. Different buying decisions."
      intro="Explore how we would approach each sector. These pages describe service scope and required inputs; they do not claim an established client portfolio. Real estate remains our first specialist focus."
      group="industries"
      pages={industries}
      editorialNote={{
        label: "HOW WE SCOPE ACROSS SECTORS",
        heading:
          "Channel tactics change with ticket size, buying frequency, regulation and who must approve the decision.",
        blocks: [
          {
            title: "Long-consideration & B2B buyers",
            text: "Real estate, industrial manufacturing and B2B services depend on detailed proof: verified project specs, capability statements, clean RFQ routes and disciplined sales handoff rather than impulse clicks.",
          },
          {
            title: "Consumer, dining & retail decisions",
            text: "Restaurants, cafés and food & consumer brands depend on local search accuracy, readable menus or pack information, authentic visual stories and clearly costed physical touchpoints.",
          },
        ],
        links: [
          {
            label: "Inspect real estate distribution",
            href: "/real-estate-marketing/",
          },
          {
            label: "See restaurant demonstration",
            href: "/sample-projects/restaurant-discovery/",
          },
          {
            label: "Download campaign enquiry tracker",
            href: "/resources/enquiry-tracker/",
          },
          { label: "Start with a focused pilot", href: "/pilot/" },
        ],
      }}
    />
  );
}
