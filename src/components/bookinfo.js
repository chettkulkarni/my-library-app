import React, { Component } from 'react';
import '../App.css';
// import {BrowserRouter} from 'react-router-dom';
import BookInfoDesc from './bookinfodesc';
import Navbar_home from './navbar';
import Leftbar from './leftbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

class BookInfo extends Component {
	render() {
	  return (
		<div>
		   <Navbar_home />
		  <Row>
			<Leftbar/>
		  <BookInfoDesc books={this.state.books} />
		  </Row> 
		  </div>
			);
	}
	state = {
	  books: []
	}
  
	componentDidMount() {
		var bookId = window.location.pathname.split("/")[2]
	  let url = 'http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/books/' + bookId;
	      fetch(url)
	      .then(res => res.json())
	      .then(data => {
	        console.log(data)
	        const a=[]
	    
	        a.push(data)
	      
	      console.log(a)
	      this.setState({ books: a })
	      })
	      .catch(console.log)
	    }
  
  
  }
  //http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/books
  
  //Export the App component so that it can be used in index.js
  export default BookInfo;