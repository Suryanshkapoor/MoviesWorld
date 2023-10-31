
import { Route, Routes} from 'react-router-dom';
import {MovieList, MovieDetails, Search, PageNotFound, About, Contact, Privacy, License} from '../pages';

export const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MovieList apiPath="movie/now_playing" title='Home'/>} />
        <Route path="/movies/:id" element={< MovieDetails apiPath="movie/:id"/>} />
        <Route path="/movies/popular" element={< MovieList apiPath="movie/popular" title='Popular'/>} />
        <Route path="/movies/top" element={ <MovieList apiPath="movie/top_rated" title='Top Rated'/>} />
        <Route path="/movies/upcoming" element={<MovieList apiPath="movie/upcoming" title='Upcoming'/>} />
        <Route path="/search" element={<Search apiPath="search/movie" />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/privacypolicy" element={<Privacy/>}/>
        <Route path="/license" element={<License/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </main> 
  )
}