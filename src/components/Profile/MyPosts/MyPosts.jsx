import React from "react";
// import { createRef } from "react";
import s from "./MyPosts.module.css";

import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div>
      <div className={s.postsBlock}>
        <h3>My Posts</h3>
      </div>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div>
        <button onClick={addPost} className={s.button}>
          Add new post
        </button>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
