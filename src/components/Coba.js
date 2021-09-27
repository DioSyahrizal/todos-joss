import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Content from "./Content";

function Coba() {
  const parentPath = "/content";
  return (
    <Switch>
      <Route to={`${parentPath}`} exact component={Content} />

      <Route to={`${parentPath}/test2`} exact>
        TEst2
      </Route>
      <Route render={() => <Redirect to={`${parentPath}`} />} />
    </Switch>
  );
}

export default Coba;
