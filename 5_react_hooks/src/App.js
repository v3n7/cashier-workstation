import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Container from "shared/components/Container";

import Main from "screens/Main";
import SearchGoods from "screens/SearchGoods";
import Auth from "screens/Auth";
import NotFound from "screens/NotFound";

import LoginProvider, { LoginContext } from './LoginProvider'

// function PrivateRoute(props) {
//   //логика проверки аутентификации
//   const token = localStorage.getItem("token");
//   const isAuth = !!token;

//   return isAuth ? <Route {...props} /> : <Redirect to="/login" />;
// }

function WithLogin(props) {

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
        <WithLogin exact path="/" component={Main} />
        <WithLogin path="/search" component={SearchGoods} />
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
