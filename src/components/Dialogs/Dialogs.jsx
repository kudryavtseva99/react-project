import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import React from "react";

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

  let newMessageElement = React.createRef();

  let addNewMessage = () => {
    props.addNewMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.textArea}>
        <textarea
          onChange={onMessageChange}
          ref={newMessageElement}
          value={props.newMessageText}
        ></textarea>
        <div>
          <button onClick={addNewMessage} className={s.button}>
            Add new message
          </button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
