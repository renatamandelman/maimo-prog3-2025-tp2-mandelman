"use client";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";

const InfoMovie = ({ id }) => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const api_key = process.env.NEXT_PUBLIC_API_KEY;
    const getMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
        );
        setMovie(response.data);
      } catch (error) {
        console.log("Error fetching movie:", error);
        setError(true);
      }
    };
    getMovie();
  }, [id]);

  if (!movie) return null;

  return (
    <div className="px-4 py-6 md:px-6 md:py-8 text-white max-w-screen-xl mx-auto">
      <Link
        href="/"
        className="inline-block mb-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
      >
        Back
      </Link>

      <h1 className="text-2xl sm:text-3xl font-bold mb-4">{movie.title}</h1>

      {movie.tagline && <p className="italic text-gray-300 mb-6">"{movie.tagline}"</p>}

      <div className="flex flex-col md:flex-row gap-6">
        <Image
          width={300}
          height={450}
          alt={movie.title}
          className="rounded shadow-lg w-full max-w-[300px] h-auto mx-auto md:mx-0"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />

        <div className="flex-1 space-y-3 text-sm md:text-base">
          <p>
            <span className="font-semibold">Average Score:</span> {movie.vote_average.toFixed(1)} ({movie.vote_count} votes)
          </p>
          <p>
            <span className="font-semibold">Release Date:</span> {movie.release_date}
          </p>
          <p>
            <span className="font-semibold">Runtime:</span> {movie.runtime} min
          </p>
          <p>
            <span className="font-semibold">Original Language:</span> {movie.original_language.toUpperCase()}
          </p>
          <p>
            <span className="font-semibold">Budget:</span> ${movie.budget.toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Genres:</span>{" "}
            {movie.genres.map((g) => g.name).join(", ")}
          </p>
          <p>
            <span className="font-semibold">Production Country:</span> {movie.origin_country?.join(", ")}
          </p>
          {movie.belongs_to_collection && (
            <p>
              <span className="font-semibold">Part of Collection:</span> {movie.belongs_to_collection.name}
            </p>
          )}
          <p>
            <span className="font-semibold">Spoken Languages:</span>{" "}
            {movie.spoken_languages.map((lang) => lang.english_name).join(", ")}
          </p>
          {movie.homepage && (
            <p>
              <span className="font-semibold">Official Website:</span>{" "}
              <a href={movie.homepage} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
                {movie.homepage}
              </a>
            </p>
          )}
          <p className="mt-4">
            <span className="font-semibold">Overview:</span> {movie.overview}
          </p>
        </div>
      </div>

      {error && <p className="text-red-400 mt-4">An error occurred while loading the movie data.</p>}
    </div>
  );
};

export default InfoMovie;

