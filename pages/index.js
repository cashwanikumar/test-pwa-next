import Layout from "../components/layout";
import { getTop100Movies } from "../lib/service/movieService";
import Head from "next/head";
import { MovieList } from "../components/MoviesList";

export default function Movies(props) {
  const {
    movies: { items },
  } = props;
  console.log("---items---", items);
  return (
    <Layout>
      <Head>
        <title>Top 100 movies</title>
      </Head>
      <article>
        <MovieList movies={items} />
      </article>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const movies = await getTop100Movies();
  return {
    props: { movies }, // will be passed to the page component as props
  };
};
