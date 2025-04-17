import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Dima" id="1" />
        <DialogItem name="Sasha" id="2" />
        <DialogItem name="Artur" id="3" />
        <DialogItem name="Julia" id="4" />
        <DialogItem name="Roma" id="5" />
        <DialogItem name="Elena" id="6" />
        <DialogItem name="Nastya" id="7" />
      </div>
      <div className={s.messages}>
        <Message message="Hi! How are you?" />
        <Message message="I want to tell you about my day." />
        <Message message="What's your fav hobby?" />
        <Message message="See u soon" />
        <Message message="I'm late. Sorry" />
        <Message message="Tomorrow" />
        <Message message="Think about it" />
      </div>
    </div>
  );
};
export default Dialogs;
