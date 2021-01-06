import React from 'react';
import { Navbar as Bar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
    return (
        <Bar expand="lg">
            <Container>
                <Bar.Brand as={Link} to="/">Newsify</Bar.Brand>
                <Bar.Toggle aria-controls="mainNav" />
                <Bar.Collapse id="mainNav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/sources/cnn">
                            CNN
                        </Nav.Link>
                        <Nav.Link as={Link} to="/sources/buzzfeed">
                            Buzzfeed
                        </Nav.Link>
                        <Nav.Link as={Link} to="/sources/all">
                            All
                        </Nav.Link>
                    </Nav>
                </Bar.Collapse>
            </Container>
        </Bar>
    )
}

module.exports = Navbar;