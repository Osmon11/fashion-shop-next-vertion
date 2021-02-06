import { CREATEUSER, LOGGEDIN, loggedIn } from "../actionCreators";
import { errorHandler } from "./errorHandler";
import { passwordClient, accountsClient } from "../../apollo";
import { initialState } from "../initialState";
import Router from "next/router";

export function authenticationReducer(
  state = initialState.authenticationReducer,
  { type, value }
) {
  switch (type) {
    case CREATEUSER:
      return {
        ...state,
        registered: value,
      };
    case LOGGEDIN:
      return {
        ...state,
        ...value,
      };
    default:
      return state;
  }
}
// New user
export const createUser = (userData) => (dispatch) => {
  errorHandler(
    async () =>
      await passwordClient
        .createUser({
          ...userData,
        })
        .then((json) => {
          Router.replace("./login");
          console.log(json);
        })
  );
};
// User login
export const loginUser = (email, password) => async (dispatch) => {
  errorHandler(
    async () =>
      await accountsClient
        .loginWithService("password", {
          user: {
            email,
          },
          password,
        })
        .then(({ sessionId, user, tokens }) => {
          dispatch(loggedIn({ user, tokens, auth: sessionId }));
          Router.replace("./admin");
        })
  );
};
// Change password
export const changePassword = (oldPass, newPass) => (dispatch) => {
  errorHandler(
    async () =>
      await accountsPassword
        .changePassword(oldPass, newPass)
        .then((json) => console.log(json))
  );
};
// Add another email
export const addAnotherEmail = (newEmail) => (dispatch) => {
  errorHandler(
    async () =>
      await accountsPassword
        .addEmail(newEmail)
        .then((json) => console.log(json))
  );
};
// dispatch(loggedIn({...res, loggedIn: true}))
// User logout
export const logoutUser = () => async (dispatch) => {
  errorHandler(
    async () =>
      await accountsClient.logout(true).then((res) => {
        dispatch(loggedIn({ tokens: "", user: "", auth: false }));
        Router.replace("/");
      })
  );
};
