import EssentialCard from "../../component/EssentialCard";
import SiteCard from "../../component/SiteCard";
import { categoriesData, softwareSites } from "../../data/software.Data";
import styles from "./cssModules/Soft.module.css";

const Soft = () => {
  return (
    <div className={styles.body}>
      <div className={styles.top}>
        <div className={styles.left}>
          <h1>Sites</h1>
          <div className={styles.sites}>
            {softwareSites.map((site, index) => (
              <a key={index} className={styles.link} href={site.link} target="_blank" rel="noopener noreferrer">
                <SiteCard name={site.name} img={site.img} />
              </a>
            ))}
          </div>
        </div>
        
        <div className={styles.right}>
          <h2>Categories</h2>
          <div className={styles.list}>
            {Object.values(categoriesData).map((categorie, index) => (
              <EssentialCard key={index} title={categorie.title} items={categorie.items} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soft;