import { industries } from "@/content/growth";
import { GrowthIndex } from "@/components/growth-page";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Industry Marketing & Distribution | DaaS.media",
  "Explore proposed marketing scopes for restaurants, manufacturing, B2B, food and FMCG. Digital and physical distribution with clear inputs and deliverables.",
  "/industries/",
);
export default function Page() {
  return (
    <GrowthIndex
      title={"Industries"}
      headline={"Different businesses. Different buying decisions."}
      intro={
        "Explore how we would approach each sector. These pages describe service scope and required inputs; they do not claim an established client portfolio. Real estate remains our first specialist focus."
      }
      group="industries"
      pages={industries}
    />
  );
}
