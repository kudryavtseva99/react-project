import styles from "./ProfileInfo.module.css";
import Preloader from "../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../assets/images/userPhoto.jpg";
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({
  profile,
  status,
  updateUserStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) return <Preloader />;

  const onMainPhotoSelected = (e) => {
    if (e.target.files?.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = async (formData) => {
    await saveProfile(formData);
    setEditMode(false);
  };

  const onCancel = () => {
    setEditMode(false);
  };

  return (
    <div>
      <div className={styles.description}>
        <div className={styles.content}>
          {/* Avatar */}
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
                  type="file"
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

          {/* Status */}
          <div className={styles.status}>
            <ProfileStatusWithHooks
              status={status}
              updateUserStatus={updateUserStatus}
            />
          </div>

          {/* Form / View */}
          {editMode ? (
            <ProfileDataForm
              initialValues={profile}
              profile={profile}
              onSubmit={onSubmit}
              onCancel={onCancel}
            />
          ) : (
            <ProfileData
              profile={profile}
              isOwner={isOwner}
              goToEditMode={() => setEditMode(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div className={styles.profileView}>
      {isOwner && (
        <div className={styles.actions}>
          <button className={styles.editBtn} onClick={goToEditMode}>
            Edit
          </button>
        </div>
      )}

      <div className={styles.sectionTitle}>Профиль</div>

      {/* Name */}
      <div className={styles.field}>
        <div className={styles.label}>Name</div>
        <div className={styles.value}>
          {profile.fullName || <span className={styles.muted}>не указано</span>}
        </div>
      </div>

      {/* About me */}
      <div className={styles.field}>
        <div className={styles.label}>About me</div>
        <div className={styles.value}>
          {profile.aboutMe || <span className={styles.muted}>не указано</span>}
        </div>
      </div>

      {/* Looking for a job */}
      <div className={styles.field}>
        <div className={styles.label}>Ищу работу</div>
        <div className={styles.value}>
          {profile.lookingForAJob ? (
            <span className={styles.positive}>Да</span>
          ) : (
            <span className={styles.negative}>Нет</span>
          )}
        </div>
      </div>

      {/* Skills */}
      <div className={styles.field}>
        <div className={styles.label}>My professional skills</div>
        <div className={styles.value}>
          {profile.lookingForAJobDescription ? (
            profile.lookingForAJobDescription
          ) : (
            <span className={styles.muted}>не указано</span>
          )}
        </div>
      </div>

      {/* Contacts */}
      <div className={styles.field}>
        <div className={styles.label}>Contacts</div>
        <div className={styles.contactsList}>
          {Object.entries(profile?.contacts || {}).map(([key, value]) => (
            <div key={key} className={styles.contactRow}>
              <span className={styles.contactKey}>{key}</span>
              <span className={value ? styles.contactValue : styles.nullValue}>
                {value || "не указано"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
