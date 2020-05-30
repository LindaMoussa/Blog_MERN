import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Blog
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">
                  Contact us
                </Link>
              </li>
            </ul>

            <Link
              className="btn signinBtn my-2 my-sm-0"
              type="submit"
              to="registeration"
            >
              Sign in
            </Link>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
