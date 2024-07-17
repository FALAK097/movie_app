import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const BASE_URL = `https://api.themoviedb.org/3/movie/`;

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await axios.get(
          `${BASE_URL}${id}?api_key=${API_KEY}&language=en-US`
        );
        setMovie(movieResponse.data);

        const castResponse = await axios.get(
          `${BASE_URL}${id}/credits?api_key=${API_KEY}&language=en-US`
        );
        setCast(castResponse.data.cast);
      } catch (error) {
        console.error("Error fetching the movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="container p-4 mx-auto">
      <img
        src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
        alt={movie.title}
        className="hidden w-20 rounded-lg md:block md:w-2/3"
      />
      <div className="flex flex-col p-4 bg-gray-900 rounded-lg shadow-lg md:flex-row">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full rounded-lg md:w-1/3"
        />
        <div className="text-white md:ml-4">
          <h1 className="mb-2 text-3xl font-bold">{movie.title}</h1>
          <p className="mb-4 text-gray-300">{movie.overview}</p>
          <p className="text-gray-400">
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p className="text-gray-400">
            <strong>Rating:</strong> {movie.vote_average}
          </p>
          <p className="text-gray-400">
            <strong>Runtime:</strong> {movie.runtime} minutes
          </p>
          <p className="text-gray-400">
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-bold text-black">Cast</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {cast.map((member) => (
            <div
              key={member.cast_id}
              className="p-2 text-center bg-gray-800 rounded-lg"
            >
              <img
                src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
                alt={member.name}
                className="w-full h-auto rounded-lg"
              />
              <p className="mt-2 font-semibold text-white">{member.name}</p>
              <p className="text-gray-400">{member.character}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
