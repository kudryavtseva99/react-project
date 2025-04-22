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

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
        <DialogItem name={dialogsData[6].name} id={dialogsData[6].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
        <Message message={messagesData[4].message} />
        <Message message={messagesData[5].message} />
        <Message message={messagesData[6].message} />
      </div>
    </div>
  );
};
export default Dialogs;
