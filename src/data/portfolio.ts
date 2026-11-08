import type { Lang } from "../i18n/I18nContext";

export interface Experience {
  title: Record<Lang, string>;
  company: string;
  period: Record<Lang, string>;
  description: Record<Lang, string>;
  activities?: Record<Lang, string[]>;
  activitiesReview?: boolean;
  inProgress?: Record<Lang, string>;
}

export interface Project {
  name: string;
  group: "featured" | "complementary";
  context: Record<Lang, string>;
  contribution: Record<Lang, string>;
  status: Record<Lang, string>;
  technologies: string[];
  url?: string;
}

export interface SkillCategory {
  title: Record<Lang, string>;
  note?: Record<Lang, string>;
  items: Record<Lang, string[]>;
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
    "Sou Lucas da Silva Santos, desenvolvedor mobile e frontend com atuação na evolução de aplicativos Android e iOS. Trabalho com Flutter e Dart no mobile e tenho experiência com React, TypeScript e integração com APIs na web.",
    "Na TreineAqui, participo da manutenção e evolução de aplicativos para o segmento fitness, trabalhando em interfaces, fluxos de treino, integrações e investigação de problemas em diferentes dispositivos. Minha atuação envolve compreender as regras do produto, transformar necessidades em mudanças técnicas e acompanhar sua validação.",
    "Também utilizo agentes de IA no desenvolvimento: estruturo tarefas, forneço contexto do projeto, conduzo investigações e reviso as alterações propostas. Combino essas ferramentas com análise de código, testes e validação para apoiar as entregas.",
    "Tenho conhecimentos de back-end, bancos de dados e infraestrutura que ajudam na colaboração com outras áreas e na compreensão das integrações do produto. Busco oportunidades para aprofundar minha atuação em mobile, frontend e aplicações com IA.",
  ],
  en: [
    "I'm Lucas da Silva Santos, a mobile and frontend developer working on the evolution of Android and iOS apps. I use Flutter and Dart for mobile development and have experience with React, TypeScript, and API integrations on the web.",
    "At TreineAqui, I contribute to the maintenance and evolution of fitness apps, working on interfaces, workout flows, integrations, and troubleshooting across different devices. My work involves understanding product rules, turning needs into technical changes, and following up on their validation.",
    "I also use AI agents in development: I structure tasks, provide project context, lead investigations, and review proposed changes. I combine these tools with code analysis, testing, and validation to support deliveries.",
    "I have knowledge of back-end development, databases, and infrastructure that helps me collaborate with other teams and understand product integrations. I'm looking for opportunities to deepen my work in mobile, frontend, and AI-powered applications.",
  ],
};

export const profileHighlights: Record<Lang, string[]> = {
  pt: [
    "Desenvolvimento Android e iOS",
    "Integração com APIs e recursos nativos",
    "Experiência em aplicativos em produção",
  ],
  en: [
    "Android and iOS development",
    "API and native feature integration",
    "Experience with production apps",
  ],
};

export const technologies = [
  "Flutter",
  "Dart",
  "Android",
  "iOS",
  "React",
  "TypeScript",
  "Firebase",
  "REST APIs",
  "Swift",
  "WidgetKit",
  "Claude Code",
  "Codex",
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
      pt: "Desenvolvimento e manutenção de aplicativos fitness com Flutter e Dart para Android e iOS. Atuação na evolução das interfaces e dos fluxos de uso, integração com APIs e recursos das plataformas, investigação de falhas e preparação de versões para testes e publicação.",
      en: "Developing and maintaining fitness apps with Flutter and Dart for Android and iOS. Contributing to interface and user-flow improvements, API and platform-feature integrations, issue investigation, and release preparation for testing and publication.",
    },
    activitiesReview: true,
    activities: {
      pt: [
        "Evolução de interfaces e fluxos de treino, autenticação, acesso e conteúdo.",
        "Integração com APIs REST e tratamento de estados de carregamento, falhas e conectividade.",
        "Trabalho com notificações push utilizando Firebase Cloud Messaging.",
        "Desenvolvimento de widgets para iOS com Swift/WidgetKit e integração com o aplicativo Flutter.",
        "Investigação de problemas de compatibilidade, teclado, sessão e comportamento em dispositivos Android.",
        "Preparação e validação de versões utilizando Play Console e TestFlight.",
        "Uso de agentes de IA para apoiar análise de código, implementação, revisão e documentação técnica.",
      ],
      en: [
        "Improving interfaces and workout, authentication, access, and content flows.",
        "Integrating REST APIs and handling loading, error, and connectivity states.",
        "Working with push notifications using Firebase Cloud Messaging.",
        "Developing iOS widgets with Swift/WidgetKit and integrating them with the Flutter app.",
        "Investigating compatibility, keyboard, session, and behavior issues across Android devices.",
        "Preparing and validating releases with Play Console and TestFlight.",
        "Using AI agents to support code analysis, implementation, review, and technical documentation.",
      ],
    },
    inProgress: {
      pt: "Desenvolvimento de experiências de treino para relógios Android e Apple Watch, com adaptação de interface, navegação e integração com o aplicativo.",
      en: "Developing workout experiences for Android watches and Apple Watch, adapting interfaces and navigation and integrating with the app.",
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
      pt: "Desenvolvimento de interfaces web com React, integração com APIs e adaptação de layouts para diferentes tamanhos de tela. Colaboração na prototipação de interfaces com Figma e apoio a funcionalidades de back-end com PHP e SQLite.",
      en: "Developed web interfaces with React, integrated APIs, and adapted layouts for different screen sizes. Collaborated on interface prototyping with Figma and supported back-end functionality with PHP and SQLite.",
    },
    activities: {
      pt: [
        "Desenvolvimento de interfaces com React.js e integração com APIs.",
        "Prototipação de interfaces no Figma com foco em UX.",
        "Apoio a funcionalidades de back-end com PHP e SQLite.",
      ],
      en: [
        "Built interfaces with React.js and integrated APIs.",
        "Prototyped user-focused interfaces in Figma.",
        "Supported back-end functionality with PHP and SQLite.",
      ],
    },
  },
];

export const projects: Project[] = [
  {
    name: "TreineAqui — Desenvolvimento mobile",
    group: "featured",
    context: {
      pt: "Aplicativos fitness com Flutter e Dart para Android e iOS.",
      en: "Fitness apps built with Flutter and Dart for Android and iOS.",
    },
    contribution: {
      pt: "Participação na evolução de interfaces, fluxos de treino, integrações e manutenção.",
      en: "Contributed to evolving interfaces, workout flows, integrations, and app maintenance.",
    },
    status: {
      pt: "Experiência profissional",
      en: "Professional experience",
    },
    technologies: ["Flutter", "Dart", "Android", "iOS", "REST APIs"],
  },
  {
    name: "Widgets para iOS",
    group: "featured",
    context: {
      pt: "Widgets que apresentam informações de treino na tela inicial do iOS.",
      en: "Widgets that display workout information on the iOS home screen.",
    },
    contribution: {
      pt: "Contribuição no contexto da TreineAqui, com Swift/WidgetKit e integração com o aplicativo Flutter.",
      en: "Contribution in the context of TreineAqui, using Swift/WidgetKit and integration with the Flutter app.",
    },
    status: {
      pt: "Contribuição na TreineAqui",
      en: "Contribution at TreineAqui",
    },
    technologies: ["Swift", "WidgetKit", "App Groups", "Flutter"],
  },
  {
    name: "Experiência de treino em smartwatches",
    group: "featured",
    context: {
      pt: "Adaptação de interfaces e fluxos de treino para relógios com Android, dispositivos Wear OS e Apple Watch, tratados como alvos distintos.",
      en: "Adapting interfaces and workout flows for Android-based watches, Wear OS devices, and Apple Watch as distinct targets.",
    },
    contribution: {
      pt: "Desenvolvimento de experiências de treino para relógios Android e Apple Watch, com adaptação de interface, navegação e integração com o aplicativo.",
      en: "Developing workout experiences for Android watches and Apple Watch, adapting interfaces and navigation and integrating with the app.",
    },
    status: {
      pt: "Em desenvolvimento",
      en: "In development",
    },
    technologies: ["Android", "Wear OS", "watchOS"],
  },
  {
    name: "IA Reconhecimento de Quedas",
    group: "featured",
    context: {
      pt: "Inteligência Artificial para identificar quedas de idosos utilizando algoritmos de visão computacional e machine learning.",
      en: "Artificial intelligence for identifying falls among older adults using computer vision and machine learning algorithms.",
    },
    contribution: {
      pt: "Contribuição e natureza do projeto a confirmar.",
      en: "Contribution and project context to be confirmed.",
    },
    status: {
      pt: "Status a confirmar",
      en: "Status to be confirmed",
    },
    technologies: ["Python", "OpenCV", "YOLO", "Machine Learning"],
  },
  {
    name: "Guardiões da Floresta",
    group: "complementary",
    context: {
      pt: "Jogo educativo para ensinar histórias folclóricas a crianças e sensibilizar sobre a preservação da floresta.",
      en: "Educational game to teach children folklore stories and raise awareness about forest preservation.",
    },
    contribution: {
      pt: "Contribuição a detalhar.",
      en: "Contribution details to be added.",
    },
    status: {
      pt: "Status a confirmar",
      en: "Status to be confirmed",
    },
    technologies: ["GML", "C#", "GameMaker Studio 2"],
  },
  {
    name: "Site inspirado no iFood",
    group: "complementary",
    context: {
      pt: "Site com cadastro de usuários, navegação de produtos e integração com API para processamento de pedidos.",
      en: "Website with user registration, product browsing, and API integration for order processing.",
    },
    contribution: {
      pt: "Contribuição a detalhar.",
      en: "Contribution details to be added.",
    },
    status: {
      pt: "Status a confirmar",
      en: "Status to be confirmed",
    },
    technologies: ["React.js", "Node.js", "MySQL"],
  },
  {
    name: "Lista de tarefas (Scrum)",
    group: "complementary",
    context: {
      pt: "Sistema de lista de tarefas para organização e gestão, utilizando metodologia Scrum.",
      en: "Task-list system for organization and management using the Scrum methodology.",
    },
    contribution: {
      pt: "Contribuição a detalhar.",
      en: "Contribution details to be added.",
    },
    status: {
      pt: "Status a confirmar",
      en: "Status to be confirmed",
    },
    technologies: ["React.js", "Node.js", "MySQL"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: { pt: "Mobile", en: "Mobile" },
    items: {
      pt: ["Flutter", "Dart", "Android", "iOS", "Firebase", "FCM", "APIs REST"],
      en: ["Flutter", "Dart", "Android", "iOS", "Firebase", "FCM", "REST APIs"],
    },
  },
  {
    title: { pt: "Frontend", en: "Frontend" },
    items: {
      pt: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Responsividade", "CSS Modules"],
      en: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Responsive design", "CSS Modules"],
    },
  },
  {
    title: { pt: "Integrações nativas", en: "Native integrations" },
    note: {
      pt: "Experiência aplicada em integrações iOS.",
      en: "Applied experience with iOS integrations.",
    },
    items: { pt: ["Swift", "WidgetKit", "App Groups"], en: ["Swift", "WidgetKit", "App Groups"] },
  },
  {
    title: { pt: "Back-end e dados", en: "Back-end and data" },
    note: {
      pt: "Conhecimentos complementares; a experiência varia entre tecnologias.",
      en: "Complementary knowledge; experience varies across technologies.",
    },
    items: {
      pt: ["Node.js", "PHP", "Python", "MySQL", "SQLite", "MongoDB"],
      en: ["Node.js", "PHP", "Python", "MySQL", "SQLite", "MongoDB"],
    },
  },
  {
    title: { pt: "Ferramentas", en: "Tools" },
    items: {
      pt: ["Git", "GitHub", "VS Code", "Android Studio", "Xcode", "FVM", "Play Console", "TestFlight"],
      en: ["Git", "GitHub", "VS Code", "Android Studio", "Xcode", "FVM", "Play Console", "TestFlight"],
    },
  },
  {
    title: { pt: "IA no desenvolvimento", en: "AI-assisted development" },
    items: {
      pt: [
        "Claude Code",
        "Codex",
        "Estruturação de tarefas e contexto",
        "Investigação de falhas com apoio de IA",
        "Revisão de alterações e validação",
        "Documentação técnica assistida por IA",
      ],
      en: [
        "Claude Code",
        "Codex",
        "Structuring tasks and context for agents",
        "AI-assisted issue investigation",
        "Reviewing changes and validating results",
        "AI-assisted technical documentation",
      ],
    },
  },
  {
    title: { pt: "Visão computacional", en: "Computer vision" },
    items: {
      pt: ["OpenCV", "YOLO", "Machine Learning"],
      en: ["OpenCV", "YOLO", "Machine Learning"],
    },
  },
  {
    title: { pt: "Infraestrutura complementar", en: "Complementary infrastructure" },
    note: {
      pt: "Conhecimentos complementares.",
      en: "Complementary knowledge.",
    },
    items: { pt: ["Docker", "AWS"], en: ["Docker", "AWS"] },
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
