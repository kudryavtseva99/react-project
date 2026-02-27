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
import { Navigate } from "react-router-dom";

class ProfileContainer extends React.Component {
  refreshProfile() {
    const routeUserId = this.props.params.userId;
    const authorizedUserId = this.props.authorizedUserId;

    const currentUserId = routeUserId || authorizedUserId;

    // Если в адресе есть userId -> открываем этот профиль,
    // если нет userId, но пользователь авторизован -> открываем его профиль
    if (currentUserId) {
      this.props.getUserProfile(currentUserId);
      this.props.getUserStatus(currentUserId);
    }
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.params.userId !== prevProps.params.userId ||
      this.props.authorizedUserId !== prevProps.authorizedUserId
    ) {
      this.refreshProfile();
    }
  }

  render() {
    const routeUserId = this.props.params.userId;
    const authorizedUserId = this.props.authorizedUserId;

    // если не авторизован и в url нет userId -> на login
    if (!routeUserId && !authorizedUserId) {
      return <Navigate to="/login" />;
    }

    const isOwner = routeUserId
      ? String(routeUserId) === String(authorizedUserId)
      : !!authorizedUserId;

    return (
      <Profile
        {...this.props}
        isOwner={isOwner}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
        savePhoto={this.props.savePhoto}
        saveProfile={this.props.saveProfile}
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
