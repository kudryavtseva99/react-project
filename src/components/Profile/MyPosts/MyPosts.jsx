import s from "./MyPosts.module.css";

import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, message: "It's my first post", likesCount: 10 },
    {
      id: 2,
      message: "I want to tell you something interesting",
      likesCount: 15,
    },
  ];
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
      <Post
        message={postsData[0].message}
        likesCount={postsData[0].likesCount}
      />
      <Post
        message={postsData[1].message}
        likesCount={postsData[1].likesCount}
      />
    </div>
  );
};

export default MyPosts;
