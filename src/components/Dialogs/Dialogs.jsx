import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Artur" },
    { id: 4, name: "Julia" },
    { id: 5, name: "Roma" },
    { id: 6, name: "Elena" },
    { id: 7, name: "Nastya" },
  ];

  let messagesData = [
    { id: 1, message: "Hi! How are you?" },
    { id: 2, message: "I want to tell you about my day." },
    { id: 3, message: "What's your fav hobby?" },
    { id: 4, message: "See u soon" },
    { id: 5, message: "I'm late. Sorry" },
    { id: 6, message: "Tomorrow" },
    { id: 7, message: "Think about it" },
  ];

  let dialogsElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));

  let messagesElements = messagesData.map((m) => (
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
