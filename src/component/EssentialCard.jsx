import styles from "./cssModules/EssentialCard.module.css";

const EssentialCard = ({ title, items }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>{title}</h1>
      </div>

      <div className={styles.list}>
        {items.map((item, index) => (
          <a key={index}  href={item.downloadUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <div className={styles.div}>
              <img className={styles.image} src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default EssentialCard;
