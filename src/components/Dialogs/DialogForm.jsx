import { Field, reduxForm } from "redux-form";
import s from "./Dialogs.module.css";

export const AddNewMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component="textarea"
        name="newMessageBody"
        placeholder="Enter your messsage"
      />
      <div>
        <button className={s.button}>Send new message</button>
      </div>
    </form>
  );
};

const AddNewMessageFormRedux = reduxForm({
  form: "dialogAddMessageForm",
})(AddNewMessageForm);

export default AddNewMessageFormRedux;
