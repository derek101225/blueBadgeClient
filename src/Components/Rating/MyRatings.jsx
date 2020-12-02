import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

// const URL = 'http://localhost:3000/ratings/myratings'

const Table = (props) => {
    const [ratings, setRatings] = useState([])   //employees , setEmployees
    const [rating, setRating] = useState('')
    axios.defaults.headers.common['Authorization'] = props.sessionToken;
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    console.log(props.sessionToken)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:3000/ratings/myratings',
            // headers: {
            //     'Content-Type': 'application/json',
            //     'Authorization': props.sessionToken
            // }
        })
        setRatings(response.data)
    }

    // const getData = async () => {
    //     const response = await fetch(URL, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': props.sessionToken
    //         }
    //     })
    //     setRatings(response.data)
    // }

    const removeData = async (id) => {

        await axios({
            method: 'delete',
            url: `http://localhost:3000/ratings/myratings/${id}`,
            // headers: {
            //     'Content-Type': 'application/json',
            //     'Authorization': props.sessionToken
            // }
        })
        
        .then(res => {
            const del = ratings.filter(rating => id !== rating.id)
            setRatings(del)
        })
    }

    // const removeData = async (id) => {
    //     await fetch(`${URL}/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': props.sessionToken
    //         }
    //     })
    //     .then(res => {
    //         const del = ratings.filter(rating => id !== rating.id)
    //         setRatings(del)
    //     })
    // }
    
    const ratingUpdate = e => {
        setRating(e.target.value)
    }
        
    const putData = async ( id) => {
            await axios({
                method: 'put',
                url: `http://localhost:3000/ratings/myratings/${id}`,
                data: JSON.stringify({rating}),
                // headers: {
                //     'Content-Type': 'application/json',
                //     'Authorization': props.sessionToken
                //     }
                }
            )
            .then(res => {
                const put = ratings.filter(rating => id !== rating.id)
                setRatings(put)
            })
    }
    

    // const putData = async ( id) => {
    //         await fetch(`${URL}/${id}`, {
    //             method: 'PUT',
    //             body: {
    //                 "rating": "rating"
    //                 }},
    //             {headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': props.sessionToken
    //                 }
    //             }
    //         )
    //         .then(res => {
    //             const put = ratings.filter(rating => id !== rating.id)
    //             setRatings(put)
    //         })
    // }

    const renderHeader = () => {
        let headerElement = ['id', 'rating', 'movieId']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    
//     return (
//         <Modal isOpen = {true}>
//             <ModalHeader>All Ratings</ModalHeader>
//             <ModalBody>
//                 <Table>
//                     <thead>
//                         <tr>{renderHeader()}</tr>
//                     </thead>
//                     <tbody>
//                         <tr key={id}>
//                             <td>{id}</td>
//                             <td>{rating}</td>
//                             <td>{movieId}</td>
//                             <td className='opration'>
//                                 <Button className='button' onClick={() => removeData(id)}>Delete</Button>
//                             </td>
//                             <td>
//                                 <Form onSubmit={ratingUpdate}>
//                                     <Input type="number" name="rating" value={rating} onChange={(e) => setRatings(e.target.value)}></Input>
//                                     <Button type="submit">Update</Button>
//                                     {/* <button className='button' onClick={() => putData(id)}>Update</button> */}
//                                 </Form>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </Table>
//             </ModalBody>
//         </Modal>
//     )
// }


    const renderBody = () => {
        return ratings && ratings.map(({ id, rating, movieId }) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{rating}</td>
                    <td>{movieId}</td>
                    <td className='opration'>
                        <button className='button' onClick={() => removeData(id)}>Delete</button>
                    </td>
                    <td>
                        <form>
                            <input type="number" name="rating" id={props.id} min="0" max="10" value={rating} onChange={ratingUpdate}></input>
                            <button className='button' onClick={() => putData(id)}>Update</button>
                        </form>
                    </td>
                </tr>
            )
        })
    }
    /* <button type="submit">Update</button> */
    
    return (
        <>
            <h1 id='title'>React Table</h1>
            <table id='rating'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>{renderBody()}</tbody>
            </table>
        </>
    )
}


export default Table