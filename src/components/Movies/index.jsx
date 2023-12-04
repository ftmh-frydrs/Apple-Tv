import React from 'react';
import MovieList from '../MovieInfo';

const Movies = () => {
  return (
    <>
    <MovieList searchQuery="From" /><hr/>
    <MovieList searchQuery="Game of Thrones" /><hr/>
    <MovieList searchQuery="Friends" /><hr/>
    <MovieList searchQuery="Stranger Things" /><hr/>
    <MovieList searchQuery="Dark" /><hr/>
    </>
  )
};

export default Movies;
