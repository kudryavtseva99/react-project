import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map((dialog) => (
    <DialogItem
      name={dialog.name}
      id={dialog.id}
      avatar={dialog.avatar}
      key={dialog.id}
    />
  ));

  let messagesElements = state.messagesData.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let onAddNewMessage = () => {
    props.addNewMessage();
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
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
              value={state.newMessageText}
            ></textarea>
          </div>
          <div>
            <button onClick={onAddNewMessage} className={s.button}>
              Send new message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
