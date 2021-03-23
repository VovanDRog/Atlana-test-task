import UserPage from "./pages/UserPage";
import UsersPage from "./pages/UsersPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/:id">
            <UserPage />
          </Route>
          <Route exact path="/">
            <UsersPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
