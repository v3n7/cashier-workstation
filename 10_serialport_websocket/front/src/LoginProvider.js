import React, { Component } from "react";

export const LoginContext = React.createContext();

export default class LoginProvider extends Component {
  constructor(props) {
    super(props);
    let data = localStorage.getItem("user");
    data = data ? JSON.parse(data) : null;
    this.state = {
      userName: data ? data.userName : "",
      token: data ? data.token : "",
      isAuth: data ? !!data.token : false,
    };
  }

  login = (token, userName) => {
    const data = { userName, token, isAuth: true };
    this.setState(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  logout = () => {
    this.setState({ userName: "", token: "", isAuth: false });
    localStorage.setItem("user", null);
  };

  startCheckValidToken = () => {
    if (this.state.isAuth) {
      let count: number = 0;
      this.timer = setInterval(() => {
        //запрос на проверку живого токена
        // console.info("count = ", count);
        // if (count === 5) {
        //   this.logout();
        // }
        count++;
      }, 1000);
    } else {
      clearInterval(this.timer);
    }
  };

  componentDidMount() {
    this.startCheckValidToken();
  }

  componentDidUpdate(prevProps, prevState) {
    this.startCheckValidToken();
    if (prevState.userName !== this.state.userName) {
      localStorage.setItem("user", JSON.stringify(this.state));
    }
  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  render() {
    return (
      <LoginContext.Provider
        value={{
          ...this.state,
          login: this.login,
          logout: this.logout,
          onChangeUserName: (userName) => {
            this.setState({ userName })
          },
        }}
      >
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}
