import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;

const Upcoming = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(API_URL);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching the upcoming movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Upcoming Movies</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <div key={movie.id} className="p-4 bg-white rounded shadow">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto mb-2"
              />
              <h2 className="text-lg font-semibold">{movie.title}</h2>
            </Link>
            <p className="text-gray-700">{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
