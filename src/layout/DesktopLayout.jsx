import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import styles from "./cssModules/Desktop.module.css";

const DesktopLayout = () => {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  )
}

export default DesktopLayout
