import { Field, reduxForm } from "redux-form";
import s from "./Dialogs.module.css";
import { Textarea } from "../common/Preloader/FormsControls/FormsControls";
import { required, maxLengthCreator } from "../utils/validators/validators";

export const AddNewMessageForm = (props) => {
  const maxLength50 = maxLengthCreator(50);
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="newMessageBody"
        placeholder="Enter your messsage"
        validate={[required, maxLength50]}
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
