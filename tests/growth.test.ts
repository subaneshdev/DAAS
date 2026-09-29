import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import {
  industries,
  projects,
  resources,
  growthPaths,
} from "../src/content/growth";
import { services } from "../src/content/services";
import { enquirySchema, enquiryText } from "../src/lib/enquiry";
test("growth content has unique routes, metadata and valid related links", () => {
  const pages = [...industries, ...projects, ...resources];
  assert.equal(growthPaths.length, 15);
  assert.equal(new Set(growthPaths).size, 15);
  for (const key of ["title", "description"])
    assert.equal(
      new Set(pages.map((p) => p[key as "title" | "description"])).size,
      pages.length,
    );
  const paths = new Set([
    ...growthPaths,
    "/real-estate-marketing/",
    ...services.map((s) => `/services/${s.slug}/`),
  ]);
  for (const p of pages) {
    assert.ok(p.sections.length >= 5);
    assert.ok(p.questions.length >= 2);
    for (const l of p.links) assert.ok(paths.has(l.href), l.href);
  }
});
test("demonstrations cannot lose their explicit non-client label", () => {
  for (const p of projects) {
    assert.match(p.eyebrow, /DEMONSTRATION PROJECT.*NOT CLIENT WORK/);
    assert.match(p.intro, /fictional/i);
    assert.ok(
      p.sections.some((s) => s.title === "Measurement plan, not results"),
    );
  }
});
test("all resources have nonempty downloadable files and the tracker has no fictional leads", () => {
  for (const r of resources) {
    assert.ok(r.download);
    const path = `public${r.download!.href}`;
    assert.ok(existsSync(path));
    assert.ok(readFileSync(path, "utf8").length > 100);
  }
  assert.equal(
    readFileSync("public/resources/enquiry-tracker.csv", "utf8")
      .trim()
      .split("\n").length,
    1,
  );
});
test("self-reported source is optional, bounded and included in enquiry handoff", () => {
  const base = {
    name: "Tester",
    email: "test@example.com",
    company: "Test business",
    service: "pilot",
    message: "A genuine description of distribution goals.",
    consent: true,
  };
  const data = enquirySchema.parse({ ...base, discovery: " Referral " });
  assert.equal(data.discovery, "Referral");
  assert.match(enquiryText(data), /How I found you: Referral/);
  assert.equal(enquirySchema.parse(base).discovery, "");
  assert.equal(
    enquirySchema.safeParse({ ...base, discovery: "a".repeat(201) }).success,
    false,
  );
});
