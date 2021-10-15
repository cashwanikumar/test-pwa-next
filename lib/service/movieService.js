import axios from "axios";

export const getTop100Movies = async () => {
  try {
    const movies = await axios.get(
      `https://imdb-api.com/en/API/Top250Movies/k_ph00vvpa`
      // `http://localhost:3000/api/movies`
    );
    return movies.data;
  } catch (err) {
    throw err;
  }
};

export const getFullMovieDetail = async (id) => {
  try {
    // const moviesCast = await axios.get(
    //   `https://imdb-api.com/en/API/FullCast/k_oydtnzw4/${id}`
    // );
    const moviesPoster = await axios.get(
      `https://imdb-api.com/en/API/Posters/k_ph00vvpa/${id}`
    );
    const moviesRating = await axios.get(
      `https://imdb-api.com/en/API/Ratings/k_ph00vvpa/${id}`
    );
    // return moviesRating.data;
    return {
      // ...moviesCast.data,
      ...moviesPoster.data,
      ...moviesRating.data,
    };
  } catch (err) {
    throw err;
  }
};
