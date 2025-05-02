import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));

  let messagesElements = props.state.messagesData.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};
export default Dialogs;
