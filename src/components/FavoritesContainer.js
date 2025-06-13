"use client";
import { useAppContext } from "@/app/contexts/AppContext";
import Card from "./Card";

const FavoritesContainer = () => {
  const { favorites } = useAppContext();
  return (
    <>
      <div>
        {favorites.map((movie) => {
          <Card key={movie.id} movie={movie} />;
        })}
      </div>
    </>
  );
};

export default FavoritesContainer;
