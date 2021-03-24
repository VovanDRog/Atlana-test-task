import { createStore, applyMiddleware, combineReducers, Middleware } from "redux";
import thunkMiddleware from "redux-thunk";
import userReducer from "./reducers/user";
import usersReducer from "./reducers/users";

const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
});

const bindMiddleware = (middleware: Array<Middleware>) => {
  // don't show the store in production
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const store = createStore(rootReducer, bindMiddleware([thunkMiddleware]));

export default store;
// export type RootState = ReturnType<typeof rootReducer>
export type RootState = {
  user: UserState;
  users: UsersState;
};

export type AppDispatch = typeof store.dispatch;
