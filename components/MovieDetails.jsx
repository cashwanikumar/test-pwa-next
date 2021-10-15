import Image from "next/image";

export const MovieDetails = ({ data }) => {
  return data ? (
    <div>
      <h1>{data.fullTitle}</h1>
      <div>Crew: {data.crew}</div>
      <div>Rating: {data.theMovieDb}</div>
      <div>
        {data.posters.map((img) => (
          <Image
            src={img.link}
            placeholder="blur"
            key={img.id}
            alt={data.title}
            width={300}
            height={300}
          />
        ))}
      </div>
    </div>
  ) : null;
};
