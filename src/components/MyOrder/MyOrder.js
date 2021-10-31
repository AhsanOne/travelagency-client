import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import './MyOrder.css'
import { getStoredOrder, removeFromDb } from '../../utilities/fakeDb'
import useAuth from '../../hooks/useAuth'

const MyOrder = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()
    const storedOrder = getStoredOrder()
    const keys = Object.keys(storedOrder)
    const trash_icon = <FontAwesomeIcon icon={faTrashAlt} />

    useEffect(() => {
        fetch('https://frightening-skull-69922.herokuapp.com/myorder', {
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
        const url = `https://frightening-skull-69922.herokuapp.com/orders/${id}`
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
            <Container className="my-order">
                <Table striped bordered hover className="border-0 border-white">
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>Customer</th>
                            <th>Service</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="border-0 border-white">
                        {
                            orders.map(order => <tr key={order.key}>
                                <td className="d-flex justify-content-center">
                                    <div>
                                        <img className="user-photo" src={user.photoURL} alt="" />
                                    </div>
                                    <div className="ms-2">
                                        <h6 className="mb-0">{order.key}</h6>
                                        <p>{order.checkin}</p>
                                    </div>
                                </td>
                                <td>{order.name}</td>
                                <td><img className="user-photo" src={order.rest.img_url} alt="" /></td>
                                <td><Button variant="success">{order.orderStatus}</Button></td>
                                <td>${order.rest.price}</td>
                                <td><Button variant="primary" onClick={() => handleDeleteOrder(order._id, order.key)}>Delete</Button></td>
                            </tr>)
                        }
                    </tbody>
                </Table>

            </Container>
        </div>
    )
}

export default MyOrder
