import s from "./MyPosts.module.css";

import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div className={s.posts}>My Posts</div>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;
