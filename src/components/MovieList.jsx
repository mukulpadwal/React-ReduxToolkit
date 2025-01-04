import { useDispatch, useSelector } from "react-redux";
import { deleteMovie, updateMovie } from "../features/movies/movieSlice";
import { useState } from "react";

function MovieList() {
  const movieState = useSelector((state) => state.movie.movieList);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  // Handle entering edit mode
  const startEditing = (movie) => {
    setEditId(movie.id);
    setEditName(movie.name);
  };

  // Handle saving the updated movie name
  const saveMovie = (id) => {
    dispatch(updateMovie({ id, name: editName }));
    setEditId(null);  // Exit edit mode
  };

  return (
    <div className="space-y-6">
      {movieState.map((movie) => (
        <div
          key={movie.id}
          className="bg-gray-700 p-4 rounded-lg shadow-md flex justify-between items-center"
        >
          <div className="flex items-center space-x-4">
            {editId === movie.id ? (
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="p-2 rounded bg-gray-600 text-white focus:outline-none"
              />
            ) : (
              <h2 className="text-xl font-semibold">{movie.name}</h2>
            )}
          </div>

          <div className="space-x-4">
            {editId === movie.id ? (
              <button
                onClick={() => saveMovie(movie.id)}
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
              >
                SAVE
              </button>
            ) : (
              <button
                onClick={() => startEditing(movie)}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                UPDATE
              </button>
            )}

            <button
              onClick={() => dispatch(deleteMovie({ id: movie.id }))}
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
            >
              DELETE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
