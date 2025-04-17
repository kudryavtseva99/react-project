import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          src="https://habrastorage.org/getpro/habr/upload_files/8e9/63c/507/8e963c50758de1ed63c11e1e8dcfe916.jpg"
          alt="Япония"
        ></img>
      </div>
      <div className={s.description}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
