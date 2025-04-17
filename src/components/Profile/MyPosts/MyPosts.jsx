import s from "./MyPosts.module.css";

import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div className={s.postsBlock}>
        <h3>My Posts</h3>
      </div>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button className={s.button}>Add new post</button>
      </div>
      <Post message="It's my first post" likesCount="10" />
      <Post
        message="I want to tell you something interesting"
        likesCount="15"
      />
    </div>
  );
};

export default MyPosts;
