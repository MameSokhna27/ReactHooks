import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies, titleFilter, ratingFilter }) {
  const filteredMovies = movies.filter(movie => {
    const isTitleMatch = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
    const isRatingMatch = movie.rating >= ratingFilter;
    return isTitleMatch && isRatingMatch;
  });

  return (
    <div className="movie-list">
      {filteredMovies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          description={movie.description}
          posterURL={movie.posterURL}
          rating={movie.rating}
        />
      ))}
    </div>
  );
}

export default MovieList;
