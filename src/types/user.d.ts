interface IUser {
  id: number;
  login: string;
  avatar_url: string;
  email: string;
  location: string;
  followers: number;
  following: number;
  created_at: string;
  bio: string;

  // All other props
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  [x: string]: any;
}

interface IRepos {
  id: number;
  name: string;
  html_url: string; // url to github project
  stargazers_count: number; // count of stars
  forks_count: number; // count of forks]

  // All other props
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  [x: string]: any;
}

type UserState = {
  selectedName: string | undefined;

  item: IUser;
  userLoading: boolean;

  repos: IRepos[];
  reposLoading: boolean;
};

type SelectUserNameAction = {
  type: string;
  payload: string;
};

type UserAction = {
  type: string;
  payload: IUser | IRepos[] | boolean;
};
