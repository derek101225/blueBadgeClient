import React from "react";



const MovieCard = ({title, IMG_API, vote_average}) => {



    return(
        <div className='movie'>
           <img  src={IMG_API} alt={title} />
            <div className='movie-info'>
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>
        </div>
    )
}

export default MovieCard;