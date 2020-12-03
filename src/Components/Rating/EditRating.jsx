import React, { useState } from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from '../../helpers/enviornment';

// const URL = 'http://localhost:3000/ratings/myratings'

const RatingEdit = (props) => {
    const [editRating, setEditRating] = useState(props.ratingToUpdate);
    
    console.log(props.ratingToUpdate)
    console.log(props.idToUpdate)

    const ratingUpdate = (event, rating) => {
        event.preventDefault();
        console.log(props.idToUpdate)
        fetch(`${APIURL}/${props.idToUpdate}`, {
            method: 'PUT',
            body: JSON.stringify({rating: editRating}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            }
        }).then((res) => {
            props.fetchRatings();
            props.updateOff();
        })
    }



    return(
        <>
            <Modal isOpen={true}>
                <ModalHeader>Change your rating</ModalHeader>
                <ModalBody>
                    <Form onSubmit={ratingUpdate}>
                        <FormGroup>
                            <Label htmlFor='rating'>Edit Rating:</Label>
                            <Input name='rating' type="number" min="0" max="10" value={editRating} onChange={(event) => setEditRating(event.target.value)} />
                        </FormGroup>
                        <Button type='submit'>Update the rating</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    )
 }

 export default RatingEdit;




// const EditRating = (props) => {
//     const [movieRating, setMovieRating] = useState()
//     console.log(props.ratings[4].rating)

//     const ratingUpdate = e => {
//         console.log(e.target.value)
//         setMovieRating(e.target.value)
//     }

//     const putData = async (id) => {
//             await fetch(`${URL}/${id}`, {
//                 method: 'PUT',
//                 body: {
//                     "rating": "rating"
//                     },
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': props.sessionToken
//                     }
//             }
//             )
//             .then(res => {
//                 // const put = ratings.filter(rating => id !== rating.id)
//                 props.getData()
//             })
//             .catch (err => {
//                 console.log(err)
//             })
//     }

//     return (
//         // props.ratings.map(({ id, rating}) => {
//         <form>
//             <input type="number" name="rating" min="0" max="10" value={props.rating} onChange={ratingUpdate}></input>
//             <button className='button' onClick={() => putData(props.id)}>Update</button>
//         </form>
//     // }
//     )
//     // )
// }