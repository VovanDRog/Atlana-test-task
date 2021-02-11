import { useSelector } from "react-redux";
import UserPage from "./components/UserPage";
import UsersPage from "./components/UsersPage";
import { RootState } from "./store";
import "./App.scss";

function App() {
  const user = useSelector((state: RootState) => state.user);

  // I did not want to use a reaction router or analogues
  // so if user selected => I render another page
  const renderPage = () =>
    user.selectedName ? <UserPage /> : <UsersPage />;

  return <div className="App">{renderPage()}</div>;
}

export default App;
