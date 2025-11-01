import { Field, reduxForm } from "redux-form";
import styles from "./Login.module.css";
import { Input } from "../common/Preloader/FormsControls/FormsControls";
import { required } from "../utils/validators/validators";
import { login } from "../../redux/authReducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"email"}
          placeholder="Email"
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        {" "}
        <Field
          name={"password"}
          placeholder="Password"
          type="password"
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
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h1 className={styles.loginTitle}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
