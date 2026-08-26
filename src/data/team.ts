export interface TeamMember {
  name: string;
  initials: string;
  title: string;
  group: "Leadership & Board" | "Research Team";
  bio: string;
  image: string;
  links?: ReadonlyArray<{ label: string; href: string }>;
}

export const team: TeamMember[] = [
  {
    name: "Colton Hicks",
    initials: "CH",
    title: "Founder & CEO · Director",
    group: "Leadership & Board",
    bio: "Colton Hicks is the founder and CEO of Atoms for Humanity. He earned his PhD in theoretical chemistry from Stanford University, where his work focused on distributed system design for quantum chemistry simulation, high throughput molecular analysis using group- and graph- theory, and organocatalyst design. Prior to his PhD, Colton worked as an analytic chemist building high throughput pipelines for synthetic DNA/RNA synthesis, as a researcher in macroeconomics and clinical psychology, and as a software engineer building automated trading systems at a hedge fund and scalable data systems at a medtech startup. His work at AFH sits at the intersection of scalable infrastructure, advanced molecular research, and high-performance computing.",
    image: "/images/team/colton-hicks.png",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/coltonbh/" },
      { label: "GitHub", href: "https://github.com/coltonbh" },
    ],
  },
  {
    name: "Maryanna Saenko",
    initials: "MS",
    title: "Director",
    group: "Leadership & Board",
    bio: "Maryanna Saenko is co-founder of Future Ventures and an early-stage venture capitalist investing in frontier technologies with the potential to improve human and planetary outcomes. Previously, she worked at Khosla Ventures, DFJ, Airbus Ventures, Lux Research, and Cabot Corporation. Her experience spans advanced materials, aerospace, energy, agriculture, healthcare, and artificial intelligence. She holds a BS in Biomedical Engineering and a BS and MS in Materials Science and Engineering from Carnegie Mellon University.",
    image: "/images/team/maryanna-saenko.webp",
  },
  {
    name: "Mel van Londen",
    initials: "MvL",
    title: "Director",
    group: "Leadership & Board",
    bio: "Mel van Londen is the CEO and co-founder of Develop Health, an AI-driven healthcare technology company working to reduce administrative barriers to medication access. He has deep experience building and scaling software products across healthcare technology and a background in open-source software development.",
    image: "/images/team/mel-van-londen.png",
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/mvanlonden/" }],
  },
  {
    name: "Jan Estrada Pabón",
    initials: "JEP",
    title: "Lead Computational Research Scientist",
    group: "Research Team",
    bio: "Jan Estrada Pabón leads computational research at Atoms for Humanity. His work focuses on applying high-throughput molecular simulation to reaction-network discovery, catalyst design, and sustainable chemistry while helping develop the scientific workflows that drive AFH's computational infrastructure.",
    image: "/images/team/jan-estrada-pabon.jpg",
  },
];
