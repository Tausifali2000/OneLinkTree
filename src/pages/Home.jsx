import CatCard from "../component/CatCard";
import categories from "../data/Categories.js";
import { Link } from "react-router-dom";

import styles from "./cssModules/Home.module.css";
import EssentialCard from "../component/EssentialCard.jsx";
import { essentialData } from "../data/essentialsData.js";

const Home = () => {
  
  return (

    <div className={styles.body}>
      <div className={styles.top}>
        <div className={styles.categories}>
          <h1>Categories</h1>
          <div className={styles.cateCards}>
            {categories.map((category, index) => (
              <Link className={styles.link} key={index} to={`/${category.toLowerCase()}`}>
                <CatCard name={category} />
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.essentials}>
          <h2>Essentials</h2>
          <div className={styles.list}>
            {Object.values(essentialData).map((essential, index) => (
              <EssentialCard key={index} title={essential.title} items={essential.items} />
            ))}
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Home;
