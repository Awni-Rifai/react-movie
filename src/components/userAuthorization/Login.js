import React, { Component } from "react";

export default class Login extends Component {
  state = {
    email: "",
	password:''
  };
  render() {
    return (
      <div className="sign section--bg" data-bg="img/section/section.jpg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sign__content">
                <form action="#" className="sign__form">
                  <a href="index.html" className="sign__logo">
                    <img src="img/logo.svg" alt="" />
                  </a>

                  <div className="sign__group">
                    <input
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                      type="text"
                      className="sign__input"
                      placeholder="Email"
                    />
                  </div>

                  <div className="sign__group">
                    <input
                      type="password"
					  value={this.state.password}
					  onChange={(e) => this.setState({ password: e.target.value })}
                      className="sign__input"
                      placeholder="Password"
                    />
                  </div>

                  <div className="sign__group sign__group--checkbox">
                    <input
                      id="remember"
                      name="remember"
                      type="checkbox"
                      checked="checked"
                    />
                    <label for="remember">Remember Me</label>
                  </div>

                  <button type="submit" className="sign__btn" type="button">
                    Sign in
                  </button>

                  <span className="sign__text">
                    Don't have an account? <a href="signup.html">Sign up!</a>
                  </span>

                  <span className="sign__text">
                    <a href="forgot.html">Forgot password?</a>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
