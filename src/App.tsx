import React, { FunctionComponent, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { DateTime } from "luxon";

import Main from "./views/Main";
import { SetCurrentDate } from "./store/actions";

const App: FunctionComponent = () => {
  const currentDate = DateTime.local().toISODate()
  useEffect(() => {
    SetCurrentDate(currentDate);
  }, [currentDate]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to={`/calendar/${currentDate}`} />
        </Route>
        <Route path="/calendar/:slug">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
