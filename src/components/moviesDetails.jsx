import React, { Component } from "react";

class MoviesDetails extends Component {
  handleBack() {
    this.props.history.push("/movies");
  }
  render() {
    console.log(this);
    return (
      <div>
        <h1>Movie Details</h1>
        <h4>{this.props.match.params.id}</h4>
        <button className="btn btn-primary" onClick={() => this.handleBack()}>
          Back
        </button>
      </div>
    );
  }
}

export default MoviesDetails;
