import React, {useState, useEffect} from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import APIURL from '../../helpers/enviornment';


const RatingCreate = (props) => {
    const [rating, setRating] = useState();
    const [movieId, setMovieId] = useState(props.movie.id);
    
    console.log(rating, movieId);
       
    const handleSubmit = (e) => {
        if (e) {e.preventDefault()};
        fetch(`${APIURL}/ratings/createrating`, {
            method: 'POST',
            body: JSON.stringify({rating, movieId}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then((res) => res.json())
        .then((ratingData) => {
            console.log(ratingData);
        })
    }

    return (
        <>
            <div>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating name="customized-10" value={rating} defaultValue={0} max={10} onChange={(e) => setRating(e.target.value)} onClick={handleSubmit()}/>
                </Box>
            </div>
        </>
    )
}
export default RatingCreate

