import { Field, reduxForm } from "redux-form";
import s from "./Dialogs.module.css";
import { Textarea } from "../common/FormsControls/FormsControls";
import { required, maxLengthCreator } from "../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);
const validators = [required, maxLength50];

export const AddNewMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="newMessageBody"
        placeholder="Enter your messsage"
        validate={validators}
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
