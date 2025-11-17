jest.mock("../api/api", () => ({
  usersAPI: {
    getProfile: jest.fn(),
  },
  profileAPI: {
    getStatus: jest.fn(),
    updateStatus: jest.fn(),
  },
}));

import profileReducer, { addPostActionCreator } from "./profileReducer";

let state = {
  postsData: [
    { id: 1, message: "It's my first post", likesCount: 10 },
    {
      id: 2,
      message: "I want to tell you something interesting",
      likesCount: 15,
    },
  ],
};

test("length of postsData should be incremented", () => {
  let action = addPostActionCreator("Yo");

  let newState = profileReducer(state, action);

  expect(newState.postsData.length).toBe(3);
});
