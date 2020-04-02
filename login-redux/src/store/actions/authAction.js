import * as Types from "./types";

export const register = (user, history) => dispatch => {
  dispatch({
    type: Types.GET_USER,
    payload: {
      user
    }
  });
  history.push("/login", user);
};
