import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import RatingTable from './MyRatings';
import RatingEdit from './EditRating';
import APIURL from '../../helpers/enviornment';

const RatingIndex = (props) => {
    const [ratings, setRatings] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [ratingToUpdate, setRatingToUpdate] = useState({});
    const [idToUpdate, setIdToUpdate] = useState({});

    const fetchRatings = () => {
        fetch(APIURL, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then((res) => res.json())
        .then((ratingData) => {
            setRatings(ratingData)
            console.log(ratingData)
        })
    }    

    const editUpdateId = (id) => {
        setIdToUpdate(id);
    }

    const editUpdateRating = (rating) => {
        setRatingToUpdate(rating);
        console.log(rating);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    useEffect(() => {
        fetchRatings();
    }, [])

    return (
        <Container>
            <Row>
                <Col md='9'>
                    <RatingTable ratings={ratings} editUpdateId={editUpdateId} editUpdateRating={editUpdateRating} updateOn={updateOn} fetchRatings={fetchRatings} sessionToken={props.sessionToken} />
                </Col>
                {updateActive ? <RatingEdit idToUpdate={idToUpdate} ratingToUpdate={ratingToUpdate} updateOff={updateOff} sessionToken={props.sessionToken} fetchRatings={fetchRatings}/> : <></> }
            </Row>
        </Container>
    )
}

export default RatingIndex;