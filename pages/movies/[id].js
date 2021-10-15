import React from "react";
import Layout from "../../components/Layout";
import { MovieDetails } from "../../components/MovieDetails";
import {
  getFullMovieDetail,
  getTop100Movies,
} from "../../lib/service/movieService";

const Movie = ({ movieData }) => {
  return (
    <Layout>
      <MovieDetails data={movieData} />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  // Get the paths we want to pre-render based on persons
  const movies = await getTop100Movies();
  const paths = movies.items.map((movie) => ({
    params: { id: movie.id },
  }));
  //   console.log(paths);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: true,
  };
};

// This function gets called at build time on server-side.
export const getStaticProps = async ({ params }) => {
  const movieData = await getFullMovieDetail(params.id);
  return { props: { movieData } };
};

export default Movie;
