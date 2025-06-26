"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const Genres = () => {
  const [ genres, setGenresData] = useState([])
    const api_key = process.env.NEXT_PUBLIC_API_KEY;
  useEffect(() => {
    const getGenres = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`
        );
        const genresData = response.data.genres;
        setGenresData(genresData);
      } catch (error) {
        console.log("el error es:" + error);
        setError(true);
      }
    };
    getGenres();
  }, [api_key]);


  return (
    <div className="flex flex-wrap gap-2 p-4">
      {genres.map((genre) => (
        <button
          key={genre.id}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-blue-600 transition"
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
};

export default Genres;
