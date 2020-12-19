import React from 'react';
import  Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';


const Bar = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Newsify</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/">CNN</Nav.Link>
                        <Nav.Link as={Link} to='/two'>Buzzfeed</Nav.Link>
                        <Nav.Link as={Link} to='/three'>All</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

module.exports = Bar;