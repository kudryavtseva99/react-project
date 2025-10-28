import styles from "./ProfileInfo.module.css";
import Preloader from "../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      {/* <div>
        <img
          src="https://habrastorage.org/getpro/habr/upload_files/8e9/63c/507/8e963c50758de1ed63c11e1e8dcfe916.jpg"
          alt="Япония"
        ></img>
      </div> */}
      <div className={styles.description}>
        <img
          className={styles.userAvatar}
          src={props.profile.photos.large}
          alt="userProfilePhoto"
        />
        <ProfileStatus
          status={props.status}
          updateUserStatus={props.updateUserStatus}
        />
        <div className={styles.fullName}>{props.profile.fullName}</div>
        <div className={styles.aboutMe}>{props.profile.aboutMe}</div>
        <div className={styles.contacts}>
          {Object.entries(props.profile.contacts).map(([key, value]) => (
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
          {props.profile.lookingForAJob ? (
            <span className={styles.positive}>Да</span>
          ) : (
            <span className={styles.negative}>Нет</span>
          )}
          <div className={styles.jobDesc}>
            {props.profile.lookingForAJobDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
