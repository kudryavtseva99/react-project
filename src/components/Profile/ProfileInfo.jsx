import styles from "./ProfileInfo.module.css";
import Preloader from "../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../assets/images/userPhoto.jpg";

const ProfileInfo = ({
  profile,
  status,
  updateUserStatus,
  isOwner,
  savePhoto,
}) => {
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className={styles.description}>
        <div className={styles.avatarBlock}>
          <img
            className={styles.userAvatar}
            src={profile.photos.large || userPhoto}
            alt="userProfilePhoto"
          />
          {isOwner && (
            <>
              <input
                id="avatarUpload"
                className={styles.fileInput}
                type={"file"}
                onChange={onMainPhotoSelected}
              />
              <label
                htmlFor="avatarUpload"
                className={styles.avatarPlus}
                title="change the avatar"
              >
                +
              </label>
            </>
          )}
        </div>
        <ProfileStatusWithHooks
          status={status}
          updateUserStatus={updateUserStatus}
        />
        <div className={styles.fullName}>{profile.fullName}</div>
        <div className={styles.aboutMe}>About me:{profile.aboutMe}</div>
        <div className={styles.contacts}>
          {Object.entries(profile.contacts).map(([key, value]) => (
            <div key={key} className={styles.contactItem}>
              <span className={styles.contactKey}>{key}:</span>{" "}
              {value ? (
                <span className={styles.contactValue}>{value}</span>
              ) : (
                <span className={styles.nullValue}>не указано</span>
              )}
            </div>
          ))}
        </div>
        <div className={styles.jobStatus}>
          Ищу работу:{" "}
          {profile.lookingForAJob ? (
            <span className={styles.positive}>Да</span>
          ) : (
            <span className={styles.negative}>Нет</span>
          )}
          <div className={styles.jobDesc}>
            {" "}
            {profile.lookingForAJobDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
