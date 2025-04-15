import s from "./MyPosts.module.css";

import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div className={s.posts}>My Posts</div>
      <Post message="It's my first post" like="10" />
      <Post message="I want to tell you something interesting" like="15" />
    </div>
  );
};

export default MyPosts;
