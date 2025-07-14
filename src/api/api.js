import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "61b7d7dd-db68-4dd7-9f5c-f9cee721a95b",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  followUsers(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
  unfollowUsers(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
};
