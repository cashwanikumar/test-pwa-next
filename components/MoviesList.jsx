import Image from "next/image";
import Link from "next/link";
import styles from "../styles/movielist.module.css";

export const MovieList = ({ movies }) => {
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Link href={`/movies/${movie.id}`} key={movie.id}>
          <div className={styles.content}>
            <Image
              src={movie.image}
              alt="Picture of the movie"
              placeholder="blur"
              width={250}
              height={250}
            />
            <div>{movie.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};
