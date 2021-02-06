import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../store";
import { searchUsersByName } from "./actions";
import * as actionTypes from "../../store/actionTypes";
import UsersList from "./UsersList";

function UsersPage() {
  const users = useSelector((state: RootState) => state.users);
  const [inputValue, setInputValue] = useState<string | undefined>(users.searchInputValue);
  const dispatch: Dispatch<any> = useDispatch();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const {target: {value}} = e;
    setInputValue(value);
    dispatch({type: actionTypes.CHANGE_SEARCH_INPUT_VALUE, payload: value});
    
    if (value !== "") {
      dispatch(searchUsersByName(value));
    } else {
      dispatch({type: actionTypes.GET_USERS_LIST, payload: []});
    }
  }

  return (
    <div className="block-wrapper">
      <h1>GitHub Searcher</h1>

      <input
        value={inputValue}
        placeholder="Search for Users"
        onChange={handleInputChange}
      />

      <UsersList
        list={users.list}
      />
    </div>
  );
}

export default UsersPage;
