import { test } from "node:test";
import assert from "node:assert/strict";
import { enquirySchema, enquiryMailto, enquiryText } from "../src/lib/enquiry";
const valid = {
  name: "Sample Visitor",
  email: "sample@example.com",
  company: "Sample & Co",
  phone: "",
  service: "real-estate",
  location: "Chennai",
  budget: "To discuss",
  message: "We want to discuss a property launch campaign.",
  consent: true,
  website: "",
};
test("validates and normalises an enquiry", () => {
  const data = enquirySchema.parse({ ...valid, name: "  Sample Visitor  " });
  assert.equal(data.name, "Sample Visitor");
  assert.match(enquiryText(data), /Target market: Chennai/);
});
test("rejects whitespace names, invalid email, short goals and missing consent", () => {
  for (const change of [
    { name: "  " },
    { company: " " },
    { email: "not-an-email" },
    { message: "Short" },
    { consent: false },
    { message: "x".repeat(4001) },
  ])
    assert.equal(
      enquirySchema.safeParse({ ...valid, ...change }).success,
      false,
    );
});
test("rejects honeypot content", () =>
  assert.equal(
    enquirySchema.safeParse({ ...valid, website: "https://spam.invalid" })
      .success,
    false,
  ));
test("encodes the email draft so input cannot inject recipients or query parameters", () => {
  const data = enquirySchema.parse({
    ...valid,
    company: "A & bcc=other@example.com",
    message: "Please discuss our campaign. &subject=injected\nSecond line.",
  });
  const url = new URL(enquiryMailto(data, "contact@daas.media"));
  assert.equal(url.pathname, "contact@daas.media");
  assert.deepEqual([...url.searchParams.keys()], ["subject", "body"]);
  assert.equal(
    url.searchParams.get("subject"),
    "Distribution enquiry — A & bcc=other@example.com",
  );
  assert.match(url.searchParams.get("body")!, /Second line/);
});
