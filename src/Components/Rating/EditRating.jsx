import React, { useState, useEffect } from 'react';
import APIURL from '../../helpers/enviornment';

const URL = `${APIURL}/ratings/myratings`;

const EditRating = (props) => {
    const [movieRating, setMovieRating] = useState()
    console.log(props.ratings[4].rating)

    const ratingUpdate = e => {
        console.log(e.target.value)
        setMovieRating(e.target.value)
    }

    const putData = async (id) => {
            await fetch(`${URL}/${id}`, {
                method: 'PUT',
                body: {
                    "rating": "rating"
                    },
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': props.sessionToken
                    }
            }
            )
            .then(res => {
                // const put = ratings.filter(rating => id !== rating.id)
                props.getData()
            })
            .catch (err => {
                console.log(err)
            })
    }

    return (
        // props.ratings.map(({ id, rating}) => {
        <form>
            <input type="number" name="rating" min="0" max="10" value={props.rating} onChange={ratingUpdate}></input>
            <button className='button' onClick={() => putData(props.id)}>Update</button>
        </form>
    // }
    )
    // )
}

export default EditRating;