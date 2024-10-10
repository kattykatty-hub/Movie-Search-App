import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2VkYjA4NzQyZWJlZGZhNjI5NDJkMjM4YmZlN2I2OCIsIm5iZiI6MTcyNzk2OTY1OS43NzQwOTcsInN1YiI6IjY2ZmViODNlYjE0NjI4MmY3Yjg0ZTVjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4bAnwchYwRnuBeRw4CpKMJgLGuChliLoCbkw7jIz8Xk",
};

export function getTrendingMovies(timeWindow = "day") {
  return axios
    .get(`trending/movie/${timeWindow}`)
    .then((response) => response.data);
}

export function getMovies(query, page = 1) {
  return axios
    .get(`search/movie`, {
      params: {
        query,
        page,
      },
    })
    .then((response) => response.data);
}

export function getMovieReviews(movieId, page) {
  return axios
    .get(`movie/${movieId}/reviews`, {
      params: {
        page,
      },
    })
    .then((response) => response.data);
}

export function getMovieCredits(movieId) {
  return axios
    .get(`movie/${movieId}/credits`)
    .then((response) => response.data);
}

export function getMovieDetails(movieId) {
  return axios.get(`movie/${movieId}`).then((response) => response.data);
}

export function getImagePath(path) {
  return `https://image.tmdb.org/t/p/w500${path}`;
}