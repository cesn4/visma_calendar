import React, { FunctionComponent } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Main from "./views/Main";

const App: FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/calendar/0" />
        </Route>
        <Route path="/calendar/:slug">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
