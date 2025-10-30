import s from "./MyPosts.module.css";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { Textarea } from "../../common/Preloader/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="newPostText"
        placeholder="Enter your post"
        validate={[required, maxLength10]}
      />
      <div>
        <button className={s.button}>Add new post</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: "profileAddNewPostForm" })(
  AddNewPostForm
);

export default AddNewPostFormRedux;
