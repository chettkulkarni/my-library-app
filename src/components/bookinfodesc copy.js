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
  //  constructor(props){
  //    super(props)
  //  }
  state={isLoggedIn : false,book: [],button:''}

  componentDidMount = () =>{

    firebase.auth().onAuthStateChanged(user=>{
        this.setState({isLoggedIn : !!user });   
    });

    
    var bookId = this.props.location.pathname.split("/")[2]
    let url = 'http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/books/' + bookId;
    console.log(url)
	      fetch(url)
	      .then(res => res.json())
	      .then(data => {
	        // console.log(data)
	        const a=[]	    
	        a.push(data)	      
	      console.log('**** a',a)
        this.setState({ book: a })
        console.log('**** book',this.state.book)
        // this.displayButton(`${this.state.book.bookID}`,`${this.state.book.bookID}`,`${this.state.book.count}`)
        console.log('here')
        if(this.state.isLoggedIn){
          var user=firebase.auth().currentUser.displayName;
          user=1
          var button=''
           url ="http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/requests/users/"+user;
          var alreadyTaken=0
                  
           fetch(url)
          .then(data => {
            const a=[]
            for (var i in data.data){
            if (data.data[i].Book_Id ==this.state.book.bookID){
              alreadyTaken=1
              break;
            }
            }  
            
            if(alreadyTaken){
              
                button=<p>only one book person sorry</p>
                console.log('started',button)
          }
            if (this.state.book.count>0){
              button=<p>Request book</p>
                  }
          })
        }
          else{
        button2=<Link to='/login'>Login to continue</Link>
        // console.log('reached this place',button)
      }
      var button2=button
      this.setState({ button: button2 })
      
      console.log('end of mount',this.state.button,this.state.book)



	      })
      .catch(console.log)



      


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

  user=1
  var url ="http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/requests/users/"+user;
  var alreadyTaken=0
  axios.get(url)
	.then(data => {
    for (var i in data.data){
      // console.log(alreadyTaken,(data.data[i].Book_Id) ,id)
    if (data.data[i].Book_Id ==id){
      alreadyTaken=1
      break;
    }
    }  
    // console.log(alreadyTaken)
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
    //  displayButton(id,title2,count){
 
    //     console.log('here')
    //     if(this.state.isLoggedIn){
    //       var user=firebase.auth().currentUser.displayName;
    //       user=1
    //       var button=''
    //       var url ="http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/requests/users/"+user;
    //       var alreadyTaken=0
          
    //        fetch(url)
    //       .then(data => {
    //         const a=[]
    //         for (var i in data.data){
    //         if (data.data[i].Book_Id ==id){
    //           alreadyTaken=1
    //           break;
    //         }
    //         }  
            
    //         if(alreadyTaken){
              
    //             button=<p>only one book person sorry</p>
    //             console.log('started',button)
    //       }
    //         if (count>0){
    //           button=<p>Request book</p>
    //               }
    //       })
    //     }
    //       else{
    //     button=<Link to='/login'>Login to continue</Link>
    //     // console.log('reached this place',button)
    //   }
    //   var button2=button
    //   this.setState({ button: button2 })
    //   console.log(this.state.book,this.state.button)


      
    //    }  ;


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

          <div className="chetan">
               
                    <h3 className="display-3">{this.state.book.title}</h3>
                    {/* <p className="lead"> Author:{book.authors}</p> */}
                    <b>Author: </b> <Link to={`/search/?title=&authors=${this.state.book.authors}&language=`} > {this.state.book.authors}</Link>
                    <p className="lead"><b>Rating:</b>{this.state.book.average_rating}</p>
                    <p className="lead"><b>BookID:</b>{this.state.book.bookID}</p>
                    <p className="lead"><b>Language Code:</b>{this.state.book.language_code}</p>
                    <p className="lead"><b>Rating Count:</b>{this.state.book.ratings_count}</p>
                    <p className="lead"><b>Text Reviews Count:</b>{this.state.book.text_reviews_count}</p>
                    <p className="lead"><b>Count:</b>{this.state.book.count}</p>
                    <Button variant="dark"
                    onClick={(e) => this.handleClick(e,`${this.state.book.bookID}`,`${this.state.book.title}`,`${this.state.isLoggedIn}`)}>
                       {this.state.button}
                    </Button> 
          </div>
        }
        </div>
     )
   }
  }

  export default withRouter(BookInfoDesc);