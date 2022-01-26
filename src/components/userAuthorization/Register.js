import React, { Component } from "react";


export default class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  register=(e)=>{
	  e.preventDefault();
  }
  signIn=(e)=>{
	  e.preventDefault();
	  // go to register page

  }
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
                      value={this.state.name}
                      onChange={(e) => this.setState({ name: e.target.value })}
                      type="text"
                      className="sign__input"
                      placeholder="Name"
                    />
                  </div>

                  <div className="sign__group">
                    <input
                      type="text"
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                      className="sign__input"
                      placeholder="Email"
                    />
                  </div>

                  <div className="sign__group">
                    <input
                      type="password"
                      value={this.state.password}
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                      className="sign__input"
                      placeholder="Password"
                    />
                  </div>

                

                  <button onClick={this.register} className="sign__btn" type="button">
                    Sign up
                  </button>

                  <span className="sign__text">
                    Already have an account? <a onClick={this.signIn}>Sign in!</a>
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
