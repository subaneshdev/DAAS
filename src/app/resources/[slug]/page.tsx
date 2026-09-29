import { notFound } from "next/navigation";
import { resources } from "@/content/growth";
import { GrowthDetail } from "@/components/growth-page";
import { pageMetadata } from "@/lib/seo";
export const dynamicParams = false;
export function generateStaticParams() {
  return resources.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = resources.find((p) => p.slug === slug);
  if (!page) notFound();
  return pageMetadata(page.title, page.description, "/resources/" + slug + "/");
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = resources.find((p) => p.slug === slug);
  if (!page) notFound();
  return <GrowthDetail page={page} group="resources" label="Resources" />;
}
