import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar friends={props.state.sidebar.friends} />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                  state={props.state.dialogsPage}
                  newMessageText={props.state.dialogsPage.newMessageText}
                  addNewMessage={props.addNewMessage}
                  updateNewMessageText={props.updateNewMessageText}
                />
              }
            />

            <Route
              path="/profile"
              element={
                <Profile
                  state={props.state.profilePage}
                  addPost={props.addPost}
                  updateNewPostText={props.updateNewPostText}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
