import "./App.css";
import { Switch, Route } from "react-router";

import HomePage from "./pages/homepage/homepage.component";

const Hats = () => {
  return (
    <div>
      <h1>Hats</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop/hats" component={Hats}></Route>
      </Switch>
    </div>
  );
}

export default App;
