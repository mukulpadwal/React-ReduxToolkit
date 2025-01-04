import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../features/movies/movieSlice";

function MovieInput() {
  const [movieValue, setMovieValue] = useState("");
  const dispatch = useDispatch();

  const handleAddMovie = () => {
    if (movieValue.trim()) {
      dispatch(addMovie({ name: movieValue }));
      setMovieValue("");
    }
  };

  return (
    <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-md">
      <input
        type="text"
        value={movieValue}
        onChange={(e) => setMovieValue(e.target.value)}
        placeholder="Enter movie name"
        className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleAddMovie}
        className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded transition-all"
      >
        ADD
      </button>
    </div>
  );
}

export default MovieInput;
