"use client";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/app/contexts/AppContext";
const CardFavorites = ({ movie }) => {
  const { favorites, handleAddToFavorites } = useAppContext();

  return (
   <>
  <div className="min-w-[160px] max-w-[180px] p-2 border border-gray-800 rounded-lg bg-gray-400 hover:shadow-xl shadow-gray-700 transition-shadow duration-300">
    <Link href={`/movie/${movie.id}`}>
      <div className="relative w-full min-h-50 max-h-60">
        <Image
          fill
          src={`https://image.tmdb.org/t/p/w200/${movie.image}`}
          alt={movie.title}
          className="object-cover rounded"
        />
      </div>
      <div className="mt-3 text-black">
        <h4 className="text-base font-semibold line-clamp-2">{movie.title}</h4>
        <p className="lg:text-[16px] sm:text-[12px] text-gray-600">{movie.vote_average}/10</p>
      </div>
    </Link>
    <div className="flex justify-end mt-2">
      <button
        type="button"
        onClick={() =>
          handleAddToFavorites(movie.title, movie.poster_path, movie.id, movie.vote_average)
        }
        className="text-blue-600 hover:text-blue-800"
      >
        {favorites.some((fav) => fav.id === movie.id) ? (
          // Corazón relleno
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6" fill="currentColor">
            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
          </svg>
        ) : (
          // Corazón vacío
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
            <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
          </svg>
        )}
      </button>
    </div>
  </div>
</>

  );
};

export default CardFavorites;