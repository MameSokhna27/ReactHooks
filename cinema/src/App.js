import React, { useState } from 'react';
import MovieList from './MovieList';
import Filtre from './Filtre';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller',
      posterURL: 'https://image.tmdb.org/t/p/w500/7NoJlxRzR04TnZ5YrtdBmrStjX.jpg',
      rating: 8.8,
    },
    {
      title: 'The Dark Knight',
      description: 'Batman faces his greatest foe',
      posterURL: 'https://image.tmdb.org/t/p/w500/rF5d8V2khkR7Bf7IzIW9oP5Yihs.jpg',
      rating: 9.0,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="app">
      <h1>Ma Liste de Films</h1>
      
      <Filtre
        onTitleChange={setTitleFilter}
        onRatingChange={setRatingFilter}
      />

      <MovieList movies={movies} titleFilter={titleFilter} ratingFilter={ratingFilter} />
      
      {/* Exemple pour ajouter un film */}
      <button onClick={() => handleAddMovie({
        title: 'Interstellar',
        description: 'A journey through space and time.',
        posterURL: 'https://image.tmdb.org/t/p/w500/lDX0p9JCUFOtKgk7xiofU7OMlNC.jpg',
        rating: 8.6,
      })}>
        Ajouter un film
      </button>
    </div>
  );
}

export default App;
