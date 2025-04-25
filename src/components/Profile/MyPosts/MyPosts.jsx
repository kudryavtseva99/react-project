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

  let postsElements = postsData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
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
      {postsElements}
    </div>
  );
};

export default MyPosts;
