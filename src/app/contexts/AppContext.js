"use client";
import { useState, useEffect, useContext, createContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  const handleAddToFavorites = (title, image, id, vote_average) => {
      const alreadyInFavorites = favorites.some((fav) => fav.id === id);

  if (alreadyInFavorites) {
    setFavorites(favorites.filter((fav) => fav.id !== id)); // quitar
  } else {
    setFavorites([...favorites, { title, image, id, vote_average }]); // agregar
  }
  };

  const favoritesQuantity = () => favorites.length
  return (
    <AppContext.Provider value={{ favorites, handleAddToFavorites, favoritesQuantity }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext:must be used within a AppContextProvider");
  return context;
};

export default AppContext;
