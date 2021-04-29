import React, { Component } from "react";
import paginate from "./utils/paginate";
import Like from "./common/like";
import _ from "lodash";

class MoviesTable extends Component {
  raiseSort(path) {
    const sortColumn = { ...this.props.sortColumn };
    console.log(sortColumn);
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  }

  render() {
    const {
      sortedMovies,
      currentPage,
      pageSize,
      onDelete,
      onLike,
      sortColumn,
    } = this.props;
    const sorted = _.orderBy(
      sortedMovies,
      [sortColumn.path],
      [sortColumn.order]
    );
    const movies = paginate(sorted, currentPage, pageSize);
    return (
      <div className="row">
        <h5>Showing {sortedMovies.length} movies in the database</h5>
        <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col" onClick={() => this.raiseSort("title")}>
                Title
              </th>
              <th scope="col" onClick={() => this.raiseSort("genre.name")}>
                Genre
              </th>
              <th scope="col" onClick={() => this.raiseSort("numberInStock")}>
                Stock
              </th>
              <th scope="col" onClick={() => this.raiseSort("dailyRentalRate")}>
                Rate
              </th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <th>{movie.title}</th>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td onClick={() => onLike({ movie })}>
                  <Like movie={movie} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete({ _id: movie._id })}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MoviesTable;

// const MoviesTable = (props) => {
//   const {
//     sortedMovies,
//     currentPage,
//     pageSize,
//     onDelete,
//     onLike,
//     onSort,
//     sortColumn,
//   } = props;

//   const sorted = _.orderBy(sortedMovies, [sortColumn.path], [sortColumn.order]);
//   const movies = paginate(sorted, currentPage, pageSize);

//   if (this.state.movies.length === 0)
//     return <h3>There are no movies in the database</h3>;

// };
// export default MoviesTable;
