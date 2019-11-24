import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const LeftBar = ({ books }) => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="flex-column"
      >
        <Nav className="mr-auto" style={{ minHeight: 100 + "vh" }}>
          <li>
            <Nav.Link href="/Requests">Requests</Nav.Link>
            <Nav.Link href="/Returns">Returns</Nav.Link>
            <Nav.Link href="/MyBooks">My Books</Nav.Link>
          </li>
        </Nav>
      </Navbar>
    </div>
  );
};
export default LeftBar;

//className="flex-column"
