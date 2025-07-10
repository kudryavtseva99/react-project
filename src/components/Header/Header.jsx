import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img
        src="https://img.freepik.com/premium-vector/hanami-japanese-flower-logo-design-cherry-blossom-vector-illustration_691652-143.jpg"
        alt=""
      ></img>
      <div className={styles.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
