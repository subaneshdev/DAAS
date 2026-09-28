import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui";
import { site } from "@/content/site";
export const metadata = pageMetadata(
  "Privacy & Enquiry Information | DaaS.media",
  "How DaaS.media’s website handles enquiry details, email drafts and downloaded briefs. Contact us with questions about your information.",
  "/privacy/",
);
export default function Privacy() {
  return (
    <main id="main" className="section-pad paper">
      <Breadcrumbs items={[{ name: "Privacy" }]} />
      <div className="prose-page">
        <h1>
          Your information.
          <br />A clear purpose.
        </h1>
        <p>
          This page describes the website’s enquiry flow and the information you
          choose to share with DaaS.media.
        </p>
        <h2>What you provide</h2>
        <p>
          The enquiry form asks for your name, email, business, service interest
          and goals. Phone number, location and budget are optional. Please do
          not include sensitive personal information or confidential buyer
          records in your initial brief.
        </p>
        <h2>Email drafts and downloads</h2>
        <p>
          When the form shows “Prepare email draft”, the website creates a draft
          in your email application. It does not send the enquiry or save it in
          a website database. You decide whether to send it. Downloading a brief
          saves a text file on your own device.
        </p>
        <h2>Direct delivery, when enabled</h2>
        <p>
          If the form instead shows “Send enquiry”, the website sends the
          supplied details to our business inbox through Resend after
          validation. Our email and hosting providers process the information
          needed to deliver the request. The site itself does not maintain a
          lead database.
        </p>
        <h2>How enquiries are used</h2>
        <p>
          The details you send are used to understand and respond to your
          business enquiry and discuss a potential engagement. Agreeing to an
          enquiry response is not an agreement to unrelated marketing
          broadcasts.
        </p>
        <h2>Website technology</h2>
        <p>
          This build does not include advertising pixels or analytics trackers.
          Fonts and visual assets are served with the website. Hosting
          infrastructure may process standard request information for operation
          and security. Your email provider applies its own policies when you
          send an email draft.
        </p>
        <h2>Questions and requests</h2>
        <p>
          For questions about information you have shared or a request
          concerning it, email <a href={`mailto:${site.email}`}>{site.email}</a>
          . Any further data-handling arrangements for an engagement should be
          agreed before client or buyer data is transferred.
        </p>
      </div>
    </main>
  );
}
