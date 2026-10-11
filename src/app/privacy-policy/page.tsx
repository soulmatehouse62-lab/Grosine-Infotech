import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/sections/LegalPage";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects the personal information you share through this website.`,
  path: "/privacy-policy/",
});

// TODO: replace with a privacy policy reviewed for the client's business.
const sections: LegalSection[] = [
  {
    heading: "Information we collect",
    paragraphs: [
      "When you send an enquiry through this website we collect the details you provide: your name, email address, phone number, the service you are interested in and your message.",
      "Like most websites, we may also collect basic technical information such as your browser type and the pages you visit, to help us understand how the site is used.",
    ],
  },
  {
    heading: "How we use your information",
    paragraphs: [
      "We use your details to respond to your enquiry, prepare quotes and proposals, and deliver the services you ask for.",
      "We do not sell your personal information. We share it only with service providers who help us run this website and respond to enquiries, and only as far as needed for that purpose.",
    ],
  },
  {
    heading: "Third-party services",
    paragraphs: [
      "This website may use third-party services, for example a form-handling provider to deliver enquiries, Google Maps to show our location, and WhatsApp for messaging. These services process data under their own privacy policies.",
    ],
  },
  {
    heading: "Keeping your information",
    paragraphs: [
      "We keep enquiry details only for as long as needed to respond to you and to meet our business and legal obligations, and we take reasonable steps to keep them secure.",
    ],
  },
  {
    heading: "Your choices",
    paragraphs: [
      "You can ask us to show you, correct or delete the personal information we hold about you by contacting us using the details below.",
    ],
  },
  {
    heading: "Contact us",
    paragraphs: [
      `If you have a question about this policy, write to us at ${site.email} or at ${site.name}, ${site.fullAddress}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy-policy/"
      intro="What we collect when you use this website, and what we do with it."
      sections={sections}
    />
  );
}
