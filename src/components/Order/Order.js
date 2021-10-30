import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import './Order.css'

const Order = () => {
    const { id } = useParams();
    return (
        <div className="order-page">
            <Container className="py-5">
                <div className="d-block d-md-flex justify-content-between align-items-center">
                    <div className="order-form">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicDestination">
                                <Form.Label>Your Destination</Form.Label>
                                <Form.Control type="text" placeholder="Enter a destination or hotel name" />
                            </Form.Group>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCheckIn">
                                    <Form.Label>Check In</Form.Label>
                                    <Form.Control type="date"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCheckOut">
                                    <Form.Label>Check Out</Form.Label>
                                    <Form.Control type="date"/>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridRooms">
                                    <Form.Label>Rooms</Form.Label>
                                    <Form.Control type="number" placeholder="1"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridAudults">
                                    <Form.Label>Audults</Form.Label>
                                    <Form.Control type="number" placeholder="1"/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridChildren">
                                    <Form.Label>Children</Form.Label>
                                    <Form.Control type="number" placeholder="0"/>
                                </Form.Group>
                            </Row>
                            <Button variant="primary" type="submit">Book Order</Button>
                        </Form>
                    </div>
                    <div className="order-service-info">
                        <h1>MAKE YOUR RESERVATION</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur perspiciatis, sit repellat officiis eius libero ut quaerat quae fugiat quos? Nesciunt, amet sit dolorum inventore asperiores cum molestias earum minima.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Order
