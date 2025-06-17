import s from "./Friends.module.css";

const FriendsItem = (props) => {
  return (
    <div className={s.friendsItem}>
      <img
        src={props.avatar}
        alt={`${props.name}'s avatar`}
        className={s.avatar}
      />
      <span className="s.name">{props.name}</span>
    </div>
  );
};

export default FriendsItem;
