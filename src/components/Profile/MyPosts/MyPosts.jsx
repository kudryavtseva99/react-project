import React from "react";
import s from "./MyPosts.module.css";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/state";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // let action = { type: "UPDATE-NEW-POST-TEXT", newText: text };
    let action = updateNewPostActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div>
      <div className={s.postsBlock}>
        <h3>My Posts</h3>
      </div>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
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
