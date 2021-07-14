import NavBar from "./Components/NavBar";
import CodeCricket from "./Components/CodeCricket";
import AllUsers from "./Components/AllUsers";
import "./App.css";
import NotFound from "./Components/NotFound";
import AddUser from "./Components/AddUser";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={CodeCricket} />
        <Route exact path="/all" component={AllUsers} />
        <Route exact path="/add" component={AddUser} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
