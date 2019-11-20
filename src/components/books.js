import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import firebase from 'firebase';



   const Books = ({ books }) => {
   return (
       <div>
         <center><h1>Books List</h1></center>
        <Container>
          <Row>
         
         {books.map((book,index) => (

         <Col md="auto">
         <CardDeck>
         <Card  style={{width: '20rem' }}>
          <CardBody>
            <CardTitle>{book.title}</CardTitle>
            <CardText>
              {/* <p><b>Author:</b>{book.authors}</p> */}
              <b>Author: </b> <Link to={`/search/?title=&authors=${book.authors}&language=`} > {book.authors}</Link>
                    <p><b>Rating:</b>{book.average_rating}</p>
                    <p><b>BookID:</b>{book.bookID}</p>
                    <p><b>Language Code:</b>{book.language_code}</p>
                    <p><b>Rating Count:</b>{book.ratings_count}</p>
                    <p><b>Text Reviews Count:</b>{book.text_reviews_count}</p>
                    <p><b>Count:</b>{book.count}</p>
              </CardText>
            <Link to={`/bookinfo/${book.bookID}`} > Click to View More</Link>
            </CardBody>
          </Card>
          </CardDeck>
          </Col>
         ))}

         </Row>
        </Container>
       </div>
     )
   };
   export default Books




   

