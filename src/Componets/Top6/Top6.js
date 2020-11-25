import React, {useState, useEffect} from 'react';
// import button from './Componets/Search/Search'


const Top6 = () => {
    const [movies, setMovies] = useState([])

    useEffect(() =>{
        loadData();
    }, []);

    const loadData = async () => {
        const PopulerURL = 'https://api.themoviedb.org/3/movie/popular?api_key=58269892c382f28ba4692e1cab597755&language=en-US&page=1'

        try {
            const res = await fetch(PopulerURL);
            const data  = await res.json();
            setMovies(data.results)
        }catch(err){
            console.error(err);
        }
    }

    return(
        <div>
        {movies.filter(movie => movie.poster_path).map(movie => (
            <div key={movie.id}>
               <img  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt='movie title' />
                <div>
                    <h3>{movie.title}</h3>
                    <p><smal>RELEASE DATE: {movie.release_date}</smal></p>
                    <p><smal>Rating: {movie.vote_average}</smal></p>
                    <p>{movie.overview}</p>
                </div>
            </div>
        ))}
    </div>
    )
}


export default Top6;