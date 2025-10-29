import s from "./MyPosts.module.css";
import { Field, reduxForm } from "redux-form";

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component="textarea"
        name="newPostText"
        placeholder="Enter your post"
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
