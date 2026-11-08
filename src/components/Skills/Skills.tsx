import { motion } from "framer-motion";
import { useI18n } from "../../i18n/I18nContext";
import { skillCategories, education } from "../../data/portfolio";
import styles from "./Skills.module.css";

export function Skills() {
  const { lang, t } = useI18n();

  return (
    <section className="section" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">{t("skills.label")}</p>
        <h2 className="section-title">{t("skills.title")}</h2>
      </motion.div>

      <div className={styles.grid}>
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title[lang]}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <h3 className={styles.catTitle}>{cat.title[lang]}</h3>
            {cat.note && <p className={styles.catNote}>{cat.note[lang]}</p>}
            <div className={styles.items}>
              {cat.items[lang].map((item) => (
                <span key={item} className={styles.item}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className={styles.education}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className={styles.eduIcon} aria-hidden="true">
          🎓
        </div>
        <div className={styles.eduInfo}>
          <h3 className={styles.eduTitle}>{education.title[lang]}</h3>
          <p className={styles.eduInstitution}>{education.institution}</p>
          <span className={styles.eduPeriod}>{education.period}</span>
          <p className={styles.eduReview}>{t("skills.educationReview")}</p>
        </div>
      </motion.div>
    </section>
  );
}
