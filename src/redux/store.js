import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "It's my first post", likesCount: 10 },
        {
          id: 2,
          message: "I want to tell you something interesting",
          likesCount: 15,
        },
      ],
      newPostText: "New something",
    },
    dialogsPage: {
      dialogsData: [
        {
          id: 1,
          name: "Dima",
          avatar:
            "https://img.freepik.com/premium-vector/kitsune-mask-cartoon-character-icon-design_409025-876.jpg",
        },
        {
          id: 2,
          name: "Sasha",
          avatar:
            "https://img.freepik.com/premium-vector/kitsune-mask-cartoon-character-icon-design_409025-876.jpg",
        },
        {
          id: 3,
          name: "Artur",
          avatar:
            "https://img.freepik.com/premium-vector/kitsune-mask-cartoon-character-icon-design_409025-876.jpg",
        },
        {
          id: 4,
          name: "Julia",
          avatar:
            "https://img.freepik.com/premium-vector/kitsune-mask-cartoon-character-icon-design_409025-876.jpg",
        },
        {
          id: 5,
          name: "Roma",
          avatar:
            "https://img.freepik.com/premium-vector/kitsune-mask-cartoon-character-icon-design_409025-876.jpg",
        },
        {
          id: 6,
          name: "Elena",
          avatar:
            "https://img.freepik.com/premium-vector/kitsune-mask-cartoon-character-icon-design_409025-876.jpg",
        },
        {
          id: 7,
          name: "Nastya",
          avatar:
            "https://img.freepik.com/premium-vector/kitsune-mask-cartoon-character-icon-design_409025-876.jpg",
        },
      ],
      messagesData: [
        { id: 1, message: "Hi! How are you?" },
        { id: 2, message: "I want to tell you about my day." },
        { id: 3, message: "What's your fav hobby?" },
        { id: 4, message: "See u soon" },
        { id: 5, message: "I'm late. Sorry" },
        { id: 6, message: "Tomorrow" },
        { id: 7, message: "Think about it" },
      ],

      newMessageText: "It's great day today!",
    },
    sidebar: {
      friends: [
        {
          id: 1,
          name: "Artur",
          avatar:
            "https://img.freepik.com/premium-vector/minimalist-ink-drawing-samurai-warrior-standing-profile_518698-2435.jpg",
        },
        {
          id: 2,
          name: "Julia",
          avatar:
            "https://img.freepik.com/premium-vector/geisha-silhouette-cyberpunk-pattern-black-white-illustration_894890-28643.jpg",
        },
        {
          id: 3,
          name: "Nastya",
          avatar:
            "https://img.freepik.com/premium-vector/woman-kimono-sits-front-tree-with-flowers_959938-128.jpg",
        },
      ],
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
