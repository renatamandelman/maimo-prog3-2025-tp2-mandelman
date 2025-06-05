"use client";
import Carrousel from "@/components/Carrousel";
import axios from "axios";
import { useState, useEffect } from "react";
// https://api.themoviedb.org/3/genre/movie/list?language=en'
export default function HomeContainer() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const api_key = process.env.API_KEY;
    const getMovies = async () => {
      try {
        const popular = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
        );
        const popularData = popular.data.results;
        setPopularMovies(popularData);
        console.log(popularData);

        const nowPlaying = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
        );
        const nowPlayingData = nowPlaying.data.results;
        setNowPlayingMovies(nowPlayingData);
        console.log(nowPlayingData);
      } catch (error) {
        console.log("el error es:" + error);
        setError(true);
      }
    };
    getMovies();
  }, []);
  return (
    <>
    <Carrousel titulo="Las peliculas mas populares" movies={popularMovies} />
    <Carrousel titulo="Las peliculas del momento" movies={nowPlayingMovies} />
</>
  );
}