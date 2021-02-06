import axios from "../../axiosConfig";
import { Dispatch } from "redux";
import { GET_USER, GET_USER_REPOS, SET_USER_LOADING } from "../../store/actionTypes";

export function getUsersByLogin(login: string = "") {
  return async (dispatch: Dispatch<UserAction>) => {
    // dispatch({ type: SET_USER_LOADING, payload: true });

    const urs = `/users/${login}`;

    axios.get(urs).then(async (res) => {
      const userData = res.data;
      dispatch({ type: GET_USER, payload: userData });
    });
  };
}

export function getUserRepos(login: string = "") {
  return async (dispatch: Dispatch<UserAction>) => {
    const urs = `users/${login}/repos`;
    axios.get(urs).then((res) => {
      const reposData = res.data;
      dispatch({ type: GET_USER_REPOS, payload: reposData});
    });
  }
}
