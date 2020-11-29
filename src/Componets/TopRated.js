import React, {useEffect, useState} from 'react'
import Movie from './Movie'


const toprated = `https://api.themoviedb.org/3/movie/top_rated?api_key=58269892c382f28ba4692e1cab597755&language=en-US&page=1`

function TopRated() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
  
    const search_API = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=`
  
    useEffect(() => {
      fetch(toprated)
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
    <a className='Home' href='/'><h3 className='nav'>MovieView</h3></a>
    <a className='Home' href='/UpComing'><h3 className='nav'>Up Coming</h3></a>
      <form onSubmit={handleOnSumit}>
            <input className='search' type='text' value={searchTerm} onChange={handleOnChange} placeholder='Search Movie'>
            </input>
        </form>
        <a className='Home' href='/TopRated'><h3 className='nav'>Top Rated</h3></a>
        <a className='Home' href='/SignUp'><h3 className='nav'>Login/sign up</h3></a>
    </header>
  
      <div className='movie-container'>
        {movies.length > 0 && movies.map((movie) => 
        <Movie key={movie.id}{...movie} />)}
      </div>
      </>
    );
  }
export default TopRated;
