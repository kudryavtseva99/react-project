import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div>
          <NavLink
            to="/dialogs/1"
            className={({ isActive }) =>
              isActive ? `${s.dialog} ${s.activeItem}` : s.dialog
            }
          >
            Dima
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/dialogs/2"
            className={({ isActive }) =>
              isActive ? `${s.dialog} ${s.activeItem}` : s.dialog
            }
          >
            Sasha
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/dialogs/3"
            className={({ isActive }) =>
              isActive ? `${s.dialog} ${s.activeItem}` : s.dialog
            }
          >
            Artur
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/dialogs/4"
            className={({ isActive }) =>
              isActive ? `${s.dialog} ${s.activeItem}` : s.dialog
            }
          >
            Julia
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/dialogs/5"
            className={({ isActive }) =>
              isActive ? `${s.dialog} ${s.activeItem}` : s.dialog
            }
          >
            Roma
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/dialogs/6"
            className={({ isActive }) =>
              isActive ? `${s.dialog} ${s.activeItem}` : s.dialog
            }
          >
            Elena
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/dialogs/7"
            className={({ isActive }) =>
              isActive ? `${s.dialog} ${s.activeItem}` : s.dialog
            }
          >
            Nastya
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/dialogs/8"
            className={({ isActive }) =>
              isActive ? `${s.dialog} ${s.activeItem}` : s.dialog
            }
          >
            Valeria
          </NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi! How are you?</div>
        <div className={s.message}>What's your hobby?</div>
        <div className={s.message}>How is your day today?</div>
      </div>
    </div>
  );
};
export default Dialogs;
