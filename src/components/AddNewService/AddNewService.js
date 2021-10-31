import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const AddNewService = () => {
    const prefixIDRef = useRef()
    const placeRef = useRef()
    const destinationRef = useRef()
    const ratingRef = useRef()
    const reviewRef = useRef()
    const ratingDaysRef = useRef()
    const priceRef = useRef()
    const photoUrlRef = useRef()
    const detailsRef = useRef()

    const handleAddNewService = e => {
        e.preventDefault()
        const key = prefixIDRef.current.value
        const place = placeRef.current.value;
        const destination = destinationRef.current.value;
        const rating = ratingRef.current.value;
        const review = reviewRef.current.value;
        const ratingDays = ratingDaysRef.current.value
        const price = priceRef.current.value;
        const img_url = photoUrlRef.current.value;
        const details = detailsRef.current.value
        const service = { key, place, destination, rating, review, ratingDays, price, img_url, details }
        
        fetch('https://frightening-skull-69922.herokuapp.com/services', {
            method: "POST",
            headers:{
                "content-type": "application/json",
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert("Successfully Added Service!")
                e.target.reset()
            }
        })
    }
    return (
        <div className="mt-5">
            <Container>
                <div style={{ boxShadow: "0 2px 8px 0 rgb(0 0 0 / 8%)" }} className="order-form m-auto">
                    <Form onSubmit={handleAddNewService}>
                        <Form.Group className="mb-3">
                            <Form.Label>Place</Form.Label>
                            <Form.Control required ref={placeRef} type="text" placeholder="Write Place Here" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control required ref={destinationRef} type="text" placeholder="Write Destination Here" />
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>Rating</Form.Label>
                                <Form.Control required ref={ratingRef} type="number" placeholder="1" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Review</Form.Label>
                                <Form.Control required ref={reviewRef} type="number" placeholder="1" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Rating Days</Form.Label>
                                <Form.Control required ref={ratingDaysRef} type="number" placeholder="1" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control required ref={priceRef} type="number" placeholder="Write price" />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3">
                                <Form.Label>Prefix ID</Form.Label>
                                <Form.Control required ref={prefixIDRef} type="text" placeholder="Write a prefix Id" />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control required ref={photoUrlRef} type="text" placeholder="Enter service photo URL" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Details</Form.Label>
                            <Form.Control required ref={detailsRef} as="textarea" rows={3} />
                        </Form.Group>

                        <Button className="btn-regular" type="submit">Add New Service</Button>
                    </Form>
                </div>
            </Container>
        </div>
    )
}

export default AddNewService
