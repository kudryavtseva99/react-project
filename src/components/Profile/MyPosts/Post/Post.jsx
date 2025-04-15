import s from "./Post.module.css";

const Post = () => {
  return (
    <div>
      <div className={s.item}>
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-kitsune-illustration_23-2149364567.jpg"
          alt="кицунэ"
        />
        Post 1
        <div>
          <span>like</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
