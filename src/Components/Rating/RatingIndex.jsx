import React, {useState, useEffect} from 'react';
import RatingCreate from './RatingCreate';
const RatingIndex = (props) => {
    // const [rating, setRating] = useState([])

    console.log(props)

    const fetchRating = () => {
        fetch(`http://localhost:3000/rating/`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then ((res) => res.json())
        .then ((ratingData) => {
            setRating(ratingData)
        })
    }
    useEffect (() => {
        fetchRating();
    }, [])

    return (
        <div>
            <RatingCreate movie={props.movie} sessionToken={props.sessionToken}/>
        </div>
    )
}
export default RatingIndex;