import "./style.scss";

type Props = {
  user: IUser;
  onClick: Function;
};

function User(props: Props) {
  const { user, onClick } = props;
  const { login, avatar_url, public_repos } = user;
  return (
    <div
      className="card scale user-block pointer"
      onClick={() => onClick(user.login)}
    >
      <img src={avatar_url} alt="user-avatar" />

      <span className="user-name">{login}</span>
      <span className="repo-count">Repo: {public_repos}</span>
    </div>
  );
}

export default User;
