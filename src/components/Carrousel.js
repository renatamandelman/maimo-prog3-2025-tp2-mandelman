import Card from "@/components/Card";
import Filters from "@/components/Filters";

const Carrousel = ({ movies = [], titulo }) => {
  return (
    <div className="my-6 mx-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="pr-4 text-xl font-semibold">{titulo}</h3>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
export default Carrousel