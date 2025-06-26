import {
  addNewMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let onAddNewMessage = () => {
    props.store.dispatch(addNewMessageActionCreator());
  };

  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <Dialogs
      addNewMessage={onAddNewMessage}
      updateNewMessageText={onMessageChange}
      dialogsPage={state}
    />
  );
};
export default DialogsContainer;
