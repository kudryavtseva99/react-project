export const authAPI = {
  me: jest.fn(() =>
    Promise.resolve({
      data: {
        resultCode: 0,
        data: { id: 1, email: "test@test.com", login: "test" },
      },
    })
  ),
  login: jest.fn(),
  logout: jest.fn(),
};

export const usersAPI = {
  getUsers: jest.fn(),
  followUsers: jest.fn(),
  unfollowUsers: jest.fn(),
  getProfile: jest.fn(),
};

export const profileAPI = {
  getProfile: jest.fn(),
  getStatus: jest.fn(),
  updateStatus: jest.fn(),
};
