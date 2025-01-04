import MovieInput from "./components/MovieInput";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">MOVIE MANAGEMENT SYSTEM</h1>
      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <MovieInput />
        <MovieList />
      </div>
    </div>
  );
}

export default App;
