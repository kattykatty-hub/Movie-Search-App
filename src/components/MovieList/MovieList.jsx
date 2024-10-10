// src/components/MovieList/MovieList.jsx
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <ul className={style.movieList}>
      {movies.map(movie => (
        <li key={movie.id} className={style.movieItem}>
          <Link to={`/movies/${movie.id}`} className={style.movieLink}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;

