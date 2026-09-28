"use client";
import { useState } from "react";
import Link from "next/link";
import { enquirySchema, enquiryText, enquiryMailto } from "@/lib/enquiry";
import { site } from "@/content/site";
type Props = {
  deliveryEnabled: boolean;
  initialService: string;
  services: { slug: string; name: string }[];
};
export function EnquiryForm({
  deliveryEnabled,
  initialService,
  services,
}: Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  function read(form: HTMLFormElement) {
    const raw = new FormData(form);
    const result = enquirySchema.safeParse({
      ...Object.fromEntries(raw),
      consent: raw.get("consent") === "on",
    });
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues)
        next[String(issue.path[0])] = issue.message;
      setErrors(next);
      setStatus("Please check the highlighted fields.");
      form
        .querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)
        ?.focus();
      return null;
    }
    setErrors({});
    return result.data;
  }
  function prepareEmail(form: HTMLFormElement) {
    const data = read(form);
    if (!data) return;
    const url = enquiryMailto(data, site.email);
    if (url.length > 7500) {
      setStatus(
        "This brief is long. Download it and attach it to an email to contact@daas.media. Nothing has been sent.",
      );
      return;
    }
    window.location.href = url;
    setStatus(
      "Your email app should open with a draft. Review it and press Send there. Nothing has been sent by this website. If no app opens, download your brief and email it to contact@daas.media.",
    );
  }
  function download(form: HTMLFormElement) {
    const data = read(form);
    if (!data) return;
    const url = URL.createObjectURL(
      new Blob([enquiryText(data)], { type: "text/plain;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "DaaS-distribution-brief.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus(
      "Brief downloaded. Email it to contact@daas.media when you’re ready. Nothing has been submitted.",
    );
  }
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!deliveryEnabled) {
      prepareEmail(form);
      return;
    }
    const data = read(form);
    if (!data) return;
    setBusy(true);
    setStatus("Sending your enquiry…");
    try {
      const response = await fetch("/api/enquiry/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) {
        if (result.errors) setErrors(result.errors);
        setStatus(
          result.message ||
            "We couldn’t send your enquiry. Please use the email draft or download option below.",
        );
        return;
      }
      setStatus(
        "Your enquiry has been sent to DaaS.media. Thank you for sharing your goals.",
      );
      form.reset();
    } catch {
      setStatus(
        "We couldn’t connect. Your details are still here; use the email draft or download option below.",
      );
    } finally {
      setBusy(false);
    }
  }
  const error = (name: string) =>
    errors[name] ? (
      <span className="field-error" id={`${name}-error`}>
        {errors[name]}
      </span>
    ) : null;
  const attrs = (name: string) => ({
    "aria-invalid": !!errors[name],
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });
  return (
    <form onSubmit={submit} noValidate className="enquiry-form">
      <div className="form-row">
        <label htmlFor="enquiry-name">
          Your name <span>(required)</span>
          <input
            id="enquiry-name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Your name"
            {...attrs("name")}
          />
          {error("name")}
        </label>
        <label htmlFor="enquiry-email">
          Work email <span>(required)</span>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            placeholder="you@yourbusiness.com"
            {...attrs("email")}
          />
          {error("email")}
        </label>
      </div>
      <div className="form-row">
        <label htmlFor="enquiry-company">
          Business name <span>(required)</span>
          <input
            id="enquiry-company"
            name="company"
            autoComplete="organization"
            required
            maxLength={160}
            placeholder="Your company or project"
            {...attrs("company")}
          />
          {error("company")}
        </label>
        <label htmlFor="enquiry-phone">
          Phone <span>(optional)</span>
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={40}
            placeholder="Include country code"
            {...attrs("phone")}
          />
          {error("phone")}
        </label>
      </div>
      <label htmlFor="enquiry-service">
        What would you like to discuss?
        <select
          id="enquiry-service"
          name="service"
          defaultValue={initialService}
          {...attrs("service")}
        >
          <option value="distribution-strategy">A distribution strategy</option>
          <option value="real-estate">Real estate distribution</option>
          {services.map((s) => (
            <option value={s.slug} key={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
        {error("service")}
      </label>
      <div className="form-row">
        <label htmlFor="enquiry-location">
          Target city or market <span>(optional)</span>
          <input
            id="enquiry-location"
            name="location"
            maxLength={160}
            placeholder="e.g. Chennai, OMR"
            {...attrs("location")}
          />
          {error("location")}
        </label>
        <label htmlFor="enquiry-budget">
          Indicative budget <span>(optional)</span>
          <input
            id="enquiry-budget"
            name="budget"
            maxLength={120}
            placeholder="Amount and currency, or let’s discuss"
            {...attrs("budget")}
          />
          {error("budget")}
        </label>
      </div>
      <label htmlFor="enquiry-message">
        Your distribution goals <span>(required)</span>
        <textarea
          id="enquiry-message"
          name="message"
          required
          minLength={20}
          maxLength={4000}
          rows={5}
          placeholder="What are you offering, who do you need to reach, and what would you like to achieve?"
          {...attrs("message")}
        />
        {error("message")}
      </label>
      <div className="honeypot" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="consent-label">
        <input name="consent" type="checkbox" required {...attrs("consent")} />
        <span>
          I agree that DaaS.media may use these details to respond to my
          enquiry. <Link href="/privacy/">Read the privacy information.</Link>
        </span>
      </label>
      {error("consent")}
      <p className="form-explainer">
        {deliveryEnabled
          ? "Send your brief directly to contact@daas.media. Your details are used to respond to this enquiry."
          : "Email handoff: this form prepares a draft addressed to contact@daas.media. You review and send it from your email app. You can also download your brief."}
      </p>
      <button className="cta dark-cta" type="submit" disabled={busy}>
        {busy
          ? "Sending…"
          : deliveryEnabled
            ? "Send enquiry"
            : "Prepare email draft"}
        <span aria-hidden="true">↗</span>
      </button>
      <div className="form-alternatives">
        {deliveryEnabled && (
          <button
            type="button"
            onClick={(e) => prepareEmail(e.currentTarget.form!)}
          >
            Prepare email instead ↗
          </button>
        )}
        <button type="button" onClick={(e) => download(e.currentTarget.form!)}>
          Download brief ↓
        </button>
      </div>
      <p role="status" aria-live="polite" className="form-status">
        {status}
      </p>
      <noscript>
        <p>
          This form needs JavaScript. Please email your goals directly to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </noscript>
    </form>
  );
}
