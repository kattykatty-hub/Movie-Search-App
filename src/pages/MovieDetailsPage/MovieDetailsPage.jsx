import { getMovieDetails } from "../../api/tmdb";
import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, useLocation, Outlet, Link } from "react-router-dom";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import style from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [movieData, setMovieData] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Use useRef to store the previous location
  const prevLocationRef = useRef(location.state?.from || '/');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const handleGoBack = () => {
    navigate(prevLocationRef.current);
  };

  return (
    <div className={style.movieDetailsPage}>
      <button onClick={handleGoBack}>Go Back</button>
      {movieData && <MovieDetails movie={movieData} />}
      
      <div className={style.additionalInfo}>
        <h3>Additional Information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: prevLocationRef.current }}>Cast</Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: prevLocationRef.current }}>Reviews</Link>
          </li>
        </ul>
      </div>

      <Outlet context={movieId} />
    </div>
  );
};

export default MovieDetailsPage;
