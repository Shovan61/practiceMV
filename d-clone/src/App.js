import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, LogInPage } from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <LogInPage />}></Route>
        <Route exact path="/home" render={() => <Home />}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;