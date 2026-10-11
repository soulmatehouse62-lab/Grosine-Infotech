export type Faq = {
  question: string;
  answer: string;
};

/** General FAQs shown on the home page. Service FAQs live in services.ts. */
export const generalFaqs: Faq[] = [
  {
    question: "What does Grosine Infotech do?",
    answer:
      "We are a digital marketing and website development agency based in Jaipur. We help small and mid-sized businesses get found online and turn that attention into enquiries through SEO, social media marketing, branding, website design, paid advertising and content marketing.",
  },
  {
    question: "Do you only work with businesses in Jaipur?",
    answer:
      "No. Our office is in Pratap Nagar, Jaipur, and we know the Rajasthan market well, but we work with businesses across India. Meetings can happen at our office, at yours, or over a video call.",
  },
  {
    question: "How much will my project cost?",
    answer:
      "It depends on your goals, your market and how much work is needed to get there. We don't sell fixed bundles that ignore your situation. Tell us what you want to achieve and we'll send a clear, itemised quote at no charge.",
  },
  {
    question: "How soon will I see results?",
    answer:
      "Paid campaigns can start bringing enquiries within days of going live. SEO and content build more slowly and usually need a few months of steady work before the gains become visible. We set honest expectations before you commit, based on your starting point and competition.",
  },
  {
    question: "Will I be locked into a long contract?",
    answer:
      "We'd rather earn your business each month than hold you to paperwork. Engagement terms are agreed up front and written into your proposal in plain language, so you always know what you have signed up for.",
  },
  {
    question: "How will I know what you are doing for my business?",
    answer:
      "You get regular reports written in plain language: what we did, what changed, and what we plan to do next. You can also reach your point of contact on a call or on WhatsApp whenever you have a question.",
  },
  {
    question: "Can you work with my existing website?",
    answer:
      "Usually, yes. We start by reviewing your current site. If it is sound, we improve it. If it is holding your marketing back, we'll explain why and what a rebuild would involve, and you decide.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "A conversation about your business, your customers and your goals. After that we'll ask for access to whatever already exists, such as your website, Google Business Profile and ad accounts, and we take it from there.",
  },
];
