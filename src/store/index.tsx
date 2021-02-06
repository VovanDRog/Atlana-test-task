import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import userReducer from "./reducers/user";
import usersReducer from "./reducers/users";

const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
});

const bindMiddleware = (middleware: Array<any>) => {
  // don't show the store in production
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const store = createStore(rootReducer, bindMiddleware([thunkMiddleware]))

export default store;
// export type RootState = ReturnType<typeof rootReducer>
export type RootState = {
  user: UserState,
  users: UsersState,
}
