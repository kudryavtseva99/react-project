import preloader from "../../../assets/images/preloader.svg";
import styles from "./Preloader.module.css";

const Preloader = (props) => {
  return (
    <div>
      <img className={styles.preloader} src={preloader} alt="preloader" />
    </div>
  );
};

export default Preloader;
