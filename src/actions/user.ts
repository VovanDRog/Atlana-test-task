import axios from "../axiosConfig";
import { Dispatch } from "redux";
import { GET_USER, GET_USER_REPOS } from "../store/actionTypes/user";

export function getUsersByLogin(login = "") {
  return async (dispatch: Dispatch<UserAction>) => {
    const urs = `/users/${login}`;

    axios
      .get(urs)
      .then((res) => res.data)
      .then((res) => {
        dispatch({ type: GET_USER, payload: res });
      })
      .catch((error) => {
        console.error("getUsersByLogin ERROR", error);
        dispatch({ type: GET_USER, payload: {} as IUser });
      });
  };
}

export function getUserRepos(login = "") {
  return async (dispatch: Dispatch<UserAction>) => {
    const urs = `users/${login}/repos`;
    axios
      .get(urs)
      .then((res) => res.data)
      .then((res) => {
        dispatch({ type: GET_USER_REPOS, payload: res });
      })
      .catch((error) => {
        console.error("getUserRepos ERROR", error);
        dispatch({ type: GET_USER_REPOS, payload: [] });
      });
  };
}
