import { usersAPI } from "../api/api";
import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = "socialNetwork/profile/ADD-POST";
const SET_USER_PROFILE = "socialNetwork/profile/SET_USER_PROFILE";
const SET_USER_STATUS = "socialNetwork/profile/SET_USER_STATUS";
const DELETE_POST = "socialNetwork/profile/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
  postsData: [
    { id: 1, message: "It's my first post", likesCount: 10 },
    {
      id: 2,
      message: "I want to tell you something interesting",
      likesCount: 15,
    },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.postsData.length + 1,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
      };

    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter((p) => p.id !== action.postId),
      };

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });

export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  const status = response.data || "Статус не установлен";
  dispatch(setUserStatus(status));
};

export const updateUserStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const state = getState();
  const userId = state.auth.userId || state.profilePage.profile?.userId; // ✅ fallback

  try {
    const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
      if (userId) {
        await dispatch(getUserProfile(userId)); // ✅ обновляем профиль после save
      }
      return Promise.resolve();
    } else {
      const message =
        response.data.messages?.[0] || "Ошибка сохранения профиля";
      dispatch(stopSubmit("editProfile", { _error: message })); // ✅ ошибка в форму
      return Promise.reject(message);
    }
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.response?.data?.messages?.[0] ||
      "The request is invalid.";

    dispatch(stopSubmit("editProfile", { _error: message }));
    return Promise.reject(message);
  }
};
export default profileReducer;
