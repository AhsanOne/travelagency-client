import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Service from '../Service/Service'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-5">
            <Container>
                <div className="text-center">
                    <h1>Popular Place</h1>
                    <p>Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</p>
                </div>
                <Row xs={1} md={3} className="g-4 mt-5">
                    {
                        services.map(service => <Service key={service.key} service={service}></Service>)
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Services
