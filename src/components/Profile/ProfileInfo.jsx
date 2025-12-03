import styles from "./ProfileInfo.module.css";
import Preloader from "../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateUserStatus }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={styles.description}>
        <img
          className={styles.userAvatar}
          src={profile.photos.large}
          alt="userProfilePhoto"
        />
        <ProfileStatusWithHooks
          status={status}
          updateUserStatus={updateUserStatus}
        />
        <div className={styles.fullName}>{profile.fullName}</div>
        <div className={styles.aboutMe}>{profile.aboutMe}</div>
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
            {profile.lookingForAJobDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
