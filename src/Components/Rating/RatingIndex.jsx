import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
const URL = 'http://localhost:3000/ratings/myratings';

const RatingIndex = (props) => {
    const [ratings, setRatings] = useState([]);
    
    const fetchRatings = async () => {
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            }
        })
        const data = await response.json()
        console.log(data)
        setRatings(data)
    }
}



const RatingIndex = (props) => {

    return (
        <div>
            <RatingCreate movie={props.movie} sessionToken={props.sessionToken} />
        </div>
    )
}
export default RatingIndex;