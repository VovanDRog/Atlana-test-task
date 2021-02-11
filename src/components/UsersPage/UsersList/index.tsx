import User from "./User";
import { SELECT_USER_NAME } from "../../../store/actionTypes";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import "./style.scss";

type Props = {
  list: IUser[],
};

function UsersList({list}: Props) {
  const dispatch: Dispatch<SelectUserNameAction> = useDispatch();

  function handleUserClick(login: string){
    dispatch({type: SELECT_USER_NAME, payload: login })
  }

  return (
    <div className="users-block">
      {list.map((user) => (
        <User
          key={user.id}
          user={user}
          onClick={handleUserClick}
        />
      ))}
    </div>
  );
}

export default UsersList;
