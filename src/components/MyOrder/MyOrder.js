import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Badge, Container, Table } from 'react-bootstrap'
import { getStoredOrder, removeFromDb } from '../../utilities/fakeDb'

const MyOrder = () => {
    const [orders, setOrders] = useState([])
    const storedOrder = getStoredOrder()
    const keys = Object.keys(storedOrder)
    const trash_icon = <FontAwesomeIcon icon={faTrashAlt} />

    useEffect(() => {
        fetch('http://localhost:5000/myorder', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    setOrders(data)
                }
            })
    }, [])

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
                        removeFromDb(key)
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
                                <td><span onClick={() => handleDeleteOrder(order._id, order.key)}>{trash_icon}</span></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default MyOrder
