import React, { Component } from "react";
class Search extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <form className="form-inline my-5 search ml-auto">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder=""
              aria-label="Input group example"
              aria-describedby="btnGroupAddon"
            />
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-success my-2 my-sm-0 searchBtn "
                id="btnGroupAddon"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Search;
