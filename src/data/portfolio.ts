export const portfolioCategories = [
  "SEO",
  "Web Development",
  "Branding",
  "Social Media",
  "Performance Marketing",
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: PortfolioCategory;
  summary: string;
  /** Short labels shown as chips on the card. */
  tags: string[];
  /** Show on the home page preview. */
  featured?: boolean;
};

// Every project below is a placeholder. Do not publish until replaced with
// real client work. Cards use generated artwork, so no images are required;
// see README for how to add real screenshots later.
export const projects: Project[] = [
  // TODO: replace with real data
  {
    slug: "project-one",
    title: "Project Title One",
    client: "Client Name",
    category: "SEO",
    summary:
      "Placeholder project. Describe the client's goal, the SEO work carried out and the outcome in one or two sentences.",
    tags: ["Local SEO", "Technical audit"],
    featured: true,
  },
  // TODO: replace with real data
  {
    slug: "project-two",
    title: "Project Title Two",
    client: "Client Name",
    category: "Web Development",
    summary:
      "Placeholder project. Describe what was built, who it was for and what it helped the client achieve.",
    tags: ["Website redesign", "Lead forms"],
    featured: true,
  },
  // TODO: replace with real data
  {
    slug: "project-three",
    title: "Project Title Three",
    client: "Client Name",
    category: "Branding",
    summary:
      "Placeholder project. Describe the brand challenge, the identity created and where it is now used.",
    tags: ["Logo", "Brand guidelines"],
    featured: true,
  },
  // TODO: replace with real data
  {
    slug: "project-four",
    title: "Project Title Four",
    client: "Client Name",
    category: "Social Media",
    summary:
      "Placeholder project. Describe the platforms managed, the content approach and how the audience responded.",
    tags: ["Instagram", "Content calendar"],
    featured: true,
  },
  // TODO: replace with real data
  {
    slug: "project-five",
    title: "Project Title Five",
    client: "Client Name",
    category: "Performance Marketing",
    summary:
      "Placeholder project. Describe the campaign objective, the channels used and the return it delivered.",
    tags: ["Google Ads", "Landing page"],
    featured: true,
  },
  // TODO: replace with real data
  {
    slug: "project-six",
    title: "Project Title Six",
    client: "Client Name",
    category: "Web Development",
    summary:
      "Placeholder project. Describe what was built, who it was for and what it helped the client achieve.",
    tags: ["E-commerce", "Payment gateway"],
    featured: true,
  },
  // TODO: replace with real data
  {
    slug: "project-seven",
    title: "Project Title Seven",
    client: "Client Name",
    category: "SEO",
    summary:
      "Placeholder project. Describe the client's goal, the SEO work carried out and the outcome in one or two sentences.",
    tags: ["Content strategy", "Link building"],
  },
  // TODO: replace with real data
  {
    slug: "project-eight",
    title: "Project Title Eight",
    client: "Client Name",
    category: "Branding",
    summary:
      "Placeholder project. Describe the brand challenge, the identity created and where it is now used.",
    tags: ["Packaging", "Print design"],
  },
  // TODO: replace with real data
  {
    slug: "project-nine",
    title: "Project Title Nine",
    client: "Client Name",
    category: "Social Media",
    summary:
      "Placeholder project. Describe the platforms managed, the content approach and how the audience responded.",
    tags: ["Reels", "Community management"],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
