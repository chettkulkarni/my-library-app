import React, { Component } from 'react';
import '../App.css';
// import {BrowserRouter} from 'react-router-dom';
import BookInfoDesc from './bookinfodesc';
// import NavbarHome from './navbar';
// import Leftbar from './leftbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import PrimarySearchAppBar from './appbar'
// import { userInfo } from 'os';
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
	  let url = 'http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/books/' + bookId;
	      fetch(url)
	      .then(res => res.json())
	      .then(data => {
	        // console.log(data)
	        const a=[]	    
	        a.push(data)	      
	    //   console.log(a)
		  this.setState({ books: a })

		//   var userInfo = {
		// 	'Type':'issue',
		// 	'Book_Id':bookId,
		// 	'User_Id':'1'
		//   };

		//   var user=1
		//   url ="http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/requests/users/"+user;
	    //   fetch(url)
	    //   .then(res => res.json())
	    //   .then(data => {
	        // console.log("second fetch", data)
			// console.log(data.bookId)
			var user=1
			var userInfo ='?Status=Approved,Issued&Book_Id='+bookId+'&User_Id='+user
			  console.log(userInfo)
			  var url="http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/requests"+userInfo;
			  axios.get(url)
			  .then(data => {
					console.log('data',data.data.length)
			var alreadyTaken=0
					if(data.data.length>0){
					alreadyTaken=1;

			}
			

			var button2=''
			if(this.state.isLoggedIn){
			if(alreadyTaken){
                button2=<p>only one book person sorry</p>
				}
			
			// console.log('checking',this.state.books[0].bookID,this.state.books[0].count)
			else if (this.state.books[0].count>0){
					button2=<p>Request book</p>
					    }
			this.setState({button:button2})

			// console.log('button',this.state.button,button2,alreadyTaken)
				}
				else{
					button2=<Link to='/login'>Login to continue</Link>
					this.setState({button:button2})
				}


		console.log(this.state.button,this.state.books,alreadyTaken)
		  }).catch(console.log)
		}).catch(console.log)
		  


}
}
  export default BookInfo;