import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeView from "../views/HomeView";
import DetailsView from "../views/DetailsView";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/details">
          <DetailsView />
        </Route>
        <Route path="/">
          <HomeView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
