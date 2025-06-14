"use client";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";

const InfoMovie = ({ id }) => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const api_key = process.env.NEXT_PUBLIC_API_KEY;
    const getRecipe = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
        );
        setMovie(response.data);
        console.log(setMovie);
      } catch (error) {
        console.log("el error es:" + error);
        setError(true);
      }
    };
    getRecipe();
  }, [id]);
  return (
    movie && (
      <>
      
        <div className="p-6 ml-20 text-white">
          <Link
            href="/"
            className="inline-block mb-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
          >
            Volver
          </Link>

          <h1 className="text-3xl font-bold mb-6">{movie.title}</h1>

          <div className="flex flex-col md:flex-row gap-6">
            <Image
              width={100}
              height={100}
              alt={movie.title}
              className="w-[200px] h-auto rounded shadow-lg"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
            <div className="flex-1 space-y-4 ">
              <p>
                <span className="font-semibold">Fecha de estreno:</span>{" "}
                {movie.release_date}
              </p>
            
       
            </div>
          </div>
        </div>
        {error && "Hubo un error"}
      </>
    )
  );
};

export default InfoMovie;
