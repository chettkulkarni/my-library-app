import React from 'react'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';


const Navbar_home = ({ books }) => {
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">LIMS- Library Management Platform</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/search?title=xxyyzz&authors=zzzyymm&language=abbcc">Search</Nav.Link>
      <Nav.Link href="#pricing">Dummy</Nav.Link>
      <NavDropdown title="Dummy" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Dummy</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Dummy</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Dummy</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Dummy</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dummy
      </Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
    )
  };
export default Navbar_home