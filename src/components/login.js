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
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
          }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID
        //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        //   firebase.auth.TwitterAuthProvider.PROVIDER_ID
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
            action =    <Redirect to="/" />
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