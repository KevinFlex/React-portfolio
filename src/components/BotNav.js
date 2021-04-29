import React from 'react';
import '../App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import navLink1 from '../asset/layout.PNG'
import navLink2 from '../asset/jsbin.PNG'
import navLink3 from '../asset/regex.PNG'
import navLink4 from '../asset/codepen.png'



function BotNav() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">FlexDevelopment © 2021</Navbar.Brand>
            <Nav className="mr-auto">
                <NavDropdown drop="up" title="dev usefull tool" id="basic-nav-dropdown">
                    <NavDropdown.Item href="https://layoutit.com/" target="_blank" rel="noreferrer">Layoutit! <img src={navLink1} className="navIcon" alt="Layout" /></NavDropdown.Item>
                    <NavDropdown.Item href="https://jsbin.com/?html,output" target="_blank" rel="noreferrer">JsBin <img src={navLink2} className="navIcon" alt="Js" /></NavDropdown.Item>
                    <NavDropdown.Item href="https://regexr.com/" target="_blank" rel="noreferrer">RegExr <img src={navLink3} className="navIcon" alt="Reg" /></NavDropdown.Item>
                    <NavDropdown.Item href="https://codepen.io/" target="_blank" rel="noreferrer">CodePen <img src={navLink4} className="navIcon" alt="Code" /></NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    );
}

export default BotNav;