import Card from "@/components/Card";

const Carrousel = ({ movies = [], titulo }) => {
  return (
    <div className="my-6 mx-auto w-full max-w-7xl px-4 text-white">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-lg sm:text-xl font-semibold pr-4">{titulo}</h3>
  </div>

  <div
    className="flex gap-4 overflow-x-auto overflow-y-hidden pb-4 scroll-smooth
      [&::-webkit-scrollbar]:h-2
      [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-gray-100
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-gray-300
      dark:[&::-webkit-scrollbar-track]:bg-neutral-700
      dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
  >
    {movies.map((movie) => (
      <Card key={movie.id} movie={movie} />
    ))}
  </div>
</div>
  );
};
export default Carrousel