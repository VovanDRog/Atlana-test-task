import axios from "../../axiosConfig";
import { Dispatch } from "redux";
import { GET_USERS_LIST } from "../../store/actionTypes";

export function searchUsersByName(name: string = "") {
  return async (dispatch: Dispatch<UsersAction>) => {
    // per_page => limit
    const urs = `search/users?q=${name}&type=user`;
    axios.get(urs).then(async (res) => {
      const {items} = res.data;

      await Promise.all(
        items.map(async (item: IUser) => {
          item.public_repos = await getCountOfRepos(item.login);
          return item;
        })
      );

      dispatch({ type: GET_USERS_LIST, payload: items });
    });
  };
}

async function getCountOfRepos(userName: string = "") {
  const urs = `users/${userName}`;
  return axios.get(urs).then((res) => {
    const { public_repos } = res.data;
    // get only public_repos => count of public user repos
    return public_repos;
  });
}
