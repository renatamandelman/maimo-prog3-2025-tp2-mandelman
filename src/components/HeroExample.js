"use client";

import { useState, useEffect } from "react";

const Hero = ({ movies }) => {
  const [featuredMovie, setFeaturedMovie] = useState(movies[0]);

  return (
    <section
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${featuredMovie.backdrop_path})`,
      }}
      className={"w-full h-[600px] bg-cover bg-no-repeat bg-center"}
    >
      <div className="content h-full flex flex-col justify-start items-center">
       <h2 className="text-white text-5xl"> {featuredMovie.title}</h2>
       <p className="max-w-[500px]"> {featuredMovie.overview}</p>
      </div>
      <div className="movies"></div>
    </section>
  );
};

export default Hero;
