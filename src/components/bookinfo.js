import React, { Component } from 'react';
import '../App.css';
// import {BrowserRouter} from 'react-router-dom';
import BookInfoDesc from './bookinfodesc';
import Navbar_home from './navbar';
import Leftbar from './leftbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import axios from 'axios';




class BookInfo extends Component {
	async displayButton(id,title2,count){
		// return <p>abc</p>
		console.log('i was here')
		  
		

	}
	  
		;
	
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
	  books: [],
	  button:''
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
		  





// console.log('start')
// 		  if(this.state.isLoggedIn){
// 			var user=firebase.auth().currentUser.displayName;
// 			user=1
// 			var button=''
// 			url ="http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/requests/users/"+user;
// 			var alreadyTaken=0
			 
// 			  axios.get(url)
// 			.then(data => {
// 			  const a=[]
// 			  for (var i in data.data){
// 			  if (data.data[i].Book_Id ==this.books.bookId){
// 				alreadyTaken=1
// 				break;
// 			  }
// 			  }  
// 			  if(alreadyTaken){
				
// 				  // button=<p>only one book person sorry</p>
// 				  console.log('in here')
// 				  this.setState({button:<p>only one book person sorry</p>})
			  
// 			}
			  
// 			  if (this.state.books.count>0){
// 				  this.setState({button:<p>Request book</p>})
// 			  //   button=<p>Request book</p>
		
// 				    }
// 				console.log('ended')
// 			})
// 		  }
// 		    else{
// 		  //       this.state.button =<Link to='/login'>Login to continue</Link>
// 		  // if (this.setState.button!='<Link to=\'/login\'>Login to continue</Link>'){
// 		  // this.setState( {button : '<Link to=\'/login\'>Login to continue</Link>'})
// 		this.setState({button:'<Link to=\'/login\'>Login to continue</Link>'})
		
// 		  // }
// 		    } 
// 		// console.log('button',this.state.button)
// 		// alert(this.state.button)
// 	  console.log(this.state.button) 
// 	  console.log('end')



	    }
		
  
  }
  //http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/books
  
  //Export the App component so that it can be used in index.js
  export default BookInfo;