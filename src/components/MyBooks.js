import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import Navbarhome from "./navbar";
import Leftbar from "./leftbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import { CardDeck, Col, Container, Card } from "react-bootstrap";
import PrimarySearchAppBar from "./appbar";
import firebase from "firebase";
import { withRouter } from "react-router-dom";

class MyBooks extends Component {
  state = {
    requests: [],
    loading: true,
    isLoggedIn: false
  };

  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  loadReqs() {
    axios
      .get(
        "http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/requests?User_Id=" +
          "lokv007@gmail.com" +
          "&Type=issue"
      )
      .then(res => {
        console.log(res);
        this.setState({ loading: false });
        this.setState({ requests: res.data });
      });
  }
  componentWillMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isLoggedIn: !!user });
    });
  };

  componentDidMount() {
    // var user = firebase.auth().currentUser.email;
    this.loadReqs();
  }

  // handleClick(event) {
  //   const a = {
  //     Type: "issue"
  //   };
  //   let self = this;
  //   var url =
  //     "http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/requests?User_Id=" +
  //     1 +
  //     "&Type=issue";
  //   axios.get(url).then(res => {
  //     console.log(res);
  //     self.setState({ loading: true });
  //     self.loadReqs();
  //   });
  // }

  render() {
    //this.loadReqs();
    const { loading, requests } = this.state;
    if (loading) {
      return (
        <Container>
          <div class="loading"></div>
        </Container>
      );
    } else {
      return (
        <div>
          <PrimarySearchAppBar />
          <Row>
            <Leftbar />
            <Container>
              {requests.length > 0 &&
                requests.map(request => (
                  <Col md="auto">
                    <CardDeck key={request.Request_id}>
                      <Card>
                        <Card.Body>
                          <Card.Title>{request.title}</Card.Title>
                          <Card.Text>
                            <p>
                              <b>Book Id:</b>
                              {request.Book_Id}
                            </p>
                            <p>
                              <b>Status:</b>
                              {request.Status}
                            </p>
                            {/* <button
                            class="btn btn-primary"
                            onClick={this.handleClick}
                            value={request.Request_id}
                          >
                            issue
                          </button> */}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </CardDeck>
                  </Col>
                ))}
              {!requests.length && <h3>Request a book</h3>}
            </Container>
          </Row>
        </div>
      );
    }
  }
}

export default withRouter(MyBooks);
