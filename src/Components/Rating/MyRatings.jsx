import React, { useState, useEffect } from 'react'
import axios from 'axios'

const URL = 'http://localhost:3000/ratings/myratings'

const Table = (props) => {
    const [ratings, setRatings] = useState([])   //employees , setEmployees

    console.log(props.sessionToken)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await axios.get(URL, {
            headers: ({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        setRatings(response.data)
    }

    const removeData = async (id) => {

        await axios.delete(`${URL}/${id}`, {
            headers: ({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        
        .then(res => {
            const del = ratings.filter(rating => id !== rating.id)
            setRatings(del)
        })
    }

    const renderHeader = () => {
        let headerElement = ['id', 'rating', 'movieId']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

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
                </tr>
            )
        })
    }

    return (
        <>
            <h1 id='title'>React Table</h1>
            <table id='rating'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </>
    )
}

export default Table