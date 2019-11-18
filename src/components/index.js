import React, { Component } from 'react';
import '../App.css';
import {BrowserRouter} from 'react-router-dom';
import Books from './books';
import Navbar_home from './navbar';
import Leftbar from './leftbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchField from "react-search-field";
import firebase from 'firebase';

class index extends Component {
	render() {
		var user=firebase.auth().currentUser;
		if (user===null){
			user='0'
		}
	  return (
		<div>
		   <Navbar_home />


		  <Row>
			<Leftbar/>
		  <Books books={this.state.books} />
		  <h1>{user.displayName}</h1>
		  </Row> 
		  </div>
			);
	}
	state = {
	  books: []
	}
  
	componentDidMount() {
	  let url = 'http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/books?title=J.R.R. Tolkien';
	      fetch(url)
	      .then(res => res.json())
	      .then(data => {
			// console.log(firebase.auth().currentUser.displayName);
	        console.log(data)
	        const a=[]
	        for (var i in data){
	        a.push(data[i])
	      }
	      console.log(a)
	      this.setState({ books: a })
	      })
	      .catch(console.log)
	    }
  
  
  }
  //http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/books
  //Export the App component so that it can be used in index.js
  export default index;