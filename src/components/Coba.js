import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

function Coba() {
  const parentPath = "/content";
  return (
    <Switch>
      <Route to={`${parentPath}/test`} exact>
        Test
      </Route>
      <Route to={`${parentPath}/test2`} exact>
        TEst2
      </Route>
      <Route render={() => <Redirect to={`${parentPath}/test`} />} />
    </Switch>
  );
}

export default Coba;
