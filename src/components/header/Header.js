import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom'
// import '../../App.css';
import './Header.css';
import "../../scss/custom.scss";
import logo from '../../img/logo_mapstories_round_scandi.png';


function Header() {
    return (
        <div className='header'>
            <Navbar sticky='top' expand='lg' variant='primary' bg='success' >
            <Navbar.Brand  /> 
            <Link to="/"><img src={logo} width='60vw' height='60vh' alt="mapstories" /></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link to="/">
                    <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link to="/about">
                    <Link to="/about">About</Link>
                </Nav.Link>
                {/* <Nav.Link href="/ClimateMigration">Climate-induced Migration</Nav.Link>
                <Nav.Link href="/Conflicts">Conflicts</Nav.Link> */}
                <NavDropdown title="Climate-induced Migration" id="basic-nav-dropdown">
                {/* <NavDropdown.Item href="/ClimateMigration">Start</NavDropdown.Item> */}
                <NavDropdown.Item>
                    <Link to="/ClimateMigration/Facts">Facts</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <Link to="/ClimateMigration/Map">Map</Link>
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="/ClimateMigration/Stories">Stories</NavDropdown.Item> */}
                <NavDropdown.Divider />
                <NavDropdown.Item>
                    <Link to="/ClimateMigration/Submit">Submit your story</Link>
                </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Conflicts" id="basic-nav-dropdown">
                <NavDropdown.Item>
                    <Link to="/Conflicts">Map</Link>
                </NavDropdown.Item>
                    {/* <NavDropdown.Item href="/Conflicts2">Map 2</NavDropdown.Item> */}
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>       
            </Navbar>
        </div>
    )
}

export default Header
