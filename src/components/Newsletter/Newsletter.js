import React from 'react'
import { Container } from 'react-bootstrap'
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className="newsletter">
            <Container className="d-block d-md-flex justify-content-around align-items-center">
                <div>
                    <h3 className="text-white">Subscribe Our Newsletter</h3>
                    <p className="text-white">Subscribe newsletter to get offers and about new places to discover.</p>
                </div>
                <div>
                    <form>
                        <input placeholder="Enter your email address" type="email" name="" id=""/>
                        <input type="submit" value="Subscribe"/>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Newsletter
