import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Badge, Container, Table } from 'react-bootstrap'

const MyOrder = () => {
    const trash_icon = <FontAwesomeIcon icon={faTrashAlt} />
    return (
        <div className="mt-5">
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Order #</th>
                            <th>Service Name</th>
                            <th>Destination</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Korola Megna</td>
                            <td>United State</td>
                            <td><Badge bg="danger">Pending</Badge></td>
                            <td>$10000</td>
                            <td>{trash_icon}</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default MyOrder
