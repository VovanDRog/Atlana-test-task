import * as actionTypes from "../actionTypes/user";

const initialState: UserState = {
  selectedName: "",

  item: {} as IUser, // or <IUser>{}
  userLoading: true,

  repos: [],
  reposLoading: true,
};

function userReducer(state: UserState = initialState, action: UserAction) {
  switch (action.type) {
    case actionTypes.GET_USER:
      return { ...state, item: action.payload, userLoading: false };
    case actionTypes.SET_USER_LOADING:
      return { ...state, userLoading: action.payload };

    case actionTypes.GET_USER_REPOS:
      return { ...state, repos: action.payload, reposLoading: false };
    case actionTypes.SET_USER_REPOS_LOADING:
      return { ...state, reposLoading: action.payload };

    default:
      return state;
  }
}

export default userReducer;
