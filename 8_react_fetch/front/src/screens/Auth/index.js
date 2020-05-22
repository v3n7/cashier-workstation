import React from "react";

import { connect } from "react-redux";

import { LoginContext } from "LoginProvider";

import { loginAction } from "../../redux/reducers/auth";

import styles from "./Auth.module.css";
class Auth extends React.Component {
  state = {
    login: "",
    password: "",
  };

  static contextType = LoginContext;

  onSubmit = (e) => {
    e.preventDefault();
    const { login, password } = this.state;
    this.props.loginAction(login, password);
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

export default connect(null, { loginAction })(Auth);
