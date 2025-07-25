import { NavLink } from "react-router-dom";
import s from "../Dialogs.module.css";

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;
  return (
    <div className="wrapper">
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? `${s.dialog} ${s.activeItem}` : s.dialog
        }
      >
        <div className={s.dialogItemContent}>
          <img
            src={props.avatar}
            alt={`${props.name}'s avatar`}
            className={s.avatar}
          />
          <span>{props.name}</span>
        </div>
      </NavLink>
    </div>
  );
};

export default DialogItem;
