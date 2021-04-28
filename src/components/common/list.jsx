import React from "react";

// "../Starter Code/services/fakeMovieService"

const List = (props) => {
  const { genres, onCategoryChange, selectedGenre } = props;
  const allGenres = {
    name: "All Genres",
  };
  return (
    <React.Fragment>
      <ul className="list-group m-3 mt-5">
        <li
          className={
            selectedGenre === allGenres.name
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onCategoryChange(allGenres)}
        >
          All Genres
        </li>
        {genres.map((genre) => (
          <li
            className={
              selectedGenre === genre.name
                ? "list-group-item active"
                : "list-group-item"
            }
            key={genre._id}
            onClick={() => onCategoryChange(genre)}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default List;
