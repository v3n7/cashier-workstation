import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Container from "shared/components/Container";

import Main from "screens/Main";
import SearchGoods from "screens/SearchGoods";
import Auth from "screens/Auth";
import NotFound from "screens/NotFound";

import LoginProvider, { LoginContext } from './LoginProvider'

function PrivateRoute(props) {
  return <LoginContext.Consumer>
    {({ isAuth }) => {
      return isAuth ? <Route {...props} /> : <Redirect to="/login" />
    }}
  </LoginContext.Consumer>
}

function App() {
  return (
    <Container>
      <Switch>
        <PrivateRoute exact path="/" component={Main} />
        <PrivateRoute path="/search" component={SearchGoods} />
        <Route path="/login" component={Auth} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Container>
  );
}

export default () => (
  <LoginProvider>
    <App />
  </LoginProvider>
);
