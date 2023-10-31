import { useState, useEffect } from 'react'

export const useFetch = (apiPath, query='') => {

    const[data, setData] =useState([])

    useEffect(()=>{
        async function fetchMovies(){
          const responce = await fetch(`https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`);
          const json = await responce.json();
          setData(json.results);
        }
        fetchMovies()
      },[apiPath, query])
  return { data };
}
