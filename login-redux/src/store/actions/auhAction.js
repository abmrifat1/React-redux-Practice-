import * as Types from "./types";
import Axios from "axios";

export const register = user => dispatch => {
  Axios.post("/api/register", user)
    .then(res => {
      console.log(res.data);
    })
    .catch(error => {
      dispatch({
        type: Types.USERS_ERROR,
        payload: {
          error: error.response.data
        }
      });
    });
};
