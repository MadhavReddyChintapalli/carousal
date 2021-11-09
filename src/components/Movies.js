import React, { useRef, useState } from 'react';
import './Movies.css';
import movies from '../data/ProgrammingAssignment-Data.json';

const Movies = props => {
  const [slideNumber, setSlideNumber] = useState(0);
  const moviesRef = useRef();

  const handleClick = direction => {
    let distance = moviesRef.current.getBoundingClientRect().x;
    console.log(distance);
    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      moviesRef.current.style.transform = `translateX(${300 + distance}px)`;
    }
    if (direction === 'right' && slideNumber < 15) {
      setSlideNumber(slideNumber + 1);
      moviesRef.current.style.transform = `translateX(${-300 + distance}px)`;
    }
  };
  return (
    <div>
      <h1 className='movies-list-title'>Movies</h1>
      <div>
        <i
          className='fas fa-chevron-left arrow-left'
          onClick={() => handleClick('left')}
        />
        <i
          className='fas fa-chevron-right arrow-right'
          onClick={() => handleClick('right')}
        />
        <div className='movie-list' ref={moviesRef}>
          {movies.results.map(movie => {
            return (
              <div className='movie-list-item'>
                <img
                  src={movie.poster_path}
                  alt=''
                  className='movie-list-item-img'
                  onClick={() => props.movie(movie)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Movies;
