import { faCalendar, faEnvelope, faFighterJet, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
    const plane = <FontAwesomeIcon icon={faFighterJet} />
    return (
        <div className="footer">
            <Container>
                <Row xs={1} md={2} lg={3}>
                    <Col className="mt-4">
                        <h5 className="logo" href="#home">{plane} Travelagency</h5>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link className="ps-0" href="/home">Terms and condition</Nav.Link>
                            <Nav.Link className="ps-0" eventKey="link-1">Privacy policy</Nav.Link>
                            <Nav.Link className="ps-0" eventKey="link-2">About</Nav.Link>
                        </Nav>
                    </Col>
                    <Col className="mt-4">
                        <h5 className="text-white">HELP</h5>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link className="ps-0" href="/home">Help center?</Nav.Link>
                            <Nav.Link className="ps-0" eventKey="link-1">Authors</Nav.Link>
                        </Nav>
                    </Col>
                    <Col className="mt-4">
                        <h5 className="text-white">CONTACT</h5>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link className="ps-0" href="/home"><FontAwesomeIcon className="me-2" icon={faPhone} /> +0800 2336 7820</Nav.Link>
                            <Nav.Link className="ps-0" eventKey="link-1"><FontAwesomeIcon className="me-2" icon={faEnvelope} /> travelagency@gmail.com</Nav.Link>
                            <Nav.Link className="ps-0" eventKey="link-2"><FontAwesomeIcon className="me-2" icon={faCalendar} /> Book now</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
                <p className="text-white mt-4">Copyright &copy; 2021 All rights reserved</p>
            </Container>
        </div>
    )
}

export default Footer
