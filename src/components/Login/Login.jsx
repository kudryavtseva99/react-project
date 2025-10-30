import { Field, reduxForm } from "redux-form";
import styles from "./Login.module.css";
import { Input } from "../common/Preloader/FormsControls/FormsControls";
import { required } from "../utils/validators/validators";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"login"}
          placeholder="Login"
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        {" "}
        <Field
          name={"password"}
          placeholder="Password"
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        {" "}
        <Field
          name={"rememberMe"}
          component={Input}
          type={"checkbox"}
          validate={[required]}
        />{" "}
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
