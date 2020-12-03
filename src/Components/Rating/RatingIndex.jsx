import React, {useState, useEffect} from 'react';
import RatingCreate from './RatingCreate';
import APIURL from '../../helpers/enviornment';

const URL = `${APIURL}/ratings/myratings`

const RatingIndex = (props) => {
    // const [rating, setRating] = useState([])

    // console.log(props)

    // const fetchRating = () => {
    //     fetch(`http://localhost:3000/ratings/`, {
    //         method: 'GET',
    //         headers: new Headers ({
    //             'Content-Type': 'application/json',
    //             'Authorization': props.sessionToken
    //         })
    //     })
    //     .then ((res) => res.json())
    //     .then ((ratingData) => {
    //         setRating(ratingData)
    //         console.log(ratingData)
    //     })
    // }

    // useEffect (() => {
    //     fetchRating();
    // }, [])

    return (
        <div>
            <RatingCreate movie={props.movie} sessionToken={props.sessionToken} />
        </div>
    )
}
export default RatingIndex;