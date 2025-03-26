import styles from "./cssModules/SiteCard2.module.css";

const SiteCard2 = ({ site }) => {
  return (
    <a className={styles.link} href={site.url} target="_blank" rel="noopener noreferrer">
      <div className={styles.container}>
        <div className={styles.top}>
          <img src={site.icon} alt={site.name} />
        </div>
        <div className={styles.arrow}></div>
      </div>
    </a>
  );
};

export default SiteCard2;
