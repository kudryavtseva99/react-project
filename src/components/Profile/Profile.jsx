import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <img
        src="https://habrastorage.org/getpro/habr/upload_files/8e9/63c/507/8e963c50758de1ed63c11e1e8dcfe916.jpg"
        alt="Япония"
      ></img>
      <MyPosts />
    </div>
  );
};

export default Profile;
