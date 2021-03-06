import { useState } from "react";
import Repo from "./Repo";

function ReposList(props: IRepos[]): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");
  
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const {target: {value}} = e;
    setInputValue(value);
  }

  return (
    <div className="repos-wrapper">
      <input
        value={inputValue}
        placeholder="Search for User`s Repositories"
        onChange={handleInputChange}
      />

      {Object.values(props)
        .filter((item) => item.name.includes(inputValue))
        .map((item) => (
          <Repo key={item.id} {...item} />
        ))}
    </div>
  );
}

export default ReposList;
