import React from "react";

import { Link } from "react-router-dom";
import  TestImg   from '../assets/TestImg.jpeg';

export const Card = ({movie}) => {
  const {id,poster_path ,overview , title} = movie;
  
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : TestImg ;


  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl shadow-slate-600 dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link to={`/movies/${id}`}>
        <img
          className="w-100 rounded-t-lg"
          src={image}
          alt=""
        />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {overview}
          </p>
        </div>
      </Link>
    </div>
  )
}
