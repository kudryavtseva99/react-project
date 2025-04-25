import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let postsData = [
  { id: 1, message: "It's my first post", likesCount: 10 },
  {
    id: 2,
    message: "I want to tell you something interesting",
    likesCount: 15,
  },
];

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      postsData={postsData}
      dialogsData={dialogsData}
      messagesData={messagesData}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
