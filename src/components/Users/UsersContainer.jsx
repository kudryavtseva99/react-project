import { connect } from "react-redux";
import {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
  setTotalUsersCountActionCreator,
} from "../../redux/usersReducer";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    setCurrentPage: (numberPage) => {
      dispatch(setCurrentPageActionCreator(numberPage));
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCountActionCreator(totalUsersCount));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
