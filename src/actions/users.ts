import axios from "../axiosConfig";
import { Dispatch } from "redux";
import { GET_USERS_LIST } from "../store/actionTypes";

export function searchUsersByName(name = "") {
  return async (dispatch: Dispatch<UsersAction>) => {
    const urs = `search/users?q=${name}&type=user`;
    axios
      .get(urs)
      .then(async (res) => {
        const { items } = res.data;

        await Promise.all(
          items.map(async (item: IUser) => {
            item.public_repos = await getCountOfRepos(item.login);
            return item;
          })
        );

        dispatch({ type: GET_USERS_LIST, payload: items });
      })
      .catch((error) => {
        console.error("searchUsersByName ERROR", error);
        dispatch({ type: GET_USERS_LIST, payload: [] });
      });
  };
}

async function getCountOfRepos(userName = "") {
  const urs = `users/${userName}`;
  return axios
    .get(urs)
    .then((res) => res.data)
    .then(({ public_repos }) => public_repos)
    .catch((error) => {
      console.error("getCountOfRepos ERROR", error);
      return [];
    });
}
