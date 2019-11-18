import React, { Component } from 'react'
// import {Button,Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
// import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import '../css/bookinfodesc.css'

export default class BookInfoDesc extends Component {
  state={isLoggedIn : false}
  componentWillMount = () =>{
    firebase.auth().onAuthStateChanged(user=>{
        this.setState({isLoggedIn : !!user });
    });
  }  
  render(){
    var action;
    if(this.state.isLoggedIn){
      var user=firebase.auth().currentUser.displayName;

      var url='/'+user+'/'+`${this.props.books.bookID}`
      action = <Link to="/">Request button will come here,but take it easy,this is under construction</Link>;
    }
    else{
      action = <Link to="/login">Login to Request</Link>;
    } 

// function handleClick(e,id) {
//   var user=firebase.auth().currentUser.displayName;
//   alert(id)
//   var url ="/"+user+"/"+id
//   alert(url)
//   action = <Link to='url'>Request</Link>;
// }
    return (
         <div className="some">
         {
           this.props.books.map((book,index) => (

          <div className="chetan">
               
                    <h3 className="display-3">{book.title}</h3>
                    {/* <p className="lead"> Author:{book.authors}</p> */}
                    <b>Author: </b> <Link to={`/search/?title=&authors=${book.authors}&language=`} > {book.authors}</Link>
                    <p className="lead"><b>Rating:</b>{book.average_rating}</p>
                    <p className="lead"><b>BookID:</b>{book.bookID}</p>
                    <p className="lead"><b>Language Code:</b>{book.language_code}</p>
                    <p className="lead"><b>Rating Count:</b>{book.ratings_count}</p>
                    <p className="lead"><b>Text Reviews Count:</b>{book.text_reviews_count}</p>
                    <Button variant="dark">
                      {action}
                    </Button> 
               
          </div>
        
        ))}
        </div>
     )
   }
  }


  // onclick={handleClick(`${book.bookID}`)