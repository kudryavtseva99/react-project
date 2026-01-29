import React from "react";
import { Route, Routes } from "react-router-dom";
import { withSuspense } from "./hoc/withSuspence";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import WithRouter from "./components/utils/WithRouter/WithRouter";
import { compose } from "redux";
import { connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

const UsersContainer = withSuspense(
  React.lazy(() => import("./components/Users/UsersContainer"))
);
const News = withSuspense(React.lazy(() => import("./components/News/News")));
const Music = withSuspense(
  React.lazy(() => import("./components/Music/Music"))
);
const Settings = withSuspense(
  React.lazy(() => import("./components/Settings/Settings"))
);

const DialogsContainer = withSuspense(
  React.lazy(() => import("./components/Dialogs/DialogsContainer"))
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  WithRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
