import { useContext } from "react";
import s from "./Friends.module.css";
import FriendsItem from "./FriendsItem";
import StoreContext from "../../../StoreContext";

const Friends = (props) => {
  const store = useContext(StoreContext);
  const state = store.getState();
  let friendsElements = state.sidebar.friends.map((friend) => (
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
