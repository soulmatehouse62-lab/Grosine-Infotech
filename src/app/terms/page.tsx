import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/sections/LegalPage";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: `The terms that apply when you use the ${site.name} website and enquire about our services.`,
  path: "/terms/",
});

// TODO: replace with terms reviewed for the client's business.
const sections: LegalSection[] = [
  {
    heading: "Using this website",
    paragraphs: [
      `This website is operated by ${site.name}. By using it you agree to these terms. If you do not agree, please do not use the site.`,
      "The content on this website is provided for general information. We work to keep it accurate and current, but we make no guarantee that it is complete or free of errors.",
    ],
  },
  {
    heading: "Our services",
    paragraphs: [
      "Descriptions of services on this website are an overview, not an offer. The scope, deliverables, timelines and fees for any project are set out in a separate written proposal or agreement between you and us.",
      "Marketing results depend on many factors outside our control, including search engine and advertising platform changes. We do not guarantee specific rankings, traffic, leads or sales.",
    ],
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      `The text, design and graphics on this website belong to ${site.name} unless stated otherwise, and may not be copied or reused without our written permission.`,
    ],
  },
  {
    heading: "Links to other websites",
    paragraphs: [
      "This website may link to third-party websites. We are not responsible for their content or their privacy practices.",
    ],
  },
  {
    heading: "Liability",
    paragraphs: [
      "To the extent permitted by law, we are not liable for any loss or damage arising from your use of this website or reliance on its content.",
    ],
  },
  {
    heading: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of India, and any dispute is subject to the jurisdiction of the courts in Jaipur, Rajasthan.",
    ],
  },
  {
    heading: "Contact us",
    paragraphs: [
      `Questions about these terms can be sent to ${site.email} or to ${site.name}, ${site.fullAddress}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      path="/terms/"
      intro="The terms that apply when you use this website."
      sections={sections}
    />
  );
}
