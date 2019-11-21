import React, { Component } from 'react';
import '../App.css';
// import {BrowserRouter} from 'react-router-dom';
import BookInfoDesc from './bookinfodesc';
import NavbarHome from './navbar';
import Leftbar from './leftbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import PrimarySearchAppBar from './appbar'
import axios from 'axios';




class BookInfo extends Component {

	render() {
	  return (
		<div>
		   {/* <NavbarHome/> */}
		   <PrimarySearchAppBar/>
		  <Row className="row">
			{/* <Leftbar className='col-md-3'/> */}
		  <BookInfoDesc books={this.state.books} button={this.state.button} className='col-md-9' />
		  </Row> 
		  </div>
			);
	}
	state = {
	  books: [],button:'',isLoggedIn:false
	}
  
	componentWillMount() {
		firebase.auth().onAuthStateChanged(user=>{
			this.setState({isLoggedIn : !!user });   
		});

		var bookId = window.location.pathname.split("/")[2]
		var userInfo = {
			'Type':'Approved, Issued',
			'bookID':bookId,
			'userId':'1'
		  };
		  var url="http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/requests",userInfo;
		  axios.get(url)
		  .then(data => {
				console.log(data)
			  })

}
}
  export default BookInfo;