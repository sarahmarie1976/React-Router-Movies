import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';



const MovieList = props => {
  console.log(props.movieList);
  
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}



export default MovieList;
