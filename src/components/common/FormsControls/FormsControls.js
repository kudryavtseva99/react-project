import styles from "./FormsControls.module.css";
import { Field } from "redux-form";

export const createField = (Element) => {
  return ({ input, meta: { touched, error }, ...props }) => {
    const hasError = touched && error;
    return (
      <div className={`${styles.formControl} ${hasError ? styles.error : ""}`}>
        <div>
          <Element {...input} {...props} />
        </div>
        {hasError && <span>{error}</span>}
      </div>
    );
  };
};

export const Textarea = createField("textarea");
export const Input = createField("input");

export const createFieldHelper = (
  name,
  placeholder,
  component,
  validators,
  props = {},
  text = ""
) => {
  return (
    <div>
      <Field
        name={name}
        placeholder={placeholder}
        component={component}
        validate={validators}
        {...props}
      />{" "}
      {text}
    </div>
  );
};
