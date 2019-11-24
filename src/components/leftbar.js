import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Component} from 'react';



class LeftBar  extends Component {
  render(){
    var isAdmin=localStorage.getItem("isAdmin")
    alert(isAdmin)
    var adminlog=parseInt(isAdmin)
    var request=''
    var ret=''
    if (adminlog==1){
       request= <Nav.Link href="/Requests">Requests</Nav.Link>
       ret=<Nav.Link href="/Returns">Returns</Nav.Link>
    }
    else{
alert('not an admin')

    }
    

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
            {request}
            {ret}
            <Nav.Link href="/MyBooks">My Books</Nav.Link>
          </li>
        </Nav>
      </Navbar>
    </div>
  );
}
};
export default LeftBar;

//className="flex-column"
