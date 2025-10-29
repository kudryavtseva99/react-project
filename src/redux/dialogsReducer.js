const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      let newMessage = {
        id: state.messagesData.length + 1,
        message: action.newMessageBody,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      };

    default:
      return state;
  }
};

export const addNewMessageActionCreator = (newMessageBody) => {
  return {
    type: ADD_NEW_MESSAGE,
    newMessageBody,
  };
};

export default dialogsReducer;
