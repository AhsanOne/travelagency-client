import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const AddNewService = () => {
    return (
        <div className="mt-5">
            <Container>
                <div style={{boxShadow:"0 2px 8px 0 rgb(0 0 0 / 8%)"}} className="order-form m-auto">
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Place</Form.Label>
                            <Form.Control type="text" placeholder="Write Place Here" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control type="text" placeholder="Write Destination Here" />
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>Rating</Form.Label>
                                <Form.Control type="number" placeholder="1" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Review</Form.Label>
                                <Form.Control type="number" placeholder="1" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Rating Days</Form.Label>
                                <Form.Control type="number" placeholder="1" />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Details</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Button className="btn-regular" type="submit">Add New Service</Button>
                    </Form>
                </div>
            </Container>
        </div>
    )
}

export default AddNewService
