import React from 'react'
import {Table, Button} from 'reactstrap';
import './rating.css';

const URL = 'http://localhost:3000/ratings/myratings'

const RatingTable = (props) => {
    
    const deleteRating = (id) => {
        console.log(id)
        fetch(`${URL}/${id}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(() => props.fetchRatings())
        }
    

    const ratingMapper = () => {
        
        return props.ratings.map(({id, rating, movieId}) => {
            return(
                <tr key={id}>
                    <td>{id}</td>
                    <td>{movieId}</td>
                    <td>{rating}</td>
                    <td>
                        <Button color="primary" onClick={() => {props.editUpdateRating(rating); props.editUpdateId(id); props.updateOn()}} >Update</Button>
                        <Button color="danger" onClick={() => {deleteRating(id)}} >Delete</Button>
                    </td>
                </tr>
            )
        })
    }
    
    return(
        <>
            <h3>The Ratings</h3>
            <hr/>
            <Table striped id="table">
                <thead>
                    <tr>
                        <th>Rating ID</th>
                        <th>Movie ID</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {ratingMapper()}
                </tbody>
            </Table>
        </>
    )
}


// const ratingTable = (props) => {
//     const [ratings, setRatings] = useState([]);
//     const [updateActive, setUpdateActive] = useState(true);
//     const [ratingToUpdate, setRatingToUpdate] = useState();

//     console.log(props.sessionToken)

//     useEffect(() => {
//         getData()
//     }, [])

//     const getData = async () => {
//         const response = await fetch(URL, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': props.sessionToken
//             }
//         })
//         const data = await response.json()
//         console.log(data)
//         setRatings(data)
//     }

//     const editUpdateRating = (rating) => {
//         setRatingToUpdate (rating);
//     }

//     const updateOn = () => {
//         setUpdateActive(true);
//     }

//     const updateOff = () => {
//         setUpdateActive(false);
//     }

//     const removeData = async (id) => {
//         await fetch(`${URL}/${id}`, {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': props.sessionToken
//             }
//         })
//         .then(res => {
//             getData()
//         })
//     }

//     const renderHeader = () => {
//         let headerElement = ['id', 'rating', 'movieId']

//         return headerElement.map((key, index) => {
//             return <th key={index}>{key.toUpperCase()}</th>
//         })
//     }

//     const renderBody = () => {
//         return ratings && ratings.map(({ id, rating, movieId }) => {
//             return (
//                 <tr key={id}>
//                     <td>{id}</td>
//                     <td>{rating}</td>
//                     <td>{movieId}</td>
//                     <td className='opration'>
//                         <button className='button' onClick={() => removeData(id)}>Delete</button>
//                     </td>
//                     <td>
//                         {updateActive ? <EditRating sessionToken={props.sessionToken} updateOff={updateOff} ratings={ratings} getData={getData}/> : <></>}
//                     </td>
//                 </tr>
//             )
//         })
//     }
    
//     return (
//         <>
//             <h1 id='title'>React Table</h1>
//             <table id='rating'>
//                 <thead>
//                     <tr>{renderHeader()}</tr>
//                 </thead>
//                 <tbody>{renderBody()}</tbody>
//             </table>
//         </>
//     )
// }


export default RatingTable