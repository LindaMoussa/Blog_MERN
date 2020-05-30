import React, { Component } from "react";

import Search from "./search";
import Blog from "./blog";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Search />
        <div className="recent-blogs my-5">
          <h2 className="text-center">Recent Blogs</h2>
        </div>

        <Blog class="col-md-6"></Blog>
        <Blog class="col-md-6"></Blog>
        <Blog class="col-md-6"></Blog>
      </React.Fragment>
    );
  }
}

export default Home;
