import React, { useState } from 'react';
import axios from 'axios';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';

function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGY4YzBhMTBhNjJiNDQ4NTVhMGQ1ODc5OGQyNTU2NCIsIm5iZiI6MTcyNzg2MzI0NC42ODE3NDUsInN1YiI6IjY2ZmQxODA5NjdiMmExNjQ2NmQwNmIxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bVDNPLMEW4O0ifcTc_2wT71GrhEjCZzDFaCUcFhURPI`
        }
      }
    );
    setMovies(data.results);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button onClick={handleSearch}>Search</button>
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;
