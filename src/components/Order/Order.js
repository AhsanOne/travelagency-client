import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { addToDb } from '../../utilities/fakeDb';
import './Order.css'

const Order = () => {
    const [service, setService] = useState({})
    const { id } = useParams();
    const nameRef = useRef()
    const emailRef = useRef()
    const destinationRef = useRef()
    const checkinRef = useRef()
    const checkoutRef = useRef()
    const roomRef = useRef()
    const audultsRef = useRef()
    const childrenRef = useRef()
    const {key, ...rest} = service
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id])

    const handleBookOrder = e => {
        e.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value
        const destination = destinationRef.current.value
        const checkin = checkinRef.current.value
        const checkout = checkoutRef.current.value
        const room = roomRef.current.value
        const audult = audultsRef.current.value
        const children = childrenRef.current.value
        const orderStatus = "pending"
        const order = {name, email, destination, checkin, checkout, room, audult, children, orderStatus, key, rest}
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                addToDb(service.key)
                alert('Order Successfull!')
                e.target.reset()
            }
        })
    }

    return (
        <div style={{backgroundImage: `url(${service.img_url})`}} className="order-page">
            <Container className="py-5">
                <div className="d-block d-md-flex justify-content-between align-items-center">
                    <div className="order-form">
                        <Form onSubmit={handleBookOrder}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicDestination">
                                <Form.Label>Your Destination</Form.Label>
                                <Form.Control ref={destinationRef} type="text" placeholder="Enter a destination or hotel name" />
                            </Form.Group>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCheckIn">
                                    <Form.Label>Check In</Form.Label>
                                    <Form.Control ref={checkinRef} type="date" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCheckOut">
                                    <Form.Label>Check Out</Form.Label>
                                    <Form.Control ref={checkoutRef} type="date" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridRooms">
                                    <Form.Label>Rooms</Form.Label>
                                    <Form.Control ref={roomRef} type="number" placeholder="1" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridAudults">
                                    <Form.Label>Audults</Form.Label>
                                    <Form.Control ref={audultsRef} type="number" placeholder="1" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridChildren">
                                    <Form.Label>Children</Form.Label>
                                    <Form.Control ref={childrenRef} type="number" placeholder="0" />
                                </Form.Group>
                            </Row>
                            <Button variant="primary" type="submit">Book Order</Button>
                        </Form>
                    </div>
                    <div className="order-service-info">
                        <h1>{service.place}</h1>
                        <p>{service.details}</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Order
