"use client";

const Hero = ({ movies }) => {
  const featuredMovie = movies[0];

  if (!featuredMovie) return null;

  return (
    <section
      className="relative w-full h-[400px] rounded-xl overflow-hidden bg-cover bg-center flex items-end p-6 text-white"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-0" />


      <div className="relative z-10 max-w-[600px]">
        <h2 className="text-3xl font-bold mb-2">{featuredMovie.title}</h2>
        <p className="text-sm text-gray-300 mb-4">
          {featuredMovie.release_date?.slice(0, 4)} •{" "}
          {featuredMovie.vote_average.toFixed(1)}★
        </p>
        <p className="text-sm">{featuredMovie.overview}</p>
      </div>
    </section>
  );
};

export default Hero;

