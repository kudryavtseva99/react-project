let rerenderEntireTree = () => {
  console.log("state changed");
};

let state = {
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
    messagesData: [
      { id: 1, message: "Hi! How are you?" },
      { id: 2, message: "I want to tell you about my day." },
      { id: 3, message: "What's your fav hobby?" },
      { id: 4, message: "See u soon" },
      { id: 5, message: "I'm late. Sorry" },
      { id: 6, message: "Tomorrow" },
      { id: 7, message: "Think about it" },
    ],
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
};

// посты
export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

// диалоги
export const addNewMessage = () => {
  let newMessage = {
    id: 8,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messagesData.push(newMessage);
  state.dialogsPage.newMessageText = "";
  rerenderEntireTree(state);
};

export const updateNewMessageText = (newMes) => {
  state.dialogsPage.newMessageText = newMes;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
