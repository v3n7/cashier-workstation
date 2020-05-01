import React from "react";

export default class Auth extends React.Component {
  state = {
    login: "",
    password: "",
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { history } = this.props;

    const { login, password } = this.state;
    if (login === "demo" && password === "demo") {
      localStorage.setItem("token", "token");
      history.push("/");
    }
  };

  onChange = (name) => (e) => {
    this.setState({ [name]: e.target.value });
  };

  render() {
    const { login, password } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>
              <span>Login</span>
              <input
                type="text"
                name="login"
                value={login}
                onChange={this.onChange("login")}
              />
            </label>
          </div>
          <div>
            <label>
              <span>Password</span>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.onChange("password")}
              />
            </label>
          </div>
          <div>
            <button type="submit">Войти</button>
          </div>
        </form>
      </div>
    );
  }
}
