import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const BASE_URL = `https://api.themoviedb.org/3/movie/`;

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}${id}?api_key=${API_KEY}&language=en-US`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching the movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="container p-4 mx-auto">
      <div className="flex flex-col md:flex-row">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full rounded md:w-1/3"
        />
        <div className="md:ml-4">
          <h1 className="mb-2 text-3xl font-bold">{movie.title}</h1>
          <p className="mb-4 text-gray-700">{movie.overview}</p>
          <p className="text-gray-600">
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p className="text-gray-600">
            <strong>Rating:</strong> {movie.vote_average}
          </p>
          <p className="text-gray-600">
            <strong>Runtime:</strong> {movie.runtime} minutes
          </p>
          <p className="text-gray-600">
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
