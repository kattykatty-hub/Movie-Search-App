import { getMovieDetails } from "../../api/tmdb";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Outlet, Link } from "react-router-dom";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import style from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [movieData, setMovieData] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await getMovieDetails(movieId);
      setMovieData(data);
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className={style.movieDetailsPage}>
      <button onClick={() => navigate(-1)}>Go Back</button>
      {movieData && <MovieDetails movie={movieData} />}
      
      {/* Additional Information Links */}
      <div className={style.additionalInfo}>
        <h3>Additional Information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>

      {/* Outlet for nested components */}
      <Outlet context={movieId} />
    </div>
  );
};

export default MovieDetailsPage;