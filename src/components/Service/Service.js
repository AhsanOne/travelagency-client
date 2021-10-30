import React from 'react'
import { Card, Col } from 'react-bootstrap'
import Rating from 'react-rating'
import { useHistory } from 'react-router-dom'
import './Service.css'

const Service = (props) => {
    const { img_url, place, destination, rating, review, ratingDays, price, _id } = props.service

    const history = useHistory()
    const handleBook =  () => {
        history.push(`/services/${_id}`)
    }

    return (
        <Col>
            <Card>
                <Card.Img className="service-img" variant="top" src={img_url} />
                <Card.Body>
                    <Card.Title>{place}</Card.Title>
                    <Card.Text className="text-main">
                        {destination}
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                        <Rating
                            initialRating={rating}
                            emptySymbol="fa fa-star-o fa-2x ratings"
                            fullSymbol="fa fa-star fa-2x ratings"
                            fractions={2}
                            readonly
                        />
                        <p>({review} review)</p>
                        <p><i className="fa fa-clock-o"></i> {ratingDays} Days</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5>${price}</h5>
                        <button onClick={handleBook} className="btn-regular">Book Now</button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Service
