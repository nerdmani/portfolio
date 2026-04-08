import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useI18n } from "../../i18n/I18nContext";
import styles from "./Footer.module.css";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.name}>Lucas Santos</span>

        <div className={styles.socials}>
          <a href="https://github.com/nerdmani" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub size={18} />
          </a>
          <a href="https://linkedin.com/in/lucas-silva-4a679723a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin size={18} />
          </a>
          <a href="mailto:contato.sslucas@gmail.com" aria-label="Email">
            <FiMail size={18} />
          </a>
        </div>

        <p className={styles.copy}>
          © {new Date().getFullYear()} Lucas Santos &middot; {t("footer.made")}{" "}
          <span className={styles.heart}>♥</span> {t("footer.using")}
        </p>
      </div>
    </footer>
  );
}
