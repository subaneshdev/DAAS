import { NextResponse } from "next/server";
import { enquirySchema, enquiryText } from "@/lib/enquiry";
import { site } from "@/content/site";
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const requestUrl = new URL(request.url);
  const visibleOrigin = `${requestUrl.protocol}//${request.headers.get("host") || requestUrl.host}`;
  if (!origin || ![requestUrl.origin, visibleOrigin, site.url].includes(origin))
    return NextResponse.json(
      { message: "Please submit the enquiry from this website." },
      { status: 403 },
    );
  if (!request.headers.get("content-type")?.includes("application/json"))
    return NextResponse.json(
      { message: "Use the enquiry form to send your request." },
      { status: 415 },
    );
  if (Number(request.headers.get("content-length") || 0) > 24000)
    return NextResponse.json(
      { message: "Your enquiry is too long. Please shorten it." },
      { status: 413 },
    );
  let body: unknown;
  try {
    const text = await request.text();
    if (new TextEncoder().encode(text).length > 24000)
      return NextResponse.json(
        { message: "Your enquiry is too long. Please shorten it." },
        { status: 413 },
      );
    body = JSON.parse(text);
  } catch {
    return NextResponse.json(
      { message: "We couldn’t read the enquiry. Please try again." },
      { status: 400 },
    );
  }
  const result = enquirySchema.safeParse(body);
  if (!result.success) {
    const errors = Object.fromEntries(
      result.error.issues.map((i) => [String(i.path[0]), i.message]),
    );
    return NextResponse.json(
      { message: "Please check the highlighted fields.", errors },
      { status: 400 },
    );
  }
  if (!process.env.RESEND_API_KEY || !process.env.ENQUIRY_FROM_EMAIL)
    return NextResponse.json(
      {
        message:
          "Direct delivery is not connected yet. Please prepare an email draft or download your brief.",
      },
      { status: 503 },
    );
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.ENQUIRY_FROM_EMAIL,
        to: [site.email],
        reply_to: result.data.email,
        subject: `Distribution enquiry — ${result.data.company.replace(/[\r\n]/g, " ")}`,
        text: enquiryText(result.data),
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok)
      return NextResponse.json(
        {
          message:
            "Delivery failed. Please use the email draft or download option.",
        },
        { status: 502 },
      );
    const delivery = await response.json();
    if (typeof delivery.id !== "string")
      return NextResponse.json(
        {
          message: "Delivery could not be confirmed. Please email us directly.",
        },
        { status: 502 },
      );
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        message:
          "Delivery could not be confirmed. Please use the email draft or download option.",
      },
      { status: 502 },
    );
  }
}
