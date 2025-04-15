import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-kitsune-illustration_23-2149364567.jpg"
          alt="кицунэ"
        />
        {props.message}
        <div>
          <span>like</span> {props.likesCount}
        </div>
      </div>
    </div>
  );
};

export default Post;
