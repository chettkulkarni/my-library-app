import React from 'react'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';


const LeftBar = ({ books }) => {
    return (
<div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="flex-column">

    <Nav className="mr-auto" style={{ minHeight : 100 + "vh" }}>
      <li><Nav.Link href="/features">Dummy</Nav.Link>
      <Nav.Link href="/pricing">Dummy</Nav.Link></li>
    </Nav>
    </Navbar>
</div>
    )
  };
export default LeftBar

//className="flex-column"