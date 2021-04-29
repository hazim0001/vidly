import React from "react";
import paginate from "./utils/paginate";
import Like from "./common/like";

const MoviesTable = (props) => {
  const { sortedMovies, currentPage, pageSize, onDelete, onLike } = props;
  const movies = paginate(sortedMovies, currentPage, pageSize);

  //   if (this.state.movies.length === 0)
  //     return <h3>There are no movies in the database</h3>;
  return (
    <div className="row">
      <h5>Showing {sortedMovies.length} movies in the database</h5>
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
};
export default MoviesTable;
