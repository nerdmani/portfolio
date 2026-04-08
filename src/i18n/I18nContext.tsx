import { createContext, useContext, useState, type ReactNode } from "react";

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

    // Hero
    "hero.badge": "Desenvolvedor Frontend & Mobile",
    "hero.greeting": "Olá, eu sou",
    "hero.tagline": "Criando interfaces web e mobile modernas e de alto impacto",
    "hero.projects": "Ver Projetos",
    "hero.contact": "Entrar em Contato",

    // About
    "about.label": "Sobre Mim",
    "about.role": "Desenvolvedor Frontend · Mobile Developer",
    "about.company": "TreineAqui · Experiência com IA",
    "about.location": "Taubaté · SP · Brasil",
    "about.open": "Aberto a novas oportunidades",
    "about.tag1": "React",
    "about.tag2": "Frontend",
    "about.tag3": "Prompt Engineering",
    "about.highlight1": "Frontend Web & Mobile",
    "about.highlight2": "Engenharia de Prompts (IA)",
    "about.highlight3": "UI/UX Design",
    "about.techTitle": "Tecnologias",
    "about.years": "anos de experiência",
    "about.companies": "empresas",
    "about.projects": "projetos entregues",

    // Experience
    "exp.label": "Trajetória",
    "exp.title": "Experiência",
    "exp.toggle.show": "Ver atividades",
    "exp.toggle.hide": "Ocultar",

    // Projects
    "proj.label": "Portfólio",
    "proj.title": "Projetos",
    "proj.all": "Ver todos no GitHub",

    // Skills
    "skills.label": "Competências",
    "skills.title": "Habilidades & Conhecimentos",

    // Contact
    "contact.label": "Vamos Conversar",
    "contact.title": "Contato",
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

    // Hero
    "hero.badge": "Frontend & Mobile Developer",
    "hero.greeting": "Hi, I'm",
    "hero.tagline": "Building modern, high-impact web and mobile interfaces",
    "hero.projects": "View Projects",
    "hero.contact": "Get in Touch",

    // About
    "about.label": "About Me",
    "about.role": "Frontend Developer · Mobile Developer",
    "about.company": "TreineAqui · AI Experience",
    "about.location": "Taubaté · SP · Brazil",
    "about.open": "Open to new opportunities",
    "about.tag1": "React",
    "about.tag2": "Frontend",
    "about.tag3": "Prompt Engineering",
    "about.highlight1": "Frontend Web & Mobile",
    "about.highlight2": "Prompt Engineering (AI)",
    "about.highlight3": "UI/UX Design",
    "about.techTitle": "Technologies",
    "about.years": "years of experience",
    "about.companies": "companies",
    "about.projects": "projects delivered",

    // Experience
    "exp.label": "Career Path",
    "exp.title": "Experience",
    "exp.toggle.show": "Show activities",
    "exp.toggle.hide": "Hide",

    // Projects
    "proj.label": "Portfolio",
    "proj.title": "Projects",
    "proj.all": "View all on GitHub",

    // Skills
    "skills.label": "Competencies",
    "skills.title": "Skills & Knowledge",

    // Contact
    "contact.label": "Let's Talk",
    "contact.title": "Contact",
    "contact.preferred": "Preferred channel",

    // Footer
    "footer.made": "Made with",
    "footer.using": "using React & Framer Motion",
  },
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");

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
