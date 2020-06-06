import React from "react";

import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import Container from "shared/components/Container";
import Notification from "shared/components/Notification";
import DeviceService from 'services/DeviceService'

import Main from "screens/Main";
import SearchGoods from "screens/SearchGoods";
import Auth from "screens/Auth";
import NotFound from "screens/NotFound";

import LoginProvider from "./LoginProvider";
import { useSelector } from "react-redux";

function PrivateRoute(props) {
  const token = useSelector((state) => state.auth.token);
  return token ? <Route {...props} /> : <Redirect to="/login" />;
}

function App() {

  const history = useHistory()
  const token = useSelector((state) => state.auth.token);
  React.useEffect(()=> {
    if (token) {
      history.push("/")
    }
  },[token, history])

  return (
    <Container>
      <Switch>
        <PrivateRoute exact path="/" component={Main} />
        <PrivateRoute path="/search" component={SearchGoods} />
        <Route path="/login" component={Auth} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Notification />
      <DeviceService/>
    </Container>
  );
}

export default () => (
  <LoginProvider>
    <App />
  </LoginProvider>
);
