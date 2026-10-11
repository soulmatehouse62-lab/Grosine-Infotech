import {
  Megaphone,
  MonitorSmartphone,
  Palette,
  PenLine,
  Search,
  Share2,
  type LucideIcon,
} from "lucide-react";
import type { Faq } from "./faqs";

export type ServiceItem = {
  title: string;
  description: string;
};

export type Service = {
  /** URL segment: /services/<slug>/ */
  slug: string;
  title: string;
  /** Short name for menus, cards and the form dropdown. */
  shortTitle: string;
  icon: LucideIcon;
  /** One-line promise shown under the title on the detail page. */
  tagline: string;
  /** Card and mega-menu description. */
  summary: string;
  /** Opening paragraphs on the detail page. */
  intro: string[];
  /** Three short points shown on service cards. */
  highlights: string[];
  /** "What's included" list. */
  features: ServiceItem[];
  /** Steps specific to this service. */
  process: ServiceItem[];
  benefits: ServiceItem[];
  faqs: Faq[];
  seo: {
    title: string;
    description: string;
  };
};

export const services: Service[] = [
  {
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    shortTitle: "SEO",
    icon: Search,
    tagline:
      "Be the business customers find when they search for what you sell.",
    summary:
      "Rank higher on Google for the searches that bring buyers, in Jaipur and across India.",
    intro: [
      "Most buying decisions now begin with a search. If your business isn't on the first page when someone looks for your product or service, that customer goes to a competitor without ever knowing you exist.",
      "Our SEO service fixes what is holding your website back, builds the content and authority Google looks for, and keeps improving month after month. The aim is simple: more of the right people finding you, and more of them getting in touch.",
    ],
    highlights: ["Local & national SEO", "Technical fixes", "Monthly reporting"],
    features: [
      {
        title: "SEO audit and roadmap",
        description:
          "A full review of your site's technical health, content and backlinks, turned into a prioritised list of what to fix first.",
      },
      {
        title: "Keyword and competitor research",
        description:
          "We find the terms your customers really use, including Hindi and local phrases, and see what competitors rank for.",
      },
      {
        title: "On-page optimisation",
        description:
          "Titles, headings, copy, internal links and structured data tuned so each page clearly matches a search intent.",
      },
      {
        title: "Technical SEO",
        description:
          "Page speed, mobile usability, crawlability, indexing and Core Web Vitals brought up to standard.",
      },
      {
        title: "Local SEO and Google Business Profile",
        description:
          "Profile optimisation, local citations and review guidance so you show up in the map pack for nearby searches.",
      },
      {
        title: "Authority building",
        description:
          "Relevant, earned links and mentions from trustworthy sites. No link farms and no shortcuts that put your site at risk.",
      },
    ],
    process: [
      {
        title: "Audit",
        description:
          "We benchmark where you stand today: rankings, traffic, technical issues and competitors.",
      },
      {
        title: "Strategy",
        description:
          "We choose target keywords and pages, and agree the priorities for the first three months.",
      },
      {
        title: "Implement",
        description:
          "Technical fixes, on-page improvements, new content and link building are carried out in planned sprints.",
      },
      {
        title: "Measure and refine",
        description:
          "We track rankings, traffic and enquiries, report monthly and adjust the plan as the data comes in.",
      },
    ],
    benefits: [
      {
        title: "Enquiries that keep coming",
        description:
          "Unlike ads, organic rankings keep bringing visitors without a cost for every click.",
      },
      {
        title: "Visitors ready to buy",
        description:
          "People searching for your service already have a need. SEO puts you in front of them at that moment.",
      },
      {
        title: "Stronger local presence",
        description:
          "Show up when people nearby search on Google and Google Maps, and give them a reason to choose you.",
      },
      {
        title: "A healthier website",
        description:
          "Faster pages and clearer content help every other marketing channel perform better too.",
      },
    ],
    faqs: [
      {
        question: "How long does SEO take to work?",
        answer:
          "SEO builds gradually. Early improvements such as technical fixes can show within weeks, while meaningful ranking and traffic gains typically need several months of consistent work. The timeline depends on your competition and where your site starts from, and we'll give you an honest estimate after the audit.",
      },
      {
        question: "Can you guarantee a number one ranking?",
        answer:
          "No, and you should be careful of anyone who does. Google decides rankings and changes its systems often. What we can promise is sound, proven work, complete transparency about what we are doing, and steady progress you can see in your reports.",
      },
      {
        question: "Do you do local SEO for Jaipur businesses?",
        answer:
          "Yes. Local SEO is a large part of our work. We optimise your Google Business Profile, build local citations and create location-focused content so you appear for searches in your city and neighbourhood.",
      },
      {
        question: "What will I see in my SEO report?",
        answer:
          "Keyword positions, organic traffic, enquiries from search, the work completed that month and the plan for the next one, all explained in plain language.",
      },
    ],
    seo: {
      title: "SEO Services in Jaipur",
      description:
        "SEO services in Jaipur from Grosine Infotech: audits, on-page and technical SEO, local SEO and link building that bring qualified enquiries. Get a free quote.",
    },
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    shortTitle: "Social Media Marketing",
    icon: Share2,
    tagline:
      "Turn followers into customers with content people want to see.",
    summary:
      "Planned, on-brand content and community management on the platforms your customers use.",
    intro: [
      "Your customers spend hours each week on Instagram, Facebook, LinkedIn and YouTube. A page that posts now and then is easy to scroll past. A page with a clear voice, useful content and quick replies becomes a reason to buy from you.",
      "We plan, create and manage your social media so it looks professional, stays consistent and moves people towards an enquiry.",
    ],
    highlights: ["Content calendars", "Reels & creatives", "Community management"],
    features: [
      {
        title: "Platform strategy",
        description:
          "We pick the platforms where your customers actually are and define what you should say on each one.",
      },
      {
        title: "Monthly content calendar",
        description:
          "A planned mix of posts, reels, stories and carousels, shared for your approval before the month begins.",
      },
      {
        title: "Creative design and copy",
        description:
          "Branded graphics, short-form video edits and captions written to stop the scroll and prompt action.",
      },
      {
        title: "Community management",
        description:
          "Comments and messages answered promptly, so interested people become conversations and leads.",
      },
      {
        title: "Profile optimisation",
        description:
          "Bios, highlights, links and contact buttons set up so a visitor can reach you in one tap.",
      },
      {
        title: "Insights and reporting",
        description:
          "Monthly reports on reach, engagement, follower growth and the enquiries social media produced.",
      },
    ],
    process: [
      {
        title: "Understand your brand",
        description:
          "We learn your tone, audience and offers, and review what you and your competitors post now.",
      },
      {
        title: "Plan the month",
        description:
          "We build a content calendar around your goals, festivals, launches and local moments.",
      },
      {
        title: "Create and publish",
        description:
          "Our designers and writers produce each piece, you approve it, and we schedule it for the best time.",
      },
      {
        title: "Engage and report",
        description:
          "We respond to your audience, track performance and use what we learn in next month's plan.",
      },
    ],
    benefits: [
      {
        title: "A brand people recognise",
        description:
          "Consistent visuals and voice make your business look established and easy to remember.",
      },
      {
        title: "Direct line to customers",
        description:
          "Answer questions, handle objections and build trust in the place people already spend time.",
      },
      {
        title: "More enquiries from DMs",
        description:
          "Clear calls to action and fast replies turn interest into messages, calls and bookings.",
      },
      {
        title: "Your time back",
        description:
          "No more scrambling for something to post. The calendar is planned and handled for you.",
      },
    ],
    faqs: [
      {
        question: "Which platforms should my business be on?",
        answer:
          "The ones your customers use. For most consumer businesses that means Instagram and Facebook; for B2B it is often LinkedIn. We recommend a focused set of platforms rather than spreading your budget thin across all of them.",
      },
      {
        question: "How many posts will you publish each month?",
        answer:
          "That depends on the plan we agree. We'll recommend a posting rhythm that suits your goals and budget, and the exact number of posts, reels and stories is written into your proposal.",
      },
      {
        question: "Do you create the graphics and videos?",
        answer:
          "Yes. Our team designs the creatives, edits short-form video and writes the captions. If you have your own photos or footage, we'll gladly use them.",
      },
      {
        question: "Do you also run paid social ads?",
        answer:
          "Yes. Paid campaigns on Meta are handled through our Performance Marketing service and work best alongside steady organic content.",
      },
    ],
    seo: {
      title: "Social Media Marketing Agency in Jaipur",
      description:
        "Social media marketing in Jaipur by Grosine Infotech: strategy, content calendars, reels, creatives and community management that turn followers into customers.",
    },
  },
  {
    slug: "branding-graphic-design",
    title: "Branding & Graphic Design",
    shortTitle: "Branding & Design",
    icon: Palette,
    tagline: "Look like the business customers can trust at first glance.",
    summary:
      "Logos, visual identity and marketing design that make your business memorable.",
    intro: [
      "People judge a business in seconds. A dated logo, mismatched colours or a rushed brochure quietly tells customers you may not be the safe choice, however good your work is.",
      "We build brand identities that are distinctive, consistent and practical to use, and design the everyday material that carries your brand: social posts, brochures, packaging, signage and more.",
    ],
    highlights: ["Logo & identity", "Brand guidelines", "Print & digital design"],
    features: [
      {
        title: "Logo design",
        description:
          "Original logo concepts developed around your business, refined with your feedback and delivered in every format you need.",
      },
      {
        title: "Visual identity system",
        description:
          "Colour palette, typography, patterns and imagery style that work together across print and screen.",
      },
      {
        title: "Brand guidelines",
        description:
          "A clear document showing how to use your brand, so every vendor and team member keeps it consistent.",
      },
      {
        title: "Marketing collateral",
        description:
          "Business cards, brochures, flyers, catalogues, standees and presentations designed to match your brand.",
      },
      {
        title: "Social media and ad creatives",
        description:
          "Templates and campaign graphics that keep your feed and your ads looking like one brand.",
      },
      {
        title: "Packaging and signage",
        description:
          "Labels, boxes, shop boards and vehicle graphics that carry your identity into the physical world.",
      },
    ],
    process: [
      {
        title: "Brand discovery",
        description:
          "We learn what your business stands for, who it serves and how it differs from competitors.",
      },
      {
        title: "Concepts",
        description:
          "We present distinct creative directions, each with a clear rationale, for you to react to.",
      },
      {
        title: "Refinement",
        description:
          "Your chosen direction is polished through feedback rounds until every detail is right.",
      },
      {
        title: "Delivery",
        description:
          "You receive final files in all required formats, along with guidelines for using them.",
      },
    ],
    benefits: [
      {
        title: "A stronger first impression",
        description:
          "A professional identity builds trust before a customer has read a single word.",
      },
      {
        title: "Consistency everywhere",
        description:
          "Your website, social pages, shopfront and printed material finally look like the same business.",
      },
      {
        title: "Easier marketing",
        description:
          "With a defined system and ready templates, new material is quicker and cheaper to produce.",
      },
      {
        title: "Room to charge more",
        description:
          "Brands that look established are better placed to command confidence and better prices.",
      },
    ],
    faqs: [
      {
        question: "What do I receive at the end of a branding project?",
        answer:
          "Your logo in all standard formats (vector and image files, colour and single-colour versions), your colour palette and fonts, and a brand guidelines document. Any additional collateral agreed in your proposal is delivered print-ready.",
      },
      {
        question: "How many logo concepts and revisions do I get?",
        answer:
          "The number of concepts and revision rounds is agreed before we start and written into your proposal, so there are no surprises on either side.",
      },
      {
        question: "Can you refresh my existing logo rather than start again?",
        answer:
          "Yes. If your brand has recognition worth keeping, a careful refresh is often the better route. We'll advise honestly on whether to evolve it or start fresh.",
      },
      {
        question: "Will I own the final designs?",
        answer:
          "Yes. Once the project is paid in full, ownership of the final approved designs transfers to you.",
      },
    ],
    seo: {
      title: "Branding & Graphic Design Company in Jaipur",
      description:
        "Logo design, brand identity and graphic design in Jaipur. Grosine Infotech creates distinctive, consistent brands for growing businesses. Request a free quote.",
    },
  },
  {
    slug: "website-design-development",
    title: "Website Design & Development",
    shortTitle: "Website Development",
    icon: MonitorSmartphone,
    tagline: "A fast, modern website built to turn visitors into enquiries.",
    summary:
      "Fast, mobile-first websites and online stores designed to convert visitors into leads.",
    intro: [
      "Your website is where every other marketing effort ends up. If it loads slowly, looks dated or makes it hard to get in touch, you are paying for visitors who leave without a word.",
      "We design and build websites that load quickly, read clearly on a phone and guide each visitor towards calling, messaging or filling in a form. Every site is built with SEO in mind from the first line of code.",
    ],
    highlights: ["Mobile-first design", "SEO-ready build", "Online stores"],
    features: [
      {
        title: "Custom UI/UX design",
        description:
          "Layouts designed around your customers and your brand, not a template with your logo dropped in.",
      },
      {
        title: "Responsive development",
        description:
          "Clean, modern code that looks right and works properly on every phone, tablet and desktop.",
      },
      {
        title: "Business and corporate websites",
        description:
          "Clear service pages, strong calls to action and enquiry forms that make contacting you effortless.",
      },
      {
        title: "E-commerce stores",
        description:
          "Online stores with product catalogues, secure payment gateways and simple order management.",
      },
      {
        title: "Speed and SEO foundations",
        description:
          "Fast load times, tidy structure, meta data and schema in place from day one, so Google can rank you.",
      },
      {
        title: "Maintenance and support",
        description:
          "Updates, backups, security checks and content changes handled for you after launch.",
      },
    ],
    process: [
      {
        title: "Plan",
        description:
          "We define the site's goals, pages and features, and map the route a visitor takes to enquire.",
      },
      {
        title: "Design",
        description:
          "You review page designs for mobile and desktop and request changes before development begins.",
      },
      {
        title: "Build",
        description:
          "We develop the site, add your content and test it across devices, browsers and connection speeds.",
      },
      {
        title: "Launch and support",
        description:
          "We take the site live, set up analytics and stay on hand for updates and improvements.",
      },
    ],
    benefits: [
      {
        title: "More enquiries per visitor",
        description:
          "Clear messaging and obvious next steps mean more visitors become leads.",
      },
      {
        title: "Great on mobile",
        description:
          "Most of your visitors arrive on a phone. Your site is designed for them first.",
      },
      {
        title: "Ready to rank",
        description:
          "Technical SEO is built in, giving your search marketing a strong base to grow from.",
      },
      {
        title: "Easy to keep current",
        description:
          "Update your own content without a developer, or leave it to us with a support plan.",
      },
    ],
    faqs: [
      {
        question: "How long does it take to build a website?",
        answer:
          "It depends on the size of the site and how quickly content and feedback come together. A straightforward business website moves much faster than a large online store. We give you a realistic timeline with milestones in your proposal.",
      },
      {
        question: "Will my website work well on mobile phones?",
        answer:
          "Yes. Every site we build is designed mobile-first and tested on a range of real screen sizes before launch.",
      },
      {
        question: "Can I update the website myself?",
        answer:
          "Yes. Where it suits the project we build on a content management system and show you how to edit text, images and pages. If you'd rather not, our maintenance plans cover updates for you.",
      },
      {
        question: "Do you provide the domain and hosting?",
        answer:
          "We can help you choose and set up both, or work with what you already have. Either way, the accounts are registered in your name so you stay in control.",
      },
    ],
    seo: {
      title: "Website Design & Development Company in Jaipur",
      description:
        "Website design and development in Jaipur by Grosine Infotech. Fast, mobile-first, SEO-ready business websites and online stores built to generate enquiries.",
    },
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing (Google Ads / Meta Ads)",
    shortTitle: "Performance Marketing",
    icon: Megaphone,
    tagline: "Paid campaigns measured by leads and sales, not just clicks.",
    summary:
      "Google Ads and Meta Ads campaigns managed to bring leads at a cost that makes sense.",
    intro: [
      "Paid advertising is the fastest way to put your business in front of people who are ready to buy. It is also an easy way to waste money when campaigns are set up loosely and left to run.",
      "We plan, build and manage campaigns on Google and Meta with one question in mind: how much did each enquiry cost, and how do we bring that number down? You always know where your budget went and what it returned.",
    ],
    highlights: ["Google Ads", "Meta Ads", "Conversion tracking"],
    features: [
      {
        title: "Google Search and Display Ads",
        description:
          "Appear at the top of Google when people search for your service, and stay visible across the web.",
      },
      {
        title: "Meta Ads on Facebook and Instagram",
        description:
          "Reach the right people by location, interest and behaviour with lead forms, messages and website campaigns.",
      },
      {
        title: "Conversion tracking",
        description:
          "Calls, forms, WhatsApp clicks and purchases tracked properly, so decisions rest on real outcomes.",
      },
      {
        title: "Ad copy and creatives",
        description:
          "Headlines, images and videos written and designed to earn the click, then tested against each other.",
      },
      {
        title: "Landing page guidance",
        description:
          "Recommendations, or full builds, for pages that turn paid visitors into enquiries.",
      },
      {
        title: "Remarketing",
        description:
          "Bring back visitors who showed interest but didn't get in touch the first time.",
      },
    ],
    process: [
      {
        title: "Set goals and tracking",
        description:
          "We agree what counts as a lead, what it is worth to you, and make sure every conversion is measured.",
      },
      {
        title: "Build campaigns",
        description:
          "Audiences, keywords, ads and budgets are structured carefully and shared with you before launch.",
      },
      {
        title: "Launch and test",
        description:
          "Campaigns go live and we test different ads, audiences and offers to find what performs.",
      },
      {
        title: "Optimise and scale",
        description:
          "Budget shifts to the winners, weak spend is cut, and you get a clear report on cost per lead.",
      },
    ],
    benefits: [
      {
        title: "Leads from the first week",
        description:
          "Campaigns can start bringing enquiries soon after launch, without waiting for rankings to build.",
      },
      {
        title: "Full control of spend",
        description:
          "Set a budget that suits you, raise it when it works and pause it whenever you need to.",
      },
      {
        title: "Precise targeting",
        description:
          "Show your ads only to people in the areas you serve who match your ideal customer.",
      },
      {
        title: "Clear return on investment",
        description:
          "See what you spent, how many leads it produced and what each one cost.",
      },
    ],
    faqs: [
      {
        question: "How much should I spend on ads?",
        answer:
          "There is no single right figure. It depends on your industry, location and how competitive your keywords are. We'll suggest a sensible starting budget based on your goals, and you can scale it once you see what a lead costs.",
      },
      {
        question: "Is the ad budget included in your fee?",
        answer:
          "No. Your ad spend is paid directly to Google or Meta from your own account, and our management fee is separate. This keeps everything transparent: you can see exactly what was spent on ads.",
      },
      {
        question: "Who owns the ad accounts?",
        answer:
          "You do. Campaigns run in ad accounts that belong to your business, so your data and history stay with you whatever happens.",
      },
      {
        question: "Should I choose Google Ads or Meta Ads?",
        answer:
          "Google Ads reaches people actively searching for your service, while Meta Ads is strong for building demand and reaching specific audiences. Many businesses benefit from both. We'll recommend the mix that fits your goals and budget.",
      },
    ],
    seo: {
      title: "Google Ads & Meta Ads Management in Jaipur",
      description:
        "Performance marketing in Jaipur: Google Ads and Meta Ads campaigns planned, tracked and optimised by Grosine Infotech to deliver leads at a sensible cost.",
    },
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    shortTitle: "Content Marketing",
    icon: PenLine,
    tagline: "Useful content that earns attention, trust and search traffic.",
    summary:
      "Blogs, website copy and campaigns that answer customer questions and build authority.",
    intro: [
      "Before they contact you, customers research. They read, compare and look for someone who clearly knows the subject. The business that answers their questions best is usually the one that gets the call.",
      "We plan and write content that speaks to your customers, supports your SEO and gives your sales team something worth sharing. Every piece has a purpose and a place in the plan.",
    ],
    highlights: ["Blogs & articles", "Website copy", "Content strategy"],
    features: [
      {
        title: "Content strategy",
        description:
          "A plan built on what your customers search for and ask about, mapped to each stage of their decision.",
      },
      {
        title: "Blog posts and articles",
        description:
          "Well-researched, readable articles that target real search demand and show your expertise.",
      },
      {
        title: "Website copywriting",
        description:
          "Home, service and landing page copy that explains what you do clearly and prompts visitors to act.",
      },
      {
        title: "SEO content optimisation",
        description:
          "Existing pages refreshed with better structure, keywords and internal links so they rank higher.",
      },
      {
        title: "Email and WhatsApp campaigns",
        description:
          "Newsletters and broadcast messages that keep past enquiries and customers coming back.",
      },
      {
        title: "Video scripts and case studies",
        description:
          "Scripts for reels and explainers, plus customer stories that turn your results into proof.",
      },
    ],
    process: [
      {
        title: "Research",
        description:
          "We study your customers, keywords and competitors to find the topics worth writing about.",
      },
      {
        title: "Plan",
        description:
          "An editorial calendar sets out what will be published, where and when.",
      },
      {
        title: "Write and review",
        description:
          "Our writers draft each piece, edit it carefully and send it to you for approval.",
      },
      {
        title: "Publish and promote",
        description:
          "Content goes live, is shared across your channels and is tracked for traffic and enquiries.",
      },
    ],
    benefits: [
      {
        title: "Traffic that compounds",
        description:
          "A good article can keep attracting visitors long after it is published.",
      },
      {
        title: "Authority in your field",
        description:
          "Helpful, accurate content positions you as the expert customers want to deal with.",
      },
      {
        title: "Support for every channel",
        description:
          "One strong piece feeds your SEO, social media, emails and sales conversations.",
      },
      {
        title: "Better-informed leads",
        description:
          "Prospects who have read your content arrive with fewer doubts and are easier to convert.",
      },
    ],
    faqs: [
      {
        question: "Who writes the content?",
        answer:
          "Our in-house writers, working from research and from what you tell us about your business. Every piece is edited before it reaches you, and nothing is published without your approval.",
      },
      {
        question: "Can you write in Hindi as well as English?",
        answer:
          "Yes. Many of our clients' customers search and read in Hindi, so we can create content in English, Hindi or both, depending on your audience.",
      },
      {
        question: "How does content help my SEO?",
        answer:
          "Search engines rank pages that answer a searcher's question well. Regular, relevant content gives you more pages that can rank, more keywords you can appear for, and more reasons for other sites to link to you.",
      },
      {
        question: "How often should we publish?",
        answer:
          "Consistency matters more than volume. We'll recommend a rhythm you can sustain, and that fits your budget, rather than a burst of posts followed by silence.",
      },
    ],
    seo: {
      title: "Content Marketing Services in Jaipur",
      description:
        "Content marketing by Grosine Infotech, Jaipur: content strategy, SEO blogs, website copywriting and campaigns in English and Hindi that build trust and traffic.",
    },
  },
];

/** Choices for the "service" dropdown in the enquiry form. */
export const serviceOptions: string[] = [
  ...services.map((service) => service.shortTitle),
  "Not sure yet",
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

/** Other services to suggest on a detail page. */
export function getRelatedServices(slug: string, count = 3): Service[] {
  const index = services.findIndex((service) => service.slug === slug);
  return Array.from(
    { length: Math.min(count, services.length - 1) },
    (_, offset) => services[(index + offset + 1) % services.length],
  );
}
