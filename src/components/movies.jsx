import React, { Component } from "react";
import {
  getMovies,
  deleteMovie,
} from "../Starter Code/services/fakeMovieService";
import { genres } from "../Starter Code/services/fakeGenreService";
import Pagination from "./common/pagination";
import MoviesTable from "./moviesTable";
import sortGenres from "./utils/sortGenres";
import List from "./common/list";

class Movies extends Component {
  // constructor() {
  //   super();
  //   this.handleDelete = this.handleDelete.bind(this);
  //   this.handleLike = this.handleLike.bind(this);
  //   this.handlePageChange = this.handlePageChange.bind(this);
  //   this.handleCategoryChange = this.handleCategoryChange.bind(this);
  //   this.handleSort = this.handleSort.bind(this);
  // }
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
    genres: genres,
    selectedGenre: "All Genres",
    sortedMovies: getMovies(),
    sortColumn: {
      path: "title",
      order: "asc",
      sort: <i></i>,
    },
  };

  componentDidMount() {
    getMovies().map((movie) => (movie.liked = false));
    // console.log(this.state.sortColumn);
    // genres.map((genre) => (genre.selected = false));
  }

  handleDelete = (id) => {
    deleteMovie(id._id);
    this.setState({ movies: getMovies() });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].movie.liked = !movies[index].movie.liked;
    this.setState({ movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleCategoryChange = (genre) => {
    this.setState({ selectedGenre: genre.name, currentPage: 1 });
    this.setState({
      sortedMovies: sortGenres(this.state.genres, genre, this.state.movies),
    });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const {
      pageSize,
      currentPage,
      genres,
      selectedGenre,
      sortedMovies,
      sortColumn,
    } = this.state;
    return (
      <main className="row mt-5">
        <div className="col-3">
          <List
            onCategoryChange={this.handleCategoryChange}
            genres={genres}
            selectedGenre={selectedGenre}
          />
        </div>
        <div className="col">
          <MoviesTable
            sortedMovies={sortedMovies}
            currentPage={currentPage}
            pageSize={pageSize}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            itemsCount={sortedMovies.length}
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
