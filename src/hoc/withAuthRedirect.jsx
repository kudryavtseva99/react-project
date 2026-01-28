import { Navigate } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import Preloader from "../components/common/Preloader/Preloader";

let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
  initialized: state.auth.initialized,
});

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      const { initialized, isAuth } = this.props;
      if (!initialized) {
        return <Preloader />;
      }
      if (!isAuth) {
        return <Navigate to="/login" replace />;
      }
      return <Component {...this.props} />;
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent,
  );

  return ConnectedAuthRedirectComponent;
};
