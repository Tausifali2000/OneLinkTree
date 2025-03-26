import EssentialCard from "../../component/EssentialCard";
import SiteCard from "../../component/SiteCard";
import { categoriesData,  sites } from "../../data/GamesSites";
import styles from "./cssModules/Games.module.css";


const Games = () => {

  
  return (
    <div className={styles.body}>
      <div className={styles.top}>
        <div className={styles.left}>
          <h1>Sites</h1>
          <div className={styles.sites}>
            {sites.map((site, index) => (
              <a key={index} className={styles.link} href={site.link} target="_blank" rel="noopener noreferrer">
                <SiteCard name={site.name} img={site.img} />
              </a>
            ))}
          </div>
        </div>
        
        <div className={styles.right}>
          <h2>Online Cracks</h2>
          <div className={styles.list}>
          {Object.values(categoriesData).map((categories, index) => (
              <EssentialCard key={index} title={categories.title} items={categories.items} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default Games;
