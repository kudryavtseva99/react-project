import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/userPhoto.jpg";
import styles from "./Users.module.css";

export const User = ({ user, follow, unfollow, followingInProgress }) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small ? user.photos.small : userPhoto}
              className={styles.usersAvatar}
              alt="avatar"
            />
          </NavLink>
        </div>

        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.includes(user.id)}
              onClick={() => unfollow(user.id)}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.includes(user.id)}
              onClick={() => follow(user.id)}
            >
              Follow
            </button>
          )}
        </div>
      </span>

      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"u.location.country"}</div>
          <div>{"u.location.city"}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
