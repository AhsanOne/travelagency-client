import { faFighterJet, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import './Header.css'

const Header = () => {
    const plane = <FontAwesomeIcon icon={faFighterJet} />
    const search = <FontAwesomeIcon icon={faSearch} />
    const user_icon = <FontAwesomeIcon className="user-photo" icon={faUserCircle} />
    const { user, handleSignOut } = useAuth()

    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand className="logo" href="#home">{plane} Travelagency</Navbar.Brand>
                    <Form className="d-md-flex d-none search-form ms-auto">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="shadow-none border-0 search-field"
                            aria-label="Search"
                        />
                        <Button className="search-btn border-0">{search}</Button>
                    </Form>
                    {
                        user.email ? <NavDropdown className="ms-auto" title={<img className="user-photo" src={user.photoURL} alt="" />} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">{user.displayName}</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/myorder">My Order</NavDropdown.Item>
                        <NavDropdown.Item href="/allorder">Manage All Order</NavDropdown.Item>
                        <NavDropdown.Item href="/addnew">Add New Service</NavDropdown.Item>
                        <NavDropdown.Item onClick={handleSignOut}>Logout</NavDropdown.Item>
                    </NavDropdown> : <Nav className="ms-auto">
                        <Nav.Link as={Link} className="d-flex" to="/login">{user_icon} <span className="ms-2 text-main">Login</span></Nav.Link>
                    </Nav>
                    }
                </Container>
            </Navbar>
            {/* <Navbar>
                <Container>
                    <Form className="d-flex d-md-none search-form m-auto">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="shadow-none border-0 search-field"
                            aria-label="Search"
                        />
                        <Button className="search-btn border-0">{search}</Button>
                    </Form>
                </Container>
            </Navbar> */}
        </div>
    )
}

export default Header
