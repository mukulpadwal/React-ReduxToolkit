import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./features/movies/movieSlice.js";

// Configure and create the Redux store
export const store = configureStore({
  reducer: {
    // Combine different reducers to manage slices of state
    // 'movie' is a slice of the global state managed by movieReducer
    movie: movieReducer,
    
    // Additional reducers can be added here for other features
    // Example: user: userReducer
  },
});
