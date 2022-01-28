import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <header className="header">
        <div className="header__wrap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header__content">
                  <Link className="header__nav-link" to="/">
                    {" "}
                    <img src="img/logo.svg" alt="" />
                  </Link>

                  <ul className="header__nav">
                    <li className="header__nav-item">
                      <Link className="header__nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link className="header__nav-link" to="register">
                        Register
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link className="header__nav-link" to="login">
                        Login
                      </Link>
                    </li>
                  </ul>

                  <div className="header__auth">
                    <button className="header__search-btn" type="button">
                      <i className="icon ion-ios-search"></i>
                    </button>

                    <div className="dropdown header__lang">
                      <a
                        className="dropdown-toggle header__nav-link"
                        href="#"
                        role="button"
                        id="dropdownMenuLang"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        EN
                      </a>

                      <ul
                        className="dropdown-menu header__dropdown-menu"
                        aria-labelledby="dropdownMenuLang"
                      >
                        <li>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <a href="#">Spanish</a>
                        </li>
                        <li>
                          <a href="#">Russian</a>
                        </li>
                      </ul>
                    </div>

                    <span  className="header__sign-in">
                      <i className="icon ion-ios-log-in"></i>
                      <Link  to="login"> <span>signin</span></Link>
                    </span>
                  </div>

                  <button className="header__btn" type="button">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form action="#" className="header__search">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header__search-content">
                  <input
                    type="text"
                    placeholder="Search for a movie, TV Series that you are looking for"
                  />

                  <button type="button">search</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </header>
    );
  }
}

export default Navbar;
