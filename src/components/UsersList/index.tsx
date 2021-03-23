import User from "./User";
import { useHistory } from "react-router";
import "./style.scss";

type Props = {
  list: IUser[],
};

function UsersList({list}: Props): JSX.Element {
  const history = useHistory();

  function handleUserClick(login: string){
    history.push(`/${login}`)
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
