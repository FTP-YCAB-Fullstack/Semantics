import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import GeneralNote from "./pages/GeneralNote";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./utils/privateRoute";
import history from "./utils/history";
import Profile from "./pages/Profile";
import Activity from "./pages/Activity";
import Calendar from "./pages/Calendar";
import Chat from "./pages/Chat";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/home" exact component={HomePage} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/profile" exact component={Profile} />
          <PrivateRoute path="/activity" exact component={Activity} />
          <PrivateRoute path="/general-note" exact component={GeneralNote} />
          <PrivateRoute path="/calendar" exact component={Calendar} />
          <PrivateRoute path="/chat" exact component={Chat} />
          <PrivateRoute path="/dashboard" exact component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
