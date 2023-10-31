

import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const Search = ({ apiPath }) => {
  
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query')
  const { data: movies } = useFetch(apiPath, query);
  useEffect(() => {
    document.title = `"${query}" - Movie World`;
  });

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{movies.length===0 ?`No results found for '${query}'`:`Results for '${query}'`}</p>
      </section>
      <section className="py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
