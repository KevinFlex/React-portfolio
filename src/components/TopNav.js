import React from 'react';
import '../App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Logo from '../asset/logo.PNG'



function TopNav() {
    return (
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <img
                src= { Logo }
                width="200"
                height="80"
                className="d-block rounded mr-auto"
                alt="FlexDev logo" />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Button href="/contact" type="button" variant="outline-info">Contact</Button>
                    </Nav>
                    </Navbar.Collapse>
        </Navbar>
    );
}

export default TopNav;