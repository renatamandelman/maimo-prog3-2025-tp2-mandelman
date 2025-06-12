import Image from "next/image";
import Link from "next/link";

const Card = ({ movie }) => {
  return (
    <Link href={`/${movie.id}`}>
      <div className="p-4 border border-gray-800 rounded-lg bg-gray-400 hover:shadow-xl shadow-gray-700 transition-shadow duration-300 min-w-[15px] h-90 ">
        <div className="relative w-40 h-55">
          <Image
            fill
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.title}
            
            className="object-cover rounded"
          />
        </div>
        <div className="mt-4 text-black">
          <h4 className="text-lg font-semibold ">{movie.title}</h4>
          <p className="text-sm text-gray-600">{movie.vote_average}/10</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
