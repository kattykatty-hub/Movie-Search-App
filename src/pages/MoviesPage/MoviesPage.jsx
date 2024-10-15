import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) return;

      setLoading(true);
      setError(null);

      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGY4YzBhMTBhNjJiNDQ4NTVhMGQ1ODc5OGQyNTU2NCIsIm5iZiI6MTcyNzg2MzI0NC42ODE3NDUsInN1YiI6IjY2ZmQxODA5NjdiMmExNjQ2NmQwNmIxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bVDNPLMEW4O0ifcTc_2wT71GrhEjCZzDFaCUcFhURPI`
            }
          }
        );
        setMovies(data.results);
      } catch (err) {
        setError('Failed to fetch movies. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  const handleSearch = (e) => {
    setSearchParams({ query: e.target.value });
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for a movie..."
      />
      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;
