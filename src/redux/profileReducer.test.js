jest.mock("../api/api", () => ({
  usersAPI: {
    getProfile: jest.fn(),
  },
  profileAPI: {
    getStatus: jest.fn(),
    updateStatus: jest.fn(),
  },
}));

import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profileReducer";

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

test("message of new post should be correct", () => {
  let action = addPostActionCreator("Yo");

  let newState = profileReducer(state, action);

  expect(newState.postsData[2].message).toBe("Yo");
});

test("after deleting length of postsData should be decrement", () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.postsData.length).toBe(1); // проверяем длину массива
});

test("after deleting length of postsData should be decrement if id is incorrect", () => {
  let action = deletePost(1000);

  let newState = profileReducer(state, action);

  expect(newState.postsData.length).toBe(2); // проверяем длину массива
});
