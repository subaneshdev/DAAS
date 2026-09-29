import { projects } from "@/content/growth";
import { GrowthIndex } from "@/components/growth-page";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Marketing Demonstration Projects | DaaS.media",
  "Explore clearly labelled fictional property and restaurant marketing projects. See how DaaS.media plans content, distribution and enquiry journeys.",
  "/sample-projects/",
);
export default function Page() {
  return (
    <GrowthIndex
      title={"Sample projects"}
      headline={"See the thinking. Inspect the work."}
      intro={
        "These are fictional demonstration projects, not client campaigns. They show proposed decisions, sample creative and measurement plans. There are no invented testimonials, audience sizes or performance results."
      }
      group="sample-projects"
      pages={projects}
    />
  );
}
