import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TestImg from "../assets/TestImg.jpeg";

export const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    document.title = `${movie.title} - Movie World`;
  });

  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : TestImg;

  useEffect(() => {
    async function fetchMovie() {
      const responce = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const json = await responce.json();
      setMovie(json);
      console.log(movie);
    }
    fetchMovie();
  }, [params.id]);

  return (
    <main>
      <section className="flex flex-wrap justify-around">
        <div className="max-w-sm">
          <img
            className="rounded-xl border-gray-400 shadow-sm shadow-slate-700"
            src={image}
            alt="Movie Poster"
          />
        </div>
        <div className="max-w-2xl text-gray-700 dark:text-gray-400 ">
          <h1 className="text-4xl my-5 font-bold text-center lg:text-left">
            {movie.title}
          </h1>
          <p>{movie.overview}</p>
          {movie.genres ? (
            <p className="my-8">
              {movie.genres.map((genre) => (
                <span
                  className="py-1 px-4 ml-5 border border-gray-400 rounded"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-yellow-300 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ml-2 text-sm font-bold text-gray-700 dark:text-white">
                {movie.vote_average}
              </p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <p className="text-sm text-gray-700 dark:text-white">
                {movie.vote_count} reviews
              </p>
            </div>
          </div>
          <p className="my-5"><span className="font-bold">Budget :</span> {movie.budget}</p>
          <p className="my-5"><span className="font-bold">Revenue :</span> {movie.revenue}</p>
          <p className="my-5"><span className="font-bold">RunTime :</span> {movie.runtime} mins.</p>
          <p className="my-5"><span className="font-bold">Release Date :</span> {movie.release_date}</p>
          <p className="my-5"><span className="font-bold">IMDB code : </span><a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_Blank" rel="noreferrer">    {movie.imdb_id}</a></p>
          
        </div>
      </section>
    </main>
  );
};
