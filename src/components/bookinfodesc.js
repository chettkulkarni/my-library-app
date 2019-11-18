import React from 'react'
// import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import { Card, CardImg, CardBody, CardTitle, CardText, Button,Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';

   const BookInfoDesc = ({ books }) => {
     return (
       <div>
        
        <Container>
          <Row>
         
         {
           books.map((book,index) => (

          <div >
               <Jumbotron>
                    <h3 className="display-3">{book.title}</h3>
                    {/* <p className="lead"> Author:{book.authors}</p> */}
                    <b>Author: </b> <Link to={`/search/?title=&authors=${book.authors}&language=`} > {book.authors}</Link>
                    <p className="lead"><b>Rating:</b>{book.average_rating}</p>
                    <p className="lead"><b>BookID:</b>{book.bookID}</p>
                    <p className="lead"><b>Language Code:</b>{book.language_code}</p>
                    <p className="lead"><b>Rating Count:</b>{book.ratings_count}</p>
                    <p className="lead"><b>Text Reviews Count:</b>{book.text_reviews_count}</p>
                </Jumbotron>
          </div>
        
        ))}

         </Row>
        </Container>
       </div>
     )
   };
   export default BookInfoDesc




   

