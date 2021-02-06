type UsersState = {
  list: IUser[];
  searchInputValue: string | undefined;
  loading: boolean;
};

type UsersAction = {
  type: string;
  payload: IUser[];
};

type ChangeInputAction = {
  type: string;
  payload: string | undefined;
};

type UserAction = {
  type: string;
  payload: IUser[];
};
