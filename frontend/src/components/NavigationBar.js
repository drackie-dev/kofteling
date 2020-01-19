import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Styles = styled.div`
    .navbar{
        background-color: #ffffff;
        opacity: 1;
        border-bottom: 4px solid;
        border-image-source: linear-gradient(to bottom, #eeeeee 99%, #ffffff 100%);
        border-image-slice: 1;
        margin-bottom = -60px;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #000000;
        transition: 0.3s;
        &:hover {
            color: #a0ce4e;
        }
    }
`

export function NavigationBar() {

    const [expanded, setExpanded] = useState(false);

    return (
        <Styles>
            <Navbar expanded={expanded} fixed="top" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Website</Navbar.Brand>
                    <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item><Nav.Link onClick={() => setExpanded(false)} as={Link} to="/">Home</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link onClick={() => setExpanded(false)} as={Link} to="/about">About</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link onClick={() => setExpanded(false)} as={Link} to="/contact">Contact</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link onClick={() => setExpanded(false)} as={Link} to="/login">Log In</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link onClick={() => setExpanded(false)} as={Link} to="/signup">Sign Up</Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Styles>
    )
}