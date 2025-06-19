import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        postsData={props.state.postsData}
        newPostText={props.state.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
