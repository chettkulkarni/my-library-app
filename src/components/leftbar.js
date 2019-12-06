import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Component} from 'react';
import '../css/bookinfodesc.css';
// import firebase from 'firebase';



class LeftBar  extends Component {

  state={request:'',ret:'',mybook:'',isLoggedIn:false}

  componentWillMount = () =>{

    //   firebase.auth().onAuthStateChanged(user=>{
    //       this.setState({isLoggedIn : !!user });
    //   });
    //   alert(this.state.isLoggedIn)
    // if(this.state.isLoggedIn){
    //   var mybook=<Nav.Link href="/MyBooks">My Books</Nav.Link>
    //   this.setState({mybook : mybook})
    // }

    var isAdmin=localStorage.getItem("isAdmin")
    var adminlog=parseInt(isAdmin)
    var request=''
    var ret=''
    if (adminlog===1){
       request= <Nav.Link href="/Requests">Requests</Nav.Link>
       ret=<Nav.Link href="/Returns">Returns</Nav.Link>
       this.setState({request:request,ret:ret})
    }
    else{


    }
  }
  render(){
    
    

  return (
    <div >
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Nav style={{ minHeight: 100 + "vh" }}>
          <li>
            {this.state.request}
            {this.state.ret}
            {/* {this.state.mybook} */}
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
