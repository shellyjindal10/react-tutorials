import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./js/pages/Layout";
import Settings from "./js/pages/Settings";
import Favourites from './js/pages/Favourites';
import ToDos from './js/pages/ToDos'

const app = document.getElementById('app');

ReactDOM.render (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={ToDos}></IndexRoute>
      <Route path="favourites" name="favourites" component={Favourites}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);
