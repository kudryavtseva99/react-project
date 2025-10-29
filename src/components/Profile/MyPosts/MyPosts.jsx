import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddNewPostFormRedux from "./MyPostsForm";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  const onAddPost = (formData) => {
    props.addPost(formData.newPostText);
  };

  return (
    <div>
      <div className={s.postsBlock}>
        <h3>My Posts</h3>
      </div>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
