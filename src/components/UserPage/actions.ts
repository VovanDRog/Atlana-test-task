import axios from "../../axiosConfig";
import { Dispatch } from "redux";
import { GET_USER, GET_USER_REPOS } from "../../store/actionTypes";

export function getUsersByLogin(login = "") {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return async (dispatch: Dispatch<UserAction>) => {

    const urs = `/users/${login}`;

    axios.get(urs).then(async (res) => {
      const userData = res.data;
      dispatch({ type: GET_USER, payload: userData });
    });
  };
}

export function getUserRepos(login = "") {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return async (dispatch: Dispatch<UserAction>) => {
    const urs = `users/${login}/repos`;
    axios.get(urs).then((res) => {
      const reposData = res.data;
      dispatch({ type: GET_USER_REPOS, payload: reposData});
    });
  }
}
