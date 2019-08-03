import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import Player from "./Player";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user" component={User} />
        <Route exact path="/player" component={Player} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
