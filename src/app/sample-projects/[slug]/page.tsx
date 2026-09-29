import { notFound } from "next/navigation";
import { projects } from "@/content/growth";
import { GrowthDetail } from "@/components/growth-page";
import { pageMetadata } from "@/lib/seo";
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = projects.find((p) => p.slug === slug);
  if (!page) notFound();
  return pageMetadata(
    page.title,
    page.description,
    "/sample-projects/" + slug + "/",
  );
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = projects.find((p) => p.slug === slug);
  if (!page) notFound();
  return (
    <GrowthDetail page={page} group="sample-projects" label="Sample projects" />
  );
}
