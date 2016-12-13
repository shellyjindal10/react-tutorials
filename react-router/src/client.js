import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Archives from "./js/pages/Archives";
import Featured from "./js/pages/Featured";
import Layout from "./js/pages/Layout";
import Settings from "./js/pages/Settings";

const app = document.getElementById('app');

ReactDOM.render (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archives" name="archives" component={Archives}></Route>
      <Route path="archives/:article" name="archives" activeClassName="test" component={Archives}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
      <Route path="featured" name="featured" component={Featured}></Route>
    </Route>
  </Router>,
app);