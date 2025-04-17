import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";

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
        <div className={s.message}>Hi! How are you?</div>
        <div className={s.message}>What's your hobby?</div>
        <div className={s.message}>How is your day today?</div>
      </div>
    </div>
  );
};
export default Dialogs;
