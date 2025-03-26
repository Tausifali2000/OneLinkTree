import EssentialCard from "../../component/EssentialCard";
import SiteCard2 from "../../component/SiteCard2";
import { categoriesData, enterSites } from "../../data/EnterData";

import styles from "./cssModules/Enter.module.css";


const Enter = () => {
  return (
    
    <div className={styles.body}>
      <div className={styles.top}>
        <div className={styles.left}>
          <h1>Sites</h1>
          <div className={styles.sites}>
            {enterSites.map((site, index) => (
              <SiteCard2 key={index} site={site} />
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

export default Enter;