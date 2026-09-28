import { z } from "zod";
export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Enter your name.").max(100),
  email: z.string().trim().email("Enter a valid email address.").max(200),
  company: z.string().trim().min(2, "Enter your business name.").max(160),
  phone: z.string().trim().max(40).default(""),
  service: z.string().trim().min(1, "Choose a service.").max(100),
  location: z.string().trim().max(160).default(""),
  budget: z.string().trim().max(120).default(""),
  message: z
    .string()
    .trim()
    .min(20, "Tell us a little more (at least 20 characters).")
    .max(4000),
  consent: z.literal(true, {
    error: "Please agree that we may respond to your enquiry.",
  }),
  website: z.string().max(0).default(""),
});
export type Enquiry = z.infer<typeof enquirySchema>;
export function enquiryText(data: Enquiry) {
  return `Hello DaaS.media,\n\nI’d like to discuss my distribution goals.\n\nName: ${data.name}\nEmail: ${data.email}\nBusiness: ${data.company}\nPhone (optional): ${data.phone || "Not supplied"}\nService: ${data.service}\nTarget market: ${data.location || "To discuss"}\nBudget: ${data.budget || "To discuss"}\n\nGoals:\n${data.message}\n\nPermission to respond: Yes\n`;
}
export function enquiryMailto(data: Enquiry, email: string) {
  return `mailto:${email}?subject=${encodeURIComponent(`Distribution enquiry — ${data.company}`)}&body=${encodeURIComponent(enquiryText(data))}`;
}
