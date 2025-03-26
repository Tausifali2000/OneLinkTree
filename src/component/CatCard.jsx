import styles from "./cssModules/CatCard.module.css";

const CatCard = ({ name }) => {
  return (
    <div className={styles.container}>
      <p>{name}</p>
    </div>
  );
};

export default CatCard;
