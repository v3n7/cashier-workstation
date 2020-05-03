import React from "react";

import { LoginContext } from "LoginProvider";

import styles from "./Auth.module.css";
export default class Auth extends React.Component {
  state = {
    login: "",
    password: "",
  };

  static contextType = LoginContext;

  onSubmit = (e) => {
    e.preventDefault();

    const { history } = this.props;

    const { login, password } = this.state;
    if (login === "demo" && password === "demo") {
      this.context.login("token", login);
      history.push("/");
    }
  };

  onChange = (name) => (e) => {
    this.setState({ [name]: e.target.value });
  };

  render() {
    const { login, password } = this.state;

    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={this.onSubmit}>
          <div className={styles.item}>
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
          <div className={styles.item}>
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
          <div className={styles.item}>
            <button type="submit" className={styles.button}>
              Войти
            </button>
          </div>
        </form>
      </div>
    );
  }
}
