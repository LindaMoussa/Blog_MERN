import React, { Component } from "react";
import "./signin.css";
class SignIn extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="bg">
          <div className="container">
            <div className="row registeration-wrapper pt-5">
              <div className="col-md-6 sign-in">
                <div className="form-wrapper">
                  <div className="title-wrapper">
                    <h2> Join us</h2>
                  </div>
                  <form>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="pass">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="pass"
                      />
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        checked
                      />
                      <label className="form-check-label" for="exampleRadios1">
                        Male
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
                      />
                      <label className="form-check-label" for="exampleRadios2">
                        Female
                      </label>
                    </div>
                    <div className="btn-wrapper my-3">
                      <button
                        type="submit"
                        className="btn btn-primary submit-btn "
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 sign-up">
                <div className="form-wrapper">
                  <div className="title-wrapper">
                    <h2> Sign in</h2>
                  </div>
                  <form>
                    <div className="form-group">
                      <label htmlFor="upEmail">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="upEmail"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="upPass">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="upPass"
                      />
                    </div>

                    <div className="btn-wrapper my-3">
                      <button
                        type="submit"
                        className="btn btn-success submit-btn "
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SignIn;
