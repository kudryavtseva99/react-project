import { Field, reduxForm } from "redux-form";
import styles from "./Login.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={"login"} placeholder="Login" component={"input"} />
      </div>
      <div>
        {" "}
        <Field name={"password"} placeholder="Password" component={"input"} />
      </div>
      <div>
        {" "}
        <Field name={"rememberMe"} component={"input"} type={"checkbox"} />{" "}
        remember me
      </div>
      <div>
        <button>Log in</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log("Form Data:", formData);
  };
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h1 className={styles.loginTitle}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Login;
