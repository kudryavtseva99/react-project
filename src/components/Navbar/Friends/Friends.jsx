import s from "./Friends.module.css";
import FriendsItem from "./FriendsItem";

const Friends = (props) => {
  let friendsElements = props.friends.map((friend) => (
    <FriendsItem
      name={friend.name}
      id={friend.id}
      avatar={friend.avatar}
      key={friend.id}
    />
  ));

  return <div className={s.friendsWrapper}>{friendsElements}</div>;
};

export default Friends;
