import { motion } from "framer-motion";
import { FiArrowDown, FiMail } from "react-icons/fi";
import { useI18n } from "../../i18n/I18nContext";
import styles from "./Hero.module.css";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bgGlow} />
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className={styles.badge}>{t("hero.badge")}</span>
        </motion.div>

        <motion.p
          className={styles.greeting}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          {t("hero.greeting")}
        </motion.p>

        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Lucas Santos
        </motion.h1>

        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          {t("hero.tagline")}
        </motion.p>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.72 }}
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          className={styles.highlights}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.78 }}
        >
          {[1, 2, 3, 4].map((index) => (
            <span key={index} className={styles.highlight}>
              {t(`hero.highlight${index}`)}
            </span>
          ))}
        </motion.div>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <a href="#projects" className={styles.btnPrimary}>
            {t("hero.projects")}
          </a>
          <a href="#contact" className={styles.btnSecondary}>
            <FiMail size={16} />
            {t("hero.contact")}
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className={styles.scrollDown}
        aria-label={t("hero.scroll")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <FiArrowDown size={20} />
      </motion.a>
    </section>
  );
}
