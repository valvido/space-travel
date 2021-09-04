import React from "react";
import "./App.scss";
import LandingPage from "./routes/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainScreen from "./routes/MainScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/main" component={MainScreen}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
