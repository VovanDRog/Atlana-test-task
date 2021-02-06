import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../store";
import { getUsersByLogin, getUserRepos } from "./actions";
import ReposList from "./ReposList";
import UserInfo from "./UserInfo";
import * as actionTypes from "../../store/actionTypes";
import Loader from "../Loader";
import "./style.css";

function UserPage() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    if (user.selectedName !== user.item.login) {
      // if its not saved in storage user => get another
      dispatch(getUsersByLogin(user.selectedName));
      dispatch(getUserRepos(user.selectedName));
    } else {
      // set loading to false
      dispatch({ type: actionTypes.SET_USER_LOADING, payload: false });
      dispatch({ type: actionTypes.SET_USER_REPOS_LOADING, payload: false });
    }
  }, [user.selectedName]);

  function handleBackClick() {
    dispatch({ type: actionTypes.SELECT_USER_NAME, payload: undefined });
  }

  return (
    <div className="block-wrapper">
      <span className="back-btn pointer" onClick={handleBackClick}>
        &laquo;
      </span>
      <h1>GitHub Searcher</h1>

      <Loader loading={user.userLoading}>
        <Fragment>
          <UserInfo {...user.item} />

          <Loader loading={user.reposLoading}>
            <ReposList {...user.repos} />
          </Loader>
        </Fragment>
      </Loader>
    </div>
  );
}

export default UserPage;
