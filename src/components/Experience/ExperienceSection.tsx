import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useI18n } from "../../i18n/I18nContext";
import { experiences } from "../../data/portfolio";
import type { Experience } from "../../data/portfolio";
import styles from "./ExperienceSection.module.css";

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const [open, setOpen] = useState(false);
  const { lang, t } = useI18n();

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={styles.timeline}>
        <div className={styles.dot} />
        {index < experiences.length - 1 && <div className={styles.line} />}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{exp.title[lang]}</h3>
        <p className={styles.company}>{exp.company}</p>
        <span className={styles.period}>{exp.period[lang]}</span>
        <p className={styles.description}>{exp.description[lang]}</p>

        {exp.activities && (
          <>
            <button
              className={styles.toggleBtn}
              onClick={() => setOpen(!open)}
            >
              {open ? t("exp.toggle.hide") : t("exp.toggle.show")}
              {open ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
            </button>

            <AnimatePresence>
              {open && (
                <motion.div
                  className={styles.activities}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul>
                    {exp.activities[lang].map((act, i) => (
                      <li key={i} className={styles.activity}>
                        {act}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  const { t } = useI18n();

  return (
    <section className="section" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">{t("exp.label")}</p>
        <h2 className="section-title">{t("exp.title")}</h2>
      </motion.div>

      <div className={styles.list}>
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
