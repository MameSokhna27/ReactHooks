import React from 'react';

function MovieCard({ title, description, posterURL, rating }) {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Note:</strong> {rating}</p>
    </div>
  );
}

export default MovieCard;
