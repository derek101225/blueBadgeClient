import React from 'react'
import {useState} from 'react'
import {Modal} from 'react-bootstrap';
import RatingIndex from '../Components/Rating/RatingIndex'


const Movie = (props) => {
    const IMG_API = `https://image.tmdb.org/t/p/w1280${props.movie.poster_path}`
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(    
        <>
            <div className='movie'>
                <img variant="primary" onClick={handleShow} src={IMG_API} alt={props.movie.title} />
                <div className='movie-info'>
                    <h3>{props.movie.title}</h3>
                    <span className='vote'>{props.movie.vote_average}</span>
                </div>
                <div className="movie-over" onClick={handleShow}>
                    <h2>Overview:</h2>
                    <p>{props.movie.overview}</p>
                </div>
            </div>

            
            <Modal className='modal' show={show} onHide={handleClose}>
                <Modal.Header >
                <div className='img-container'>
                    <img className='img' variant="primary" src={IMG_API} alt={props.movie.title} />
                    </div>
                </Modal.Header>
                <Modal.Body>{props.movie.title} <br /> <span><RatingIndex/></span></Modal.Body>
                <Modal.Footer>
                    
                </Modal.Footer>
            </Modal>
            
        </>
        
    )
}

export default Movie