import { motion } from "framer-motion";
import { useI18n } from "../../i18n/I18nContext";
import { projects } from "../../data/portfolio";
import styles from "./Projects.module.css";

export function Projects() {
  const { lang, t } = useI18n();

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

      <div className={styles.grid}>
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className={styles.cardHeader}>
              <h3 className={styles.name}>{project.name}</h3>
              <span className={styles.language}>
                <span className={styles.langDot} />
                {project.language}
              </span>
            </div>

            <p className={styles.description}>{project.description[lang]}</p>

            <div className={styles.techTags}>
              {project.technologies.map((tech) => (
                <span key={tech} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

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
