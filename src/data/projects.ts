export interface Project {
  name: string;
  category: string;
  description: string;
  repository?: string;
  documentation?: string;
  supportingLine?: string;
  links?: ReadonlyArray<{ label: string; href: string }>;
}

export const projects = {
  qcconst: {
    name: "qcconst",
    category: "REFERENCE DATA",
    description:
      "NIST/CODATA 2022 physical constants, conversion factors, and periodic-table data with clear source information for every value.",
    repository: "https://github.com/atomsforhumanity/qcconst",
  },
  qcdata: {
    name: "qcdata",
    category: "SCIENTIFIC DATA",
    description:
      "Elegant, intuitive data structures for quantum chemistry, including serializable calculation inputs and outputs and seamless Jupyter Notebook visualization.",
    repository: "https://github.com/atomsforhumanity/qcdata",
    documentation: "https://qcdata.docs.atomsforhumanity.org/",
  },
  qcinf: {
    name: "qcinf",
    category: "MOLECULAR INFORMATICS",
    description:
      "Cheminformatics algorithms and molecular-structure utilities built around standardized qcdata objects.",
    repository: "https://github.com/atomsforhumanity/qcinf",
  },
  qccodec: {
    name: "qccodec",
    category: "TRANSLATION",
    description:
      "A translation layer that encodes structured qcdata inputs into native quantum chemistry program inputs and decodes program outputs back into structured scientific data.",
    repository: "https://github.com/atomsforhumanity/qccodec",
  },
  qccompute: {
    name: "qccompute",
    category: "PROGRAM INTERFACE",
    description:
      "A common interface for operating quantum chemistry programs using standardized qcdata structures, supporting programs including TeraChem, Psi4, Q-Chem, NWChem, ORCA, Molpro, geomeTRIC, and others.",
    repository: "https://github.com/atomsforhumanity/qccompute",
    documentation: "https://qccompute.docs.atomsforhumanity.org/",
  },
  bigchem: {
    name: "BigChem",
    category: "DISTRIBUTED COMPUTE",
    description:
      "A distributed application for running quantum chemistry calculations at scale across clusters of computers or cloud infrastructure.",
    supportingLine:
      "BigChem turns individual molecular calculations into distributed computational workloads.",
    repository: "https://github.com/mtzgroup/bigchem",
  },
  chemcloud: {
    name: "ChemCloud",
    category: "SECURE CLOUD ACCESS",
    description:
      "A web application and Python client for exposing BigChem computational infrastructure securely over the internet.",
    supportingLine:
      "ChemCloud allows researchers and software systems to access scalable molecular computation without directly operating the underlying cluster infrastructure.",
    links: [
      { label: "Server", href: "https://github.com/mtzgroup/chemcloud-server" },
      { label: "Python client", href: "https://github.com/mtzgroup/chemcloud-client" },
    ],
  },
} satisfies Record<string, Project>;

export const qcProjects = [
  projects.qcconst,
  projects.qcdata,
  projects.qcinf,
  projects.qccodec,
  projects.qccompute,
] as const;

export const technologyGroups = [
  {
    name: "qc*",
    category: "INTEROPERABLE FOUNDATIONS",
    description:
      "A family of interoperable tools providing common scientific data structures, program interfaces, physical reference data, parsing, and molecular informatics.",
  },
  projects.bigchem,
  projects.chemcloud,
] as const;
