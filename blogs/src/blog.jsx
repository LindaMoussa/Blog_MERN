import React, { Component } from "react";
import { Link } from "react-router-dom";


class Blog extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-center">
          <div className={`card ${this.props.class} my-3 pl-0`}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4 px-0 card-img">
                  <img src="/user.png" alt="user-img" />
                  <div>
                    <Link to="profile">
                      <h4 className="text-center">User name</h4>
                    </Link>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title text-center">Title</h4>
                    <p className="card-body">
                      lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum
                      dolor sit lorem ipsum dolor sit lorem ipsum dolor sit
                      lorem ipsum dolor sit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Blog;
