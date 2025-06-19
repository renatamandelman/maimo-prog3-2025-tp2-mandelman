"use client";
import { useAppContext } from "@/app/contexts/AppContext";
import Card from "./Card";
import Carrousel from "./Carrousel";

const FavoritesContainer = () => {
  const { favorites } = useAppContext();
  return (
    <>
     <main className="ml-25 bg-gray-600 m-6 rounded-xl shadow-md shadow-gray-700 p-1 ">
       <div className="my-6 mx-4 text-white ">
      <div className="flex items-center justify-between mb-4">
        <h3 className="pr-4 text-xl font-semibold">Favorites</h3>
      </div>
      <div className="flex flex-wrap gap-4 ">
        {favorites.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
      </main>
    </>
  );
};

export default FavoritesContainer;
