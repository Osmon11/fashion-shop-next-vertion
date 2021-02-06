export const CREATEUSER = "CREATEUSER";
export const LOGGEDIN = "LOGGEDIN";

export function createUser(value) {
  return {
    type: CREATEUSER,
    value,
  };
}

export function loggedIn(value) {
  return {
    type: LOGGEDIN,
    value,
  };
}
