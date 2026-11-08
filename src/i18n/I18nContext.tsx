import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "pt" | "en";

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  pt: {
    // Nav
    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.projects": "Projetos",
    "nav.skills": "Habilidades",
    "nav.contact": "Contato",
    "nav.language": "Alternar idioma",
    "nav.menu": "Abrir ou fechar menu",

    // Hero
    "hero.badge": "Desenvolvedor Mobile & Frontend",
    "hero.greeting": "Olá, eu sou",
    "hero.tagline": "Aplicativos e interfaces que conectam tecnologia às necessidades das pessoas.",
    "hero.description": "Desenvolvimento com Flutter, React e TypeScript, integração com recursos nativos e uso de agentes de IA na investigação, implementação e revisão de software.",
    "hero.projects": "Conhecer meu trabalho",
    "hero.contact": "Entrar em Contato",
    "hero.highlight1": "Flutter & Dart",
    "hero.highlight2": "Android & iOS",
    "hero.highlight3": "React & TypeScript",
    "hero.highlight4": "Desenvolvimento com agentes de IA",
    "hero.scroll": "Rolar para a seção Sobre",

    // About
    "about.label": "Sobre Mim",
    "about.title": "Desenvolvimento com visão de produto",
    "about.role": "Desenvolvedor Mobile & Frontend",
    "about.company": "TreineAqui · Aplicativos fitness",
    "about.location": "Taubaté · SP · Brasil",
    "about.open": "Aberto a novas oportunidades",
    "about.techTitle": "Tecnologias",
    "about.highlight1": "Desenvolvimento Android e iOS",
    "about.highlight2": "Integração com APIs e recursos nativos",
    "about.highlight3": "Experiência em aplicativos em produção",

    // Experience
    "exp.label": "Trajetória",
    "exp.title": "Experiência",
    "exp.toggle.show": "Ver atividades",
    "exp.toggle.hide": "Ocultar",
    "exp.review": "Atividades sujeitas à sua revisão antes da publicação.",
    "exp.inProgress": "Trabalho em desenvolvimento",

    // Projects
    "proj.label": "Portfólio",
    "proj.title": "Trabalhos em destaque",
    "proj.featured": "Experiência profissional e trabalhos em destaque",
    "proj.complementary": "Projetos complementares",
    "proj.all": "Ver todos no GitHub",
    "proj.context": "Contexto",
    "proj.contribution": "Minha contribuição",
    "proj.status": "Status",
    "proj.visit": "Ver projeto",

    // Skills
    "skills.label": "Competências",
    "skills.title": "Habilidades & Conhecimentos",
    "skills.educationReview": "Confirme se o curso foi concluído antes de publicar esta informação.",

    // Contact
    "contact.label": "Vamos Conversar",
    "contact.title": "Vamos construir a próxima entrega?",
    "contact.description": "Tenho interesse em oportunidades de desenvolvimento mobile e frontend, com espaço para colaborar em produtos e aplicações com IA.",
    "contact.preferred": "Canal preferencial",

    // Footer
    "footer.made": "Feito com",
    "footer.using": "usando React & Framer Motion",
  },
  en: {
    // Nav
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "nav.language": "Switch language",
    "nav.menu": "Open or close menu",

    // Hero
    "hero.badge": "Mobile & Frontend Developer",
    "hero.greeting": "Hi, I'm",
    "hero.tagline": "Apps and interfaces that connect technology with people's needs.",
    "hero.description": "Building with Flutter, React, and TypeScript, integrating native features, and using AI agents to investigate, implement, and review software.",
    "hero.projects": "Explore my work",
    "hero.contact": "Get in Touch",
    "hero.highlight1": "Flutter & Dart",
    "hero.highlight2": "Android & iOS",
    "hero.highlight3": "React & TypeScript",
    "hero.highlight4": "AI-agent-assisted development",
    "hero.scroll": "Scroll to the About section",

    // About
    "about.label": "About Me",
    "about.title": "Product-minded development",
    "about.role": "Mobile & Frontend Developer",
    "about.company": "TreineAqui · Fitness apps",
    "about.location": "Taubaté · SP · Brazil",
    "about.open": "Open to new opportunities",
    "about.techTitle": "Technologies",
    "about.highlight1": "Android and iOS development",
    "about.highlight2": "API and native feature integration",
    "about.highlight3": "Experience with production apps",

    // Experience
    "exp.label": "Career Path",
    "exp.title": "Experience",
    "exp.toggle.show": "Show activities",
    "exp.toggle.hide": "Hide",
    "exp.review": "Activities should be reviewed by you before publication.",
    "exp.inProgress": "Work in development",

    // Projects
    "proj.label": "Portfolio",
    "proj.title": "Selected work",
    "proj.featured": "Professional experience and selected work",
    "proj.complementary": "Additional projects",
    "proj.all": "View all on GitHub",
    "proj.context": "Context",
    "proj.contribution": "My contribution",
    "proj.status": "Status",
    "proj.visit": "View project",

    // Skills
    "skills.label": "Competencies",
    "skills.title": "Skills & Knowledge",
    "skills.educationReview": "Confirm whether the course was completed before publishing this information.",

    // Contact
    "contact.label": "Let's Talk",
    "contact.title": "Let's build the next release.",
    "contact.description": "I'm interested in mobile and frontend development opportunities, with room to contribute to AI-enabled products and applications.",
    "contact.preferred": "Preferred channel",

    // Footer
    "footer.made": "Made with",
    "footer.using": "using React & Framer Motion",
  },
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const t = (key: string) => translations[lang][key] ?? key;

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
