import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const LeftBar = ({ books }) => {
    return (
<div class="col-md-3">
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