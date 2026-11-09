import { projects } from "@/content/growth";
import { GrowthIndex } from "@/components/growth-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Marketing Demonstration Projects | DaaS.media",
  "Explore clearly labelled fictional property and restaurant marketing projects. See how DaaS.media plans content, distribution and enquiry journeys.",
  "/sample-projects/",
  {
    ogImage: "/sample-projects/opengraph-image/",
    ogAlt: "Marketing Demonstration Projects — DaaS.media",
  },
);

export default function Page() {
  return (
    <GrowthIndex
      title="Sample projects"
      headline="See the thinking. Inspect the work."
      intro="These are fictional demonstration projects, not client campaigns. They show proposed decisions, sample creative and measurement plans. There are no invented testimonials, audience sizes or performance results."
      group="sample-projects"
      pages={projects}
      editorialNote={{
        label: "WHY WE PUBLISH DEMONSTRATIONS",
        heading:
          "While building our portfolio, we show our actual briefing structure, creative reasoning and tracking boundaries in full.",
        blocks: [
          {
            title: "No fabricated case studies",
            text: "Every demonstration explicitly notes where a real client would supply verified project facts, pricing, inventory, permissions and regulatory disclosures before anything goes live.",
          },
          {
            title: "Inspectable campaign discipline",
            text: "Each exercise pairs buyer questions, landing-page copy direction, channel sequencing and a clear measurement boundary separating enquiries from downstream sales stages.",
          },
        ],
        links: [
          {
            label: "Download the property briefing template",
            href: "/resources/property-launch-brief/",
          },
          {
            label: "Download the restaurant discovery checklist",
            href: "/resources/restaurant-discovery-checklist/",
          },
          {
            label: "Download the enquiry tracker CSV",
            href: "/resources/enquiry-tracker/",
          },
          { label: "Propose a scoped pilot", href: "/pilot/" },
        ],
      }}
    />
  );
}
