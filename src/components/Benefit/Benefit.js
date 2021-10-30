import { faCalendar, faCouch, faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './Benefit.css'

const Benefit = () => {
    const calender = <FontAwesomeIcon icon={faCalendar} />
    const couch = <FontAwesomeIcon icon={faCouch} />
    const shield = <FontAwesomeIcon icon={faShieldAlt} />
    return (
        <div className="benefit">
            <Container>
                <div className="text-center">
                    <h1>Our Benefit</h1>
                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                </div>
                <Row xs={1} md={3} className="g-4 mt-5">
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>{calender} <span className="ms-3">Personal Schedule</span></Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>{couch} <span className="ms-3">Luxury Interiors</span></Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>{shield} <span className="ms-3">Safe &#38; Confidential</span></Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Benefit
