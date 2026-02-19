import s from "./ProfileDataForm.module.css";
import { reduxForm } from "redux-form";
import {
  createFieldHelper,
  Input,
  Textarea,
} from "./../common/FormsControls/FormsControls";

const ProfileDataForm = ({ profile, handleSubmit, error, onCancel }) => {
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.sectionTitle}>Редактирование профиля</div>

      {/* Name */}
      <div className={s.field}>
        <div className={s.label}>Name</div>
        <div className={s.inputWrap}>
          {createFieldHelper("fullName", "Full name", Input, [])}
        </div>
      </div>

      {/* About me */}
      <div className={s.field}>
        <div className={s.label}>About me</div>
        <div className={s.inputWrap}>
          {createFieldHelper("aboutMe", "About me", Textarea, [])}
        </div>
      </div>

      {/* Looking for a job */}
      <div className={s.field}>
        <div className={s.checkboxRow}>
          <span className={s.label}>Ищу работу</span>
          {createFieldHelper("lookingForAJob", "", Input, [], {
            type: "checkbox",
          })}
        </div>
      </div>

      {/* Professional skills */}
      <div className={s.field}>
        <div className={s.label}>My professional skills</div>
        <div className={s.inputWrap}>
          {createFieldHelper(
            "lookingForAJobDescription",
            "My professional skills",
            Textarea,
            [],
          )}
        </div>
      </div>

      {/* Contacts */}
      <div className={s.field}>
        <div className={s.label}>Contacts</div>
        <div className={s.contactsGrid}>
          {Object.keys(profile.contacts).map((key) => (
            <div key={key} className={s.field}>
              <div className={s.label}>{key}</div>
              <div className={s.inputWrap}>
                {createFieldHelper(`contacts.${key}`, key, Input, [])}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={s.actions}>
        <button className={s.saveBtn} type="submit">
          Save
        </button>
        <button className={s.cancelBtn} type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "editProfile" })(
  ProfileDataForm,
);

export default ProfileDataFormReduxForm;
