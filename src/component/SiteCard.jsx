import styles from "./cssModules/SiteCard.module.css";

const SiteCard = ({ name, img }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={img} alt={name} />
      </div>
      <div className={styles.right}>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default SiteCard;
