import Card from "@/components/Card";
import Filters from "@/components/Filters";

const Carrousel = ({ movies = [], titulo }) => {
  return (
    <div className="my-6 mx-4 text-white ">
      <div className="flex items-center justify-between mb-4">
        <h3 className="pr-4 text-xl font-semibold">{titulo}</h3>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
export default Carrousel