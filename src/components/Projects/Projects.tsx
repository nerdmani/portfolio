import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { useI18n } from "../../i18n/I18nContext";
import { projects } from "../../data/portfolio";
import type { Project } from "../../data/portfolio";
import styles from "./Projects.module.css";

function hasSafeProjectUrl(url?: string) {
  if (!url) return false;

  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === "https:" || parsedUrl.protocol === "http:";
  } catch {
    return false;
  }
}

function ProjectCards({ items }: { items: Project[] }) {
  const { lang, t } = useI18n();

  return (
    <div className={styles.grid}>
      {items.map((project, index) => (
        <motion.article
          key={project.name}
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          whileHover={{ y: -4 }}
        >
          <div className={styles.cardHeader}>
            <h4 className={styles.name}>{project.name}</h4>
            <span className={styles.status}>{project.status[lang]}</span>
          </div>

          <div className={styles.detail}>
            <h5>{t("proj.context")}</h5>
            <p>{project.context[lang]}</p>
          </div>

          <div className={styles.detail}>
            <h5>{t("proj.contribution")}</h5>
            <p>{project.contribution[lang]}</p>
          </div>

          <div className={styles.techTags}>
            {project.technologies.map((technology) => (
              <span key={technology} className={styles.techTag}>
                {technology}
              </span>
            ))}
          </div>

          {hasSafeProjectUrl(project.url) && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              {t("proj.visit")}
              <FiExternalLink size={14} aria-hidden="true" />
            </a>
          )}
        </motion.article>
      ))}
    </div>
  );
}

export function Projects() {
  const { t } = useI18n();
  const featuredProjects = projects.filter((project) => project.group === "featured");
  const complementaryProjects = projects.filter((project) => project.group === "complementary");

  return (
    <section className="section" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">{t("proj.label")}</p>
        <h2 className="section-title">{t("proj.title")}</h2>
      </motion.div>

      <section className={styles.projectGroup} aria-labelledby="featured-projects-title">
        <h3 id="featured-projects-title" className={styles.groupTitle}>
          {t("proj.featured")}
        </h3>
        <ProjectCards items={featuredProjects} />
      </section>

      <section className={styles.projectGroup} aria-labelledby="complementary-projects-title">
        <h3 id="complementary-projects-title" className={styles.groupTitle}>
          {t("proj.complementary")}
        </h3>
        <ProjectCards items={complementaryProjects} />
      </section>

      <motion.div
        className={styles.allProjects}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <a
          href="https://github.com/nerdmani"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.allLink}
        >
          {t("proj.all")}
        </a>
      </motion.div>
    </section>
  );
}
