import styles from "./Login.module.css";

const Login = (props) => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h1 className={styles.loginTitle}>Login</h1>
        {/* Здесь позже добавятся input и кнопки */}
      </div>
    </div>
  );
};

export default Login;
