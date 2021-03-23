import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../store";
import { getUserRepos, getUsersByLogin } from "../../actions/user";
import * as actionTypes from "../../store/actionTypes/user";
import Loader from "../../components/Loader";
import UserInfo from "../../components/UserInfo";
import ReposList from "../../components/ReposList";
import { useHistory, useParams } from "react-router";
import "./style.scss";

type ParamTypes = {
  id: string
}

function UserPage(): JSX.Element {
  const history = useHistory();
  const { id } = useParams<ParamTypes>();
  const user = useSelector((state: RootState) => state.user);
  const dispatch: Dispatch<any> = useDispatch();
  

  useEffect(() => {
    if (id !== user.item.login) {
      // if its not saved in storage user => get another
      dispatch(getUsersByLogin(id));
      dispatch(getUserRepos(id));
    } else {
      // set loading to false
      dispatch({ type: actionTypes.SET_USER_LOADING, payload: false });
      dispatch({ type: actionTypes.SET_USER_REPOS_LOADING, payload: false });
    }
  }, [id]);

  function handleBackClick(): void {
    history.push("/");
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
