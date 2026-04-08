import type { Lang } from "../i18n/I18nContext";

export interface Experience {
  title: Record<Lang, string>;
  company: string;
  period: Record<Lang, string>;
  description: Record<Lang, string>;
  activities?: Record<Lang, string[]>;
}

export interface Project {
  name: string;
  language: string;
  description: Record<Lang, string>;
  technologies: string[];
  url?: string;
}

export interface SkillCategory {
  title: Record<Lang, string>;
  items: string[];
}

export interface ContactLink {
  label: string;
  value: string;
  url: string;
  icon: string;
  preferred?: boolean;
}

export const aboutText: Record<Lang, string[]> = {
  pt: [
    "Sou desenvolvedor Frontend e Mobile com forte atuação na criação de interfaces modernas, responsivas e de alto desempenho. Minha maior paixão está em transformar designs em experiências de usuário fluidas — tanto na web quanto em aplicativos móveis.",
    "Atualmente atuo na TreineAqui como desenvolvedor mobile pleno, onde em poucos meses entreguei melhorias significativas nas interfaces e nos fluxos funcionais dos aplicativos. Aprimorei a comunicação entre equipes e otimizei processos de desenvolvimento, demonstrando maturidade técnica acelerada.",
    "Tenho conhecimento básico a intermediário de back-end (Node.js, PHP, bancos de dados), o que me permite colaborar de forma eficaz com equipes full stack e compreender toda a arquitetura de um projeto. Também possuo alta proficiência em Engenharia de Prompts (Prompt Engineering), dominando técnicas como Chain-of-Thought, Few-Shot Learning, Role Prompting e RAG para acelerar o desenvolvimento com IA.",
    "Estou sempre disposto a colaborar com equipes multidisciplinares e me adaptar a novos desafios. Aos 25 anos, busco crescer continuamente e contribuir para o sucesso de projetos inovadores.",
  ],
  en: [
    "I'm a Frontend and Mobile developer with a strong focus on building modern, responsive, high-performance interfaces. My greatest passion is turning designs into smooth user experiences — both on the web and in mobile apps.",
    "I currently work at TreineAqui as a mid-level mobile developer, where in just a few months I delivered significant improvements to app interfaces and functional flows. I enhanced cross-team communication and optimized development processes, demonstrating accelerated technical maturity.",
    "I have basic to intermediate back-end knowledge (Node.js, PHP, databases), which enables me to collaborate effectively with full stack teams and understand the full architecture of a project. I also have high proficiency in Prompt Engineering, mastering techniques such as Chain-of-Thought, Few-Shot Learning, Role Prompting, and RAG to accelerate development with AI.",
    "I'm always willing to collaborate with multidisciplinary teams and adapt to new challenges. At 25 years old, I continuously seek growth and aim to contribute to innovative projects.",
  ],
};

export const stats = [
  { value: "2+", labelKey: "about.years" },
  { value: "3", labelKey: "about.companies" },
  { value: "6+", labelKey: "about.projects" },
];

export const technologies = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Python",
  "C#",
  "PHP",
  "Java",
  "Docker",
  "AWS",
  "MySQL",
  "MongoDB",
  "Git",
  "Figma",
  "React Native",
  "HTML/CSS",
  "Bootstrap",
  "REST APIs",
];

export const experiences: Experience[] = [
  {
    title: {
      pt: "Desenvolvedor Mobile Pleno",
      en: "Mid-Level Mobile Developer",
    },
    company: "TreineAqui",
    period: {
      pt: "novembro de 2024 — Atual",
      en: "November 2024 — Present",
    },
    description: {
      pt: "Atuação como desenvolvedor mobile pleno com foco na evolução dos aplicativos da plataforma. Em poucos meses, entreguei melhorias significativas em interfaces e fluxos funcionais, elevando a qualidade da experiência do usuário e a consistência do produto.",
      en: "Working as a mid-level mobile developer focused on evolving the platform's applications. In just a few months, I delivered significant improvements to interfaces and functional flows, elevating user experience quality and product consistency.",
    },
    activities: {
      pt: [
        "Redesign e otimização de interfaces para melhor usabilidade e performance",
        "Refatoração de fluxos funcionais dos aplicativos com foco em UX",
        "Aprimoramento da comunicação técnica inter-equipes",
        "Aplicação de Prompt Engineering (Chain-of-Thought, RAG) para acelerar desenvolvimento",
        "Implementação de melhorias contínuas com entrega ágil e alto impacto",
      ],
      en: [
        "UI redesign and optimization for better usability and performance",
        "Refactoring of app functional flows focused on UX",
        "Enhancement of cross-team technical communication",
        "Applied Prompt Engineering (Chain-of-Thought, RAG) to accelerate development",
        "Continuous improvements with agile delivery and high impact",
      ],
    },
  },
  {
    title: {
      pt: "Desenvolvedor Frontend",
      en: "Frontend Developer",
    },
    company: "Virtua Brasil",
    period: {
      pt: "agosto de 2024 — outubro de 2024",
      en: "August 2024 — October 2024",
    },
    description: {
      pt: "Desenvolvimento de interfaces web com React.js, com foco em usabilidade, responsividade e performance. Atuação principal no front-end com suporte básico ao back-end (PHP/SQLite). Colaboração em projetos utilizando metodologias ágeis.",
      en: "Built web interfaces with React.js, focusing on usability, responsiveness, and performance. Primarily worked on the front-end with basic back-end support (PHP/SQLite). Collaborated on projects using agile methodologies.",
    },
    activities: {
      pt: [
        "Desenvolvimento de interfaces com React.js e integração com APIs",
        "Design de interfaces no Figma com foco em UX",
        "Suporte ao back-end com PHP e SQLite",
        "Colaboração em projetos com metodologias ágeis (Scrum)",
      ],
      en: [
        "Interface development with React.js and API integration",
        "UI design in Figma with UX focus",
        "Back-end support with PHP and SQLite",
        "Agile project collaboration (Scrum)",
      ],
    },
  },
];

export const projects: Project[] = [
  {
    name: "To-Do List (Scrum)",
    language: "React.js",
    description: {
      pt: "Sistema de lista de tarefas utilizando metodologia SCRUM para organização e gestão, com back-end em Node.js e banco MySQL.",
      en: "Task list system using SCRUM methodology for organization and management, with Node.js back-end and MySQL database.",
    },
    technologies: ["React.js", "Node.js", "MySQL"],
  },
  {
    name: "Site Estilo iFood",
    language: "React.js",
    description: {
      pt: "Site inspirado no iFood com cadastro de usuários, navegação de produtos e integração com API para processamento de pedidos.",
      en: "iFood-inspired website with user registration, product browsing, and API integration for order processing.",
    },
    technologies: ["React.js", "Node.js", "MySQL"],
  },
  {
    name: "Guardiões da Floresta",
    language: "GML / C#",
    description: {
      pt: "Jogo educativo focado em ensinar histórias folclóricas para crianças e sensibilizar sobre a preservação da floresta.",
      en: "Educational game focused on teaching folk stories to children and raising awareness about forest preservation.",
    },
    technologies: ["GML", "C#", "GameMaker Studio 2"],
  },
  {
    name: "IA Reconhecimento de Quedas",
    language: "Python",
    description: {
      pt: "Inteligência Artificial para identificar quedas de idosos utilizando algoritmos de visão computacional e machine learning com OpenCV e YOLO.",
      en: "Artificial Intelligence to identify elderly falls using computer vision algorithms and machine learning with OpenCV and YOLO.",
    },
    technologies: ["Python", "OpenCV", "YOLO", "Machine Learning"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: { pt: "Frontend & Mobile", en: "Frontend & Mobile" },
    items: ["React (TS/JS)", "React Native", "HTML", "CSS", "Bootstrap", "Figma (UI/UX)"],
  },
  {
    title: { pt: "Linguagens de Programação", en: "Programming Languages" },
    items: ["TypeScript", "JavaScript", "Python", "C#", "PHP", "Java", "GML"],
  },
  {
    title: { pt: "Back-end (básico/intermediário)", en: "Back-end (basic/intermediate)" },
    items: ["Node.js", "REST APIs", "MySQL", "MongoDB", "PHP"],
  },
  {
    title: { pt: "Ferramentas e DevOps", en: "Tools & DevOps" },
    items: ["Git", "Docker", "AWS", "Unity", "GameMaker Studio 2", "Unreal Engine 5", "Godot"],
  },
  {
    title: { pt: "Inteligência Artificial", en: "Artificial Intelligence" },
    items: ["Prompt Engineering", "Chain-of-Thought", "Few-Shot Learning", "RAG", "OpenCV", "YOLO"],
  },
];

export const education = {
  title: {
    pt: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    en: "Associate Degree in Systems Analysis and Development",
  },
  institution: "Faculdade de Tecnologia SENAI Félix Guisard",
  period: "01/2023 – 12/2024",
};

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "contato.sslucas@gmail.com",
    url: "mailto:contato.sslucas@gmail.com",
    icon: "email",
    preferred: true,
  },
  {
    label: "GitHub",
    value: "github.com/nerdmani",
    url: "https://github.com/nerdmani",
    icon: "github",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/lucas-silva-4a679723a",
    url: "https://linkedin.com/in/lucas-silva-4a679723a",
    icon: "linkedin",
  },
  {
    label: "WhatsApp",
    value: "+55 12 99651-7371",
    url: "https://wa.me/5512996517371",
    icon: "whatsapp",
  },
];
