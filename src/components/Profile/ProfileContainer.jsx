import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
  savePhoto,
  saveProfile,
} from "../../redux/profileReducer";
import WithRouter from "../utils/WithRouter/WithRouter";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  refreshProfile() {
    const userId = this.props.params.userId;
    const authorizedUser = this.props.authorizedUserId;
    if (!userId && !authorizedUser) {
      this.props.navigate("/login");
      return;
    }
    const currentId = userId || authorizedUser;
    this.props.getUserProfile(currentId);
    this.props.getUserStatus(currentId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.params.userId !== prevProps.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
        savePhoto={this.props.savePhoto}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    savePhoto,
    saveProfile,
  }),
  WithRouter,
)(ProfileContainer);
