import React, { Component } from "react";
import Like from "./common/like";
import {
  getMovies,
  deleteMovie,
} from "../Starter Code/services/fakeMovieService";
import { genres } from "../Starter Code/services/fakeGenreService";
import Pagination from "./common/pagination";
import paginate from "./utils/paginate";
import List from "./common/list";

class Movies extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
    genres: genres,
    selectedGenre: "All Genres",
  };

  componentDidMount() {
    getMovies().map((movie) => (movie.liked = false));
    // genres.map((genre) => (genre.selected = false));
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
  handlePageChange(page) {
    this.setState({ currentPage: page });
  }
  handleCategoryChange(genre) {
    this.setState({ selectedGenre: genre.name });
  }

  moviesList() {
    // console.log(this.state.movies);
    const movies = paginate(
      this.state.movies,
      this.state.currentPage,
      this.state.pageSize
    );
    return movies.map((movie) => (
      <tr key={movie._id}>
        <th>{movie.title}</th>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td onClick={() => this.handleLike({ movie })}>
          <Like movie={movie} />
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
    const { pageSize, movies, currentPage, genres, selectedGenre } = this.state;
    return (
      <main className="d-flex mt-5">
        <div className="mr-5">
          <List
            onCategoryChange={this.handleCategoryChange}
            genres={genres}
            selectedGenre={selectedGenre}
          />
        </div>
        <div>
          {this.conditionalMovies()}
          <Pagination
            itemsCount={movies.length}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </main>
    );
  }
}

export default Movies;
