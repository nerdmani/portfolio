import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiExternalLink,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useI18n } from "../../i18n/I18nContext";
import { contactLinks } from "../../data/portfolio";
import styles from "./Contact.module.css";

const iconMap: Record<string, React.ReactNode> = {
  email: <FiMail size={20} />,
  github: <FiGithub size={20} />,
  linkedin: <FiLinkedin size={20} />,
  whatsapp: <FaWhatsapp size={20} />,
};

export function Contact() {
  const { t } = useI18n();

  return (
    <section className="section" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">{t("contact.label")}</p>
        <h2 className="section-title">{t("contact.title")}</h2>
      </motion.div>

      <div className={styles.grid}>
        {contactLinks.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} ${link.preferred ? styles.preferred : ""}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -3 }}
          >
            <div className={styles.icon}>{iconMap[link.icon]}</div>
            <div className={styles.info}>
              <span className={styles.label}>
                {link.label}
                {link.preferred && (
                  <span className={styles.preferredBadge}>{t("contact.preferred")}</span>
                )}
              </span>
              <span className={styles.value}>{link.value}</span>
            </div>
            <FiExternalLink size={14} className={styles.arrow} />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
