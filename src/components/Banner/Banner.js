import React from 'react'
import { Container } from 'react-bootstrap'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <Container className="banner-content">
                <h1 className="text-white">The New Frontier</h1>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto tempora dolor ipsam odio suscipit sit nobis esse iste officia harum qui labore unde incidunt voluptate, natus magnam est exercitationem!</p>
            </Container>
        </div>
    )
}

export default Banner
