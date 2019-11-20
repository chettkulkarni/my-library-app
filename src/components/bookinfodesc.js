import React, { Component } from 'react'
// import {Button,Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
// import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withRouter} from 'react-router-dom';
import axios from 'axios';
import '../css/bookinfodesc.css'

 class BookInfoDesc extends Component {
   constructor(){
     super()
   }
  state={isLoggedIn : false}
  componentWillMount = () =>{
    console.log('bookid',this.props.books)
    firebase.auth().onAuthStateChanged(user=>{
        this.setState({isLoggedIn : !!user });
       
    });
  }  

  handleClick(e,id,title2,action) {
  if (this.state.isLoggedIn ){
  var user=firebase.auth().currentUser.email;
  var url ="/request/"+user+"/"+id;
  var type="Type"
  // console.log(user)
  var userInfo = {
    'Type':'issue',
    'bookID':id,
    'title': title2,
    'userId':'1'
  };
  
  // console.log(userInfo)
  // action = <Link to='url'>Request</Link>;
  // this.props.history.push(url);
  user=1
  var url ="http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/requests/users/"+user;
  // http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/requests/users/1
  var alreadyTaken=0
  axios.get(url)
	.then(data => {
		// console.log(firebase.auth().currentUser.displayName);
		console.log(data)
    const a=[]
    
		for (var i in data.data){
      console.log(alreadyTaken,(data.data[i].Book_Id) ,id)
    if (data.data[i].Book_Id ==id){
      alreadyTaken=1
      break;
    }
    }  
    console.log(alreadyTaken)
    if(alreadyTaken){
      alert('only one book person sorry')
    }
        else{
      axios.post(`http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/requests`, userInfo)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  })


  }
}


//   axios.post(`http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/requests`, userInfo)
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
// alert('handle clicke ended')
//   }
// }

     displayButton(id,title2,count){
  // return <p>abc</p>
    console.log('start')
  if(this.state.isLoggedIn){
    var user=firebase.auth().currentUser.displayName;
    user=1
    var button=''
    var url ="http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/requests/users/"+user;
    var alreadyTaken=0
     
     axios.get(url)
    .then(data => {
      const a=[]
      for (var i in data.data){
      if (data.data[i].Book_Id ==id){
        alreadyTaken=1
        break;
      }
      }  
      if(alreadyTaken){
        
          button=<p>only one book person sorry</p>
      
    }
      console.log(alreadyTaken,count,user)
      if (count>0){

        button=<p>Request book</p>

            }
    })
  }
    else{
  //       this.state.button =<Link to='/login'>Login to continue</Link>
  // if (this.setState.button!='<Link to=\'/login\'>Login to continue</Link>'){
  // this.setState( {button : '<Link to=\'/login\'>Login to continue</Link>'})
  button=<Link to='/login'>Login to continue</Link>

  console.log('button', button)
  // }
    } 
// console.log('button',this.state.button)
// alert(this.state.button)
return button
  }

  ;


  render(){
   

// function handleClick(e,id,action) {
//   if (action){
//   var user=firebase.auth().currentUser.displayName;
//   var url ="/"+user+"/"+id
//   alert(url)
//   // action = <Link to='url'>Request</Link>;
//   this.props.history.push(url)
//   }

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
                    <p className="lead"><b>Count:</b>{book.count}</p>
                    <Button variant="dark"
                    onClick={(e) => this.handleClick(e,`${book.bookID}`,`${book.title}`,`${this.state.isLoggedIn}`)}>
                       {this.displayButton(`${book.bookID}`,`${book.bookID}`,`${book.count}`)}
                    </Button> 
          </div>
        ))}
        </div>
     )
   }
  }

  export default withRouter(BookInfoDesc);