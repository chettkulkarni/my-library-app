import React, {Component} from 'react';
import firebase from 'firebase';
import {Redirect, withRouter} from 'react-router-dom';


import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
    apiKey: "AIzaSyBERSrGrsIlY6-MVZziFr5r1Tc4E8_zmEQ",
    authDomain: "sjsulibrary-b819a.firebaseapp.com"
})

class Login extends Component {
    state={isSignedIn : false}
    uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            return true;
          }
        },
        
        signInFlow: 'popup',
        signInOptions: [
        
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID

        ],
    };

    componentWillMount = () =>{
        firebase.auth().onAuthStateChanged(user=>{
            this.setState({isSignedIn : !!user });
        });
    }

    render(){
        var action;

        if(this.state.isSignedIn) {
            console.log(firebase.auth().currentUser.displayName);
            this.props.history.goBack();
        } else {
            action =    <StyledFirebaseAuth 
                            uiConfig={this.uiConfig}
                            firebaseAuth={firebase.auth()}
                        />
        }

        return(
            <div className="Login">
            {
                action
            }
            </div>
        )
    }
}

export default withRouter(Login);