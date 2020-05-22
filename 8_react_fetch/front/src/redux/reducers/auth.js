import { UserStorage } from "storage";
import { login as loginApi } from "../../api/auth";
import { showNotification } from "./notification";

const LOGIN_FETCH = "LOGIN_FETCH";
export const loginFetch = (login, password) => ({
  type: LOGIN_FETCH,
  payload: { login, password },
});
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";
const LOGOUT = "LOGOUT";

export const loginAction = (login, password) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_FETCH });
    loginApi(login, password)
      .then(({ data }) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { token: data.token, userName: data.user.username },
        });
        UserStorage.save(data.user.username, data.token);
      })
      .catch((e) => {
        dispatch(showNotification(e.message, "error"));
      });
  };
};

const initialState = () => {
  const data = UserStorage.load();
  return {
    userName: data.userName,
    token: data.token,
  };
};

export default (state = initialState(), action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const { userName, token } = action.payload;
      return { userName, token };
    case LOGOUT:
      return { userName: "", token: "" };
    default:
      return state;
  }
};
