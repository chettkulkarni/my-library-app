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

class index extends Component {
	render() {
	  return (
		<div>
		   <Navbar_home />


		  <Row>
			<Leftbar/>
		  <Books books={this.state.books} />
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