import { NavLink } from "react-router-dom";
import s from "../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? `${s.dialog} ${s.activeItem}` : s.dialog
        }
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
