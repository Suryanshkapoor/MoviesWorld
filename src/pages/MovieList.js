import React from "react";
import { useEffect } from "react";
import { Card } from '../components'
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({apiPath, title}) => {
  const { data: movies } = useFetch(apiPath);
  useEffect(() => {
    document.title = `${title} - Movie World`;
  });

  

  return (
    <main >
      <section className="py-7">
        <div className="flex justify-start flex-wrap others:justify-evenly">
          {movies.map((movie)=>(
            <Card key={movie.id} movie={movie}/>
          ))}
        </div>
      </section>
    </main>
  );
};
