import React from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import PasswordReset from "./PasswordReset";
import MainMenu from "./MainMenu";
import UpdateAccount from "./UpdateAccount";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={MainMenu} />
          <PrivateRoute path="/update-account" component={UpdateAccount} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/password-reset" component={PasswordReset} />
          <Redirect from="*" to="/" />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
