import React from 'react';
import MovieGrid from './MovieGrid/MovieGrid';
import movies from './movies';

function App() {
  return <MovieGrid items={movies} className="App" />;
}

export default App;
