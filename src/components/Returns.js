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
import { Redirect } from "react-router-dom";

class Returns extends Component {
  state = {
    returns: [],
    loading: true,
    isLoggedIn: false
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  loadReqs() {
    axios
      .get(
        "http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/requests?Status=Issued&Type=issue"
      )
      .then(res => {
        console.log(res);
        this.setState({ loading: false });
        this.setState({ returns: res.data });
      });
  }
  componentWillMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isLoggedIn: !!user });
    });
  };

  componentDidMount() {
    this.loadReqs();
  }

  handleClick(event) {
    if (this.state.isLoggedIn) {
      const a = {
        Type: "return"
      };
      let self = this;
      axios
        .patch(
          "http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/requests/" +
            event.target.value,
          a
        )
        .then(res => {
          console.log(res);
          self.setState({ loading: true });
          self.loadReqs();
        });
    } else {
      window.location = "/login";
    }
  }

  render() {
    //this.loadReqs();
    const { loading, returns } = this.state;
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
              {returns.length > 0 &&
                returns.map(ret => (
                  <Col md="auto">
                    <CardDeck key={ret.Request_id}>
                      <Card>
                        <Card.Body>
                          <Card.Title>{ret.title}</Card.Title>
                          <Card.Text>
                            <p>
                              <b>User Id:</b>
                              {ret.User_Id}
                            </p>
                            <p>
                              <b>Book Id:</b>
                              {ret.Book_Id}
                            </p>
                            <p>
                              <b>Type:</b>
                              {ret.Type}
                            </p>
                            <button
                              class="btn btn-primary"
                              onClick={this.handleClick}
                              value={ret.Request_id}
                            >
                              Return
                            </button>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </CardDeck>
                  </Col>
                ))}
              {!returns.length && <h4>No Returns</h4>}
            </Container>
          </Row>
        </div>
      );
    }
  }
}
export default withRouter(Returns);
