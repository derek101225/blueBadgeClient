import React from 'react'


const Movie = ({title, poster_path, overview, vote_average}) => {
     const IMG_API = `https://image.tmdb.org/t/p/w1280${poster_path}`


    return(    
    <div className='movie'>
           <a href='/MovieCard'><img src={IMG_API} alt={title} /></a>
            <div className='movie-info'>
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>

        <div className='movie-over'>
            <h2>OverView:</h2>
            <p>{overview}</p>
        </div>
    </div>

    )
}

export default Movie