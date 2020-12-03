import React, {useEffect, useState} from 'react'
import Movie from './Movie'
import {Link} from 'react-router-dom';

const featured_API = `https://api.themoviedb.org/3/movie/popular?api_key=58269892c382f28ba4692e1cab597755&language=en-US&page=1`


function Movieview(props) {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  
  console.log(props.sessionToken);

  const search_API = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=`

  useEffect(() => {
    fetch(featured_API)
      .then((res) => res.json())
      .then((data) => {
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
    <Link className='Home' to='/'><h3 className='nav'>MovieView</h3></Link>
    <Link className='Home' to='/UpComing'><h3 className='nav'>Up Coming</h3></Link>
      <form onSubmit={handleOnSumit}>
            <input className='search' type='text' value={searchTerm} onChange={handleOnChange} placeholder='Search Movie' />
        </form>
        <Link className='Home' to='/TopRated'><h3 className='nav'>Top Rated</h3></Link>
        <Link className='Home' to='/RatingIndex'><h3 className='nav'>Ratings</h3></Link>
        <Link className='Home' to='/Auth'><h3 className='nav'>Login/sign up</h3></Link>
    </header>

    <div className='movie-container'>
      {movies.length > 0 ?  movies.map((movie) => <Movie movie={movie} key={movie.id} sessionToken={props.sessionToken}/>)  : <> </> }
    </div>


    </>
  );
}

export default Movieview;