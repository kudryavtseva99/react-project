import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import {
  addNewMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((dialog) => (
    <DialogItem
      name={dialog.name}
      id={dialog.id}
      avatar={dialog.avatar}
      key={dialog.id}
    />
  ));

  let messagesElements = props.state.messagesData.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  // let newMessageElement = React.createRef();

  let addNewMessage = () => {
    props.dispatch(addNewMessageActionCreator());
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div className={s.textArea}>
          <div>
            <textarea
              placeholder="Enter your messsage"
              onChange={onMessageChange}
              value={props.newMessageText}
            ></textarea>
          </div>
          <div>
            <button onClick={addNewMessage} className={s.button}>
              Send new message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
