import { motion } from "framer-motion";
import { useI18n } from "../../i18n/I18nContext";
import { aboutText, profileHighlights, technologies } from "../../data/portfolio";
import styles from "./About.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export function About() {
  const { lang, t } = useI18n();

  return (
    <section className="section" id="about">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">{t("about.label")}</p>
        <h2 className="section-title">{t("about.title")}</h2>
      </motion.div>

      <div className={styles.grid}>
        <div className={styles.info}>
          <motion.div
            className={styles.roleBar}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className={styles.roleTitle}>{t("about.role")}</span>
            <span className={styles.roleSubtitle}>{t("about.company")}</span>
            <span className={styles.location}>{t("about.location")}</span>
          </motion.div>

          <motion.div
            className={styles.openBadge}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className={styles.dot} />
            {t("about.open")}
          </motion.div>

          <div className={styles.highlights}>
            {profileHighlights[lang].map((highlight) => (
              <span key={highlight} className={styles.highlight}>
                {highlight}
              </span>
            ))}
          </div>

          {aboutText[lang].map((text, i) => (
            <motion.p
              key={i}
              className={styles.paragraph}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.div
          className={styles.techSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className={styles.techTitle}>{t("about.techTitle")}</h3>
          <div className={styles.techGrid}>
            {technologies.map((tech) => (
              <span key={tech} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
