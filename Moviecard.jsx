import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlay, FaStar } from 'react-icons/fa'; // React Icons
import './Moviecard.css';

const Moviecard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://fooapi.com/api/movies');
        // Console-la check panni paarkka:
        
        setMovies(response.data.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="movie-row">
      <h3 className="row-title">Trending Now</h3>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
           
            <img 
              src={movie.poster} 
              alt={movie.title} 
              className="card-img" 
            />

            {/* Hover details section */}
            <div className="card-overlay">
              <div className="overlay-content">
                <div className="card-header">
                  <span className="card-rating">
                    <FaStar className="star-icon" /> {movie.rating || "4.5"}
                  </span>
                </div>

                <h4 className="card-title">{movie.title || movie.name}</h4>

                {/* 2. Description with dot logic */}
                <p className="card-desc">
                  {movie.description || movie.overview || "No description available."}
                </p>

                {/* 3. Watch Now button with Icon */}
                <button className="watch-now-btn">
                  <FaPlay className="play-btn-icon" /> <span>Watch Now</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Moviecard