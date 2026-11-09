import { test } from "node:test";
import assert from "node:assert/strict";
import { services } from "../src/content/services";
import { markets, separateMarketResearch } from "../src/content/markets";
import {
  serializeJsonLd,
  pageMetadata,
  collectionPageData,
  guidePageData,
} from "../src/lib/seo";

test("services have distinct SEO titles, descriptions, valid slugs and related destinations", () => {
  assert.equal(services.length, 19);
  for (const key of ["slug", "title", "description"] as const)
    assert.equal(new Set(services.map((s) => s[key])).size, services.length);
  for (const s of services) {
    assert.match(s.slug, /^[a-z]+(?:-[a-z]+)*$/);
    assert.ok(s.description.length >= 90 && s.description.length <= 180);
    for (const related of s.related)
      assert.ok(
        services.some((x) => x.slug === related),
        `${s.slug} links to ${related}`,
      );
    assert.ok(s.faqs.length >= 3);
  }
});

test("all requested research markets are retained without duplicate city slugs", () => {
  assert.equal(markets.length, 23);
  assert.equal(new Set(markets.map((m) => m.slug)).size, 23);
  assert.deepEqual(separateMarketResearch, ["mohali", "zirakpur"]);
});

test("JSON-LD escapes script-breaking text without altering parsed content", () => {
  const data = { name: "</script><script>alert(1)</script>" };
  const encoded = serializeJsonLd(data);
  assert.ok(!encoded.includes("<"));
  assert.deepEqual(JSON.parse(encoded), data);
});

test("pageMetadata uses trailing-slash OG images cleanly and supports noIndex", () => {
  const meta = pageMetadata("Test Title", "Test description", "/test/");
  const ogImages = meta.openGraph?.images as { url: string }[];
  assert.ok(ogImages[0].url.endsWith("/opengraph-image/"));
  assert.deepEqual(meta.robots, { index: true, follow: true });

  const privateMeta = pageMetadata("Privacy", "Privacy policy", "/privacy/", {
    noIndex: true,
  });
  assert.deepEqual(privateMeta.robots, { index: false, follow: true });
});

test("collectionPageData and guidePageData generate valid schema shapes", () => {
  const collection = collectionPageData({
    name: "Services",
    description: "All services",
    path: "/services/",
    items: [{ name: "SEO", path: "/services/seo/" }],
  });
  assert.equal(collection["@type"], "CollectionPage");
  assert.equal(collection.mainEntity.numberOfItems, 1);

  const guide = guidePageData({
    type: "TechArticle",
    name: "Guide",
    description: "Guide desc",
    path: "/resources/property-launch-brief/",
    isFree: true,
  });
  assert.equal(guide["@type"], "TechArticle");
  assert.equal(guide.isAccessibleForFree, true);
});
