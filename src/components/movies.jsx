import React, { Component } from "react";
import Like from "./common/like"
import {
  getMovies,
  deleteMovie,
} from "../Starter Code/services/fakeMovieService";

class Movies extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }
  state = {
    movies: getMovies(),
  };

  addLiked() {
    getMovies().map((movie) => (movie.liked = false));
  }

  componentDidMount() {
    this.addLiked();
  }

  handleDelete(id) {
    deleteMovie(id._id);
    this.setState({ movies: getMovies() });
  }

  handleLike(movie) {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].movie.liked = !movies[index].movie.liked;
    this.setState({ movies });
  }

  moviesList() {
    // console.log(this.state.movies);
    return this.state.movies.map((movie) => (
      <tr key={movie._id}>
        <th>{movie.title}</th>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td onClick={() => this.handleLike({ movie })}>
          <Like movie={movie}/>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.handleDelete({ _id: movie._id })}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  }

  conditionalMovies() {
    // console.log(this.state);
    if (this.state.movies.length === 0)
      return <h3>There are no movies in the database</h3>;
    return (
      <div>
        <h5>Showing {this.state.movies.length} movies in the database</h5>
        <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{this.moviesList()}</tbody>
        </table>
      </div>
    );
  }

  render() {
    // console.log(this.state.movies);
    return <main className="container mt-5">{this.conditionalMovies()}</main>;
  }
}

export default Movies;
