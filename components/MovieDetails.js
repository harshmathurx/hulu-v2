import { ThumbUpIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Image from "next/image";


const MovieDetails = ({ movie }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const src = `${BASE_URL}${movie.backdrop_path || movie.poster_path}` || `${BASE_URL}${movie.poster_path}`;
  console.log(movie);
  return (
    <>
      <Head>
        <title>{movie.title} - Harsh Hulu</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta description={movie.overview} />
        <meta property="og:title" content={movie.title} key="ogtitle" />
        <meta property="og:description" content={movie.overview} key="ogdesc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex-col mx-20 my-10 sm:grid md:grid-cols-2">
        <Image className="col" src={src} priority={true} layout="intrinsic" width={640} height={360} alt={movie.title || movie.original_name} />

        <div className="p-3 mt-5 col md:ml-5">
          <h1 className="text-5xl text-white">{movie.title || movie.original_name}</h1>
          <p className="mt-10 text-lg max-w-xl md:mt-20">{movie.overview}</p>
          <p className="flex items-center opacity-0 group-hover:opacity-100 capitalize">
            {movie.media_type && `${movie.media_type} •`}{" "}
            {movie.release_date || movie.first_air_date} •{" "}
          </p>
        </div>
      </div>
    </>
  )
}
export default MovieDetails