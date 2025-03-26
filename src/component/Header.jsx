import { Link } from "react-router-dom";
import styles from "./cssModules/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      
      <div className={styles.ctitle}>
        <div className={styles.logo}></div>
        <Link className={styles.link} to="/">    <div className={styles.title}><h1>OneLink</h1></div></Link>
    
      </div>

      <div className={styles.navBar}>
        <Link to="/"><button className={styles.home}>Home</button></Link>
        <button className={styles.categories}>Categories</button>
      </div>
    </div>
  )
}

export default Header
