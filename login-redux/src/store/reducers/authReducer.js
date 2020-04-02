import * as Types from "../actions/types";

const init = {
  isAuthenticated: false,
  user: {},
  error: {}
};

const authReducer = (state = init, action) => {
  switch (action.type) {
    case Types.SET_USER: {
      return {
        user: action.payload.user,
        isAuthenticated: Object.keys(action.payload.user).length === 0,
        error: {}
      };
    }
    case Types.GET_USER: {
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        error: "no error"
      };
    }
    default:
      return state;
  }
};

export default authReducer;
