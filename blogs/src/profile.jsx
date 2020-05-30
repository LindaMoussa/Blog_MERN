import React, { Component } from "react";
import Blog from "./blog";

class Profile extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container mt-5 mb-3">
          <div className="row">
            <div className="col-md-3">
              <div className="user-profile">
                <img src="/user.png" alt="img" />
              </div>
              <div className="user-name">
                <h3>Linda Moussa</h3>
              </div>
              <div className="user-email">
                <h4>email@example.com</h4>
              </div>
            </div>
            <div className="col-md-9">
              <Blog class="col-md-9"></Blog>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
