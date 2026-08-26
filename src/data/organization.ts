export interface PostalAddress {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export const organization = {
  name: "Atoms for Humanity",
  legalName: "Atoms for Humanity Corp",
  domain: "https://atomsforhumanity.org",
  type: "501(c)(3) public charity",
  ein: "41-5138821",
  incorporationState: "Delaware",
  founded: "March 2026",
  foundingDate: "2026-03",
  mission: "Accelerating humanity's transition to a sustainable molecular future.",
  shortDescription:
    "Atoms for Humanity is a nonprofit research organization building open computational infrastructure and advancing scientific research toward a sustainable molecular future.",
  description:
    "Atoms for Humanity is a nonprofit research organization working toward a sustainable molecular future. We build open infrastructure for molecular simulation at massive scale, creating a digital chemical laboratory in which researchers and AI systems can explore molecules, reactions, catalysts, and materials computationally. We use these capabilities to advance frontier research in sustainable chemistry and make the resulting tools, data, and scientific knowledge openly available.",
  officialMission:
    "The mission of the Corporation is to transition humanity to a sustainable molecular future, by, but not limited to, conducting and supporting research in quantum mechanics, chemistry, materials science, reaction network design, catalysis, polymers, and related fields; developing, maintaining, and distributing technology and software infrastructure to enable such research; and providing public education and outreach to increase awareness of the impact of modern chemistry on human health and the environment.",
  address: {
    street: "107 Plaza Trusco",
    city: "Taos",
    state: "NM",
    postalCode: "87571",
    country: "United States",
  } satisfies PostalAddress,
  mailingAddress: {
    street: "1518 Paseo Del Pueblo Norte #1282",
    city: "El Prado",
    state: "NM",
    postalCode: "87529-8055",
    country: "United States",
  } satisfies PostalAddress,
  links: {
    github: "https://github.com/atomsforhumanity",
    linkedin: "http://linkedin.com/company/atoms-for-humanity",
  },
  support: {
    name: "Astera Institute",
    amount: "$2.2 million",
  },
  affiliations: [
    {
      name: "NVIDIA Inception",
      confirmed: false,
    },
  ],
} as const;

export const navigation = [
  { label: "Our Work", href: "/work" },
  { label: "Technology", href: "/technology" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Organization", href: "/organization" },
] as const;

export const documents = [
  {
    title: "Certificate of Incorporation",
    description: "Official formation document for Atoms for Humanity Corp.",
    href: "/documents/certificate-of-incorporation.pdf",
  },
  {
    title: "Bylaws",
    description: "Current governing bylaws of Atoms for Humanity Corp.",
    href: "/documents/bylaws.pdf",
  },
  {
    title: "IRS 501(c)(3) Determination Letter",
    description:
      "Internal Revenue Service determination recognizing Atoms for Humanity Corp as a tax-exempt organization under Section 501(c)(3).",
    href: "/documents/irs-determination-letter.pdf",
  },
] as const;
