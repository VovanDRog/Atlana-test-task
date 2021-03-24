import "./style.scss";

function Repo(props: IRepos): JSX.Element {
  const { name, html_url, stargazers_count, forks_count } = props;

  function onClick(): void {
    const win = window.open(html_url, "_blank");
    win?.focus();
  }

  return (
    <div className="card scale repo-block pointer" onClick={onClick}>
      <span>{name}</span>
      <div className="repo-info">
        <span className="forks">Forks: {forks_count}</span>
        <span className="stars">Stars: {stargazers_count}</span>
      </div>
    </div>
  );
}

export default Repo;
