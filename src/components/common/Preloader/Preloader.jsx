import styles from "./Preloader.module.css";

const Preloader = (props) => {
  return (
    <div>
      <div className={styles.preloaderWrapper}>
        <div className={styles.preloader}></div>
      </div>
    </div>
  );
};

export default Preloader;
