import React from "react";

import { Route, Switch,BrowserRouter } from "react-router-dom";

// We will create these two pages in a moment

import Home from "../pages/src/home";

import UserPage from "";

export default function RouterComponent() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />

      <Route path="/:id" component={UserPage} />
    </Switch>
  );
}
