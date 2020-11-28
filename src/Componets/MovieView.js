import React, {useEffect, useState} from 'react'
import Movie from './Movie'

const featured_API = `https://api.themoviedb.org/3/movie/popular?api_key=58269892c382f28ba4692e1cab597755&language=en-US&page=1`

function Movieview() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const search_API = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=`

  useEffect(() => {
    fetch(featured_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  },[])

  const handleOnSumit = (e) => {
    e.preventDefault()

    if(searchTerm) {
    fetch(search_API + searchTerm)
          .then((res) => res.json())
          .then((data) => {
            setMovies(data.results);
          });
          setSearchTerm('')
        }
  }
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
    <header>
    <h3>MovieView</h3>
      <form onSubmit={handleOnSumit}>
            <input className='search' type='text' value={searchTerm} onChange={handleOnChange} placeholder='Search Movie'>
            </input>
        </form>
      <h3>Login/sign up</h3>
    </header>

    <div className='movie-container'>
      {movies.length > 0 && movies.map((movie) => 
      <Movie key={movie.id}{...movie} />)}
    </div>
    </>
  );
}

export default Movieview;