import styles from "./ProfileInfo.module.css";
import {
  createFieldHelper,
  Input,
  Textarea,
} from "./../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ profile, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.profileDesc}>
        <div>
          <button type="submit">save</button>
        </div>
        <div className={styles.fullName}>
          {createFieldHelper("fullName", "Full name", Input, [])}
        </div>
        <div className={styles.aboutMe}>
          {profile.aboutMe}{" "}
          {createFieldHelper("aboutMe", "About me", Textarea, [])}
        </div>
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
          Ищу работу: {profile.lookingForAJob}
          {createFieldHelper("lookingForAJob", "", Input, [], {
            type: "checkbox",
          })}
          <div className={styles.jobDesc}>
            {" "}
            {profile.lookingForAJobDescription}
            {createFieldHelper(
              "lookingForAJobDescription",
              "My professional skills",
              Textarea,
              [],
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "editProfile" })(
  ProfileDataForm,
);

export default ProfileDataFormReduxForm;
