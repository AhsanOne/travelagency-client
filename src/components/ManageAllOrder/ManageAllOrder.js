import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Badge, Container, Table } from 'react-bootstrap'

const ManageAllOrder = () => {
    const [orders, setOrders] = useState([])
    const [updateOrder, setUpdateOrder] = useState({})
    const trash_icon = <FontAwesomeIcon className="me-4" icon={faTrashAlt} />

    useEffect(() => {
        fetch('http://localhost:5000/manageallorder')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleUpdateStatus = order => {
        const updateOrder = order
        updateOrder.orderStatus = "approve"
        setUpdateOrder(updateOrder)
        fetch(`http://localhost:5000/orders/${order._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateOrder)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successfull!')
                    setUpdateOrder({})
                }
            })
    }

    const handleDeleteOrder = (id, key) => {
        const url = `http://localhost:5000/orders/${id}`
        const procced = window.confirm('Are you sure, You want to delete?')
        if (procced) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully deleted!')
                        const remeiningOrders = orders.filter(orders => orders._id !== id)
                        setOrders(remeiningOrders)
                    }
                })
        }
    }

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
                        {
                            orders.map(order => <tr key={order.key}>
                                <td>#{order.key}</td>
                                <td>{order.rest.place}</td>
                                <td>{order.rest.destination}</td>
                                <td><Badge bg="danger">{order.orderStatus}</Badge></td>
                                <td>{order.rest.price}</td>
                                <td><span onClick={() => handleDeleteOrder(order._id, order.key)}>{trash_icon}</span> <Badge bg="success" onClick={() => handleUpdateStatus(order)}>Approve</Badge></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default ManageAllOrder
