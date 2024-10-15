import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={style.movieList}>
      {movies.map(movie => (
        <li key={movie.id} className={style.movieItem}>
          <Link 
            to={`/movies/${movie.id}`} 
            state={{ from: location }} 
            className={style.movieLink}
          >
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
