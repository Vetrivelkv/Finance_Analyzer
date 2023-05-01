import React, { Suspense } from "react";
import { Router, Switch } from "react-router-dom";
import history from "./History";
import * as LazyComponent from "../utils/LazyLoaded";
import PrivateRoute from "../utils/PrivateRoute";
import Loader from "../components/Loader/Loader";

const Routes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router history={history}>
        <Switch>
          <LazyComponent.Landing path="/" exact />
          <PrivateRoute path="/home" exact component={LazyComponent.Home} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;
