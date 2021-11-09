import React, { useState } from 'react';
import './Home.css';
import movies from '../data/ProgrammingAssignment-Data.json';
import Movies from './Movies';

const Home = () => {
  const [movie, setMovie] = useState();
  const handleMovie = movie => {
    setMovie(movie);
  };
  return (
    <div>
      {movie && (
        <div>
          <div className='text'>
            <h1 className='home-title'>{movie.title}</h1>
            <p className='home-desc'>{movie.overview}</p>
            <p className='home-rating'>Rating: {movie.vote_average}</p>
          </div>
          <img src={movie.backdrop_path} alt='error1' className='home-image' />
        </div>
      )}
      {!movie && (
        <div>
          <div className='text'>
            <h1 className='home-title'>{movies.results[0].title}</h1>
            <p className='home-desc'>{movies.results[0].overview}</p>
            <p className='home-rating'>
              Rating: {movies.results[0].vote_average}
            </p>
          </div>
          <img
            src={movies.results[0].backdrop_path}
            alt='error'
            className='home-image'
          />
        </div>
      )}
      <Movies movie={handleMovie} />
    </div>
  );
};

export default Home;
