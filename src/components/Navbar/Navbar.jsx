import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import FriendsContainer from "./Friends/FriendsContainer";
const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? `${s.item} ${s.activeLink}` : s.item
          }
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? `${s.item} ${s.activeLink}` : s.item
          }
        >
          Users
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) =>
            isActive ? `${s.item} ${s.activeLink}` : s.item
          }
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive ? `${s.item} ${s.activeLink}` : s.item
          }
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/music"
          className={({ isActive }) =>
            isActive ? `${s.item} ${s.activeLink}` : s.item
          }
        >
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? `${s.item} ${s.activeLink}` : s.item
          }
        >
          Settings
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/friends"
          className={({ isActive }) =>
            isActive ? `${s.item} ${s.activeLink}` : s.item
          }
        >
          Friends
        </NavLink>
        <FriendsContainer friends={props.friends} />
      </div>
    </nav>
  );
};

export default Navbar;
