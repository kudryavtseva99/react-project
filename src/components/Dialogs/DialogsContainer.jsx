import {
  addNewMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;
        let onAddNewMessage = () => {
          store.dispatch(addNewMessageActionCreator());
        };

        let onMessageChange = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };

        return (
          <Dialogs
            addNewMessage={onAddNewMessage}
            updateNewMessageText={onMessageChange}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
export default DialogsContainer;
