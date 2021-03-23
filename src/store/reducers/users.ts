import * as actionTypes from "../actionTypes/users";

const initialState: UsersState = {
  list: [],
  searchInputValue: "",
  loading: false,
};

function usersReducer(
  state: UsersState = initialState,
  action: UsersAction | ChangeInputAction
) {
  switch (action.type) {
    case actionTypes.GET_USERS_LIST:
      return { ...state, list: action.payload, loading: false };
    case actionTypes.CHANGE_SEARCH_INPUT_VALUE:
      return { ...state, searchInputValue: action.payload };
    default:
      return state;
  }
}

export default usersReducer;
