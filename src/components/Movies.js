import React, { useRef, useState } from 'react';
import './Movies.css';
import movies from '../data/ProgrammingAssignment-Data.json';

const Movies = props => {
  const [slideNumber, setSlideNumber] = useState(1);
  const [currentPosition, setCurrentPosition] = useState(0);
  const moviesRef = useRef();

  const handleClick = direction => {
    if (direction === 'left' && slideNumber > 1) {
      setSlideNumber(slideNumber - 1);
      moviesRef.current.style.transform = `translateX(${
        300 + currentPosition
      }px)`;
      setCurrentPosition(currentPosition + 300);
    }
    if (direction === 'right' && slideNumber < 16) {
      setSlideNumber(slideNumber + 1);
      setCurrentPosition(-300 * slideNumber);

      moviesRef.current.style.transform = `translateX(${-300 * slideNumber}px)`;
      console.log(slideNumber);
      console.log(currentPosition);
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
