const sortGenres = (genres, genre, movies) => {
    if (genre.name === "All Genres") {
        return movies
    } else {
        const matchGenre = genres.find(gen => gen.name === genre.name)
        const matchMovies = movies.filter(movie => movie.genre.name === matchGenre.name)
        return matchMovies
    }

}

export default sortGenres