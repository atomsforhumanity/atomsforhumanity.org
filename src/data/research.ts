export interface ResearchArea {
  index: string;
  title: string;
  shortTitle: string;
  description: string;
}

export const researchAreas: ResearchArea[] = [
  {
    index: "01",
    shortTitle: "High-throughput simulation",
    title: "Make molecular simulation massively scalable.",
    description:
      "Molecular simulation is traditionally organized around individual calculations and bespoke workflows. AFH is building systems that allow large computational experiments to be defined, distributed, executed, analyzed, and reproduced systematically. This capability forms the foundation for everything else we do.",
  },
  {
    index: "02",
    shortTitle: "Reaction-network discovery",
    title: "Explore how chemistry can unfold.",
    description:
      "Chemical systems can contain vast networks of possible reactions and intermediates. AFH is developing computational approaches for discovering and navigating these networks automatically. Scalable reaction discovery can help transform chemical exploration from a process constrained by individual hypotheses into a more systematic search over possible chemistry.",
  },
  {
    index: "03",
    shortTitle: "Catalyst design",
    title: "Design better pathways through chemical space.",
    description:
      "Catalysts determine which reactions become practical, selective, and efficient. AFH uses molecular simulation and computational exploration to investigate catalyst behavior and develop approaches to more systematic catalyst design.",
  },
  {
    index: "04",
    shortTitle: "Sustainable polymers and materials",
    title: "Design molecular systems with their consequences in mind.",
    description:
      "Materials and polymers shape nearly every part of modern life. We are interested in molecular systems that can deliver useful performance while improving compatibility with human and environmental health.",
  },
];
