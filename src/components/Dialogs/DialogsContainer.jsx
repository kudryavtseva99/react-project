import {
  addNewMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addNewMessage: () => {
      dispatch(addNewMessageActionCreator());
    },
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

let AuthRedirectHOC = withAuthRedirect(Dialogs);

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectHOC);
export default DialogsContainer;
