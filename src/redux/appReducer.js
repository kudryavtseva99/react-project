import { getAuthUserData } from "./authReducer";

const INIZIALIZED_SUCCSESS = "INIZIALIZED_SUCCSESS";

let initialState = {
  inizialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIZIALIZED_SUCCSESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: INIZIALIZED_SUCCSESS,
});

export const initializeApp = () => (dispatch) => {
  let propmise = dispatch(getAuthUserData());
  propmise.then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
