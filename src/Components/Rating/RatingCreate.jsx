import React, {useState, useEffect} from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const RatingCreate = (props) => {
    const [rating, setRating] = useState();
    const [movieId, setMovieId] = useState(props.movie.id);
    
    console.log(rating, movieId);

    console.log(props);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/ratings/createrating/', {
            method: 'POST',
            body: JSON.stringify({rating, movieId}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => res.json())
        .then((ratingData) => {
            console.log(ratingData);
            props.updateToken(ratingData.token)
            // props.fetchRating();
        })
    }

    return (
        <>
            <div>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating name="customized-10" value={rating} defaultValue={0} max={10} onClick={handleSubmit}/>
                </Box>
            {/* <form>
                <label htmlFor="movieId">Movie ID</label>
                <input type="text" name="movieId" value={movieId} onChange={(e) => setMovieId(e.target.value)}></input>
                <br/>
                <label htmlFor="userId">User ID</label>
                <input type="text" name="movieId" value={userId} onChange={(e) => setUserId(e.target.value)}></input>
                <br/>
                <button type="submit">Submit</button>
            </form> */}
            </div>
        </>
    )
}
export default RatingCreate



//passing in the movieID from API a few parents up
//saving produces error, saving elsewhere compiles fine after
//cors errors
//pass in userId upon rating
//fetch connecting to DB