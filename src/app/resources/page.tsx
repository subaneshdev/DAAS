import { resources } from "@/content/growth";
import { GrowthIndex } from "@/components/growth-page";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Free Marketing Planning Resources | DaaS.media",
  "Download practical property briefing, restaurant discovery and enquiry tracking templates from DaaS.media. Useful planning resources with no signup required.",
  "/resources/",
);
export default function Page() {
  return (
    <GrowthIndex
      title={"Resources"}
      headline={"Useful tools. Open to everyone."}
      intro={
        "Start with a better brief, a clearer customer journey and consistent enquiry records. These resources are free to download without submitting your email. They are practical worksheets, not promises of campaign performance."
      }
      group="resources"
      pages={resources}
    />
  );
}
