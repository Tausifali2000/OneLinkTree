import styles from "./cssModules/anime.module.css"
import SiteCard2 from "../../component/SiteCard2";
import { animeSites, mangaSites } from "../../data/animeData";

const Anime = () => {

  
  return (
    <div className={styles.body}>
       <div className={styles.top}>
        <div className={styles.left}>
          <h1>Sites</h1>
          <div className={styles.sites}>
            {animeSites.map((site, index) => (
              
              <SiteCard2 key={index} site={site} />
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <h1>Manga</h1>
          <div className={styles.sites}>
            {mangaSites.map((site, index) => (
              
              <SiteCard2 key={index} site={site} />
            ))}
          </div>
        </div>
        </div>
    </div>
  )
}

export default Anime
