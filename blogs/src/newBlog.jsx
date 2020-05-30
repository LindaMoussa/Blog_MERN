import React, { Component } from "react";
class newBlog extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="my-5">
            <div className="text-center">
              <h3>New Blog</h3>
            </div>
            <form>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Blog Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  What is in your mind
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="10"
                ></textarea>
              </div>
            </form>
            <div className="text-right">
              <button className="btn btn-success">Publish</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default newBlog;
