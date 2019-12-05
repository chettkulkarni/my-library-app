import React, { Component } from 'react';
import axios from 'axios';
import TweetsDisplay from './TweetsDisplay'

class Tweets extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <TweetsDisplay tweets={this.state.displaytweet}/>
            </div>
        );
    }
    state = {
        displaytweet: []
    }
    componentDidMount() {
        // alert('inside tweet')
        var bookTitle=this.props.string
        // bookTitle = bookTitle.replace(/[^\w\s]/gi, "")
        let url = 'https://lmp.nupursjsu.net/v1/tweets/'+bookTitle
        // alert(url)
        axios.post(url)
            .then(res => {
                // console.log("Book tweets", res);
                
                const a = []
            
                for (var i=0;i<5;i++){
                    a.push(res.data[i])
                    // alert('tweets fetched',res.data[i])
                }
                // console.log(a)
                this.setState({ displaytweet : a})
                // console.log(a,this.state.displaytweet)
            }).catch(console.log);


    }
}

export default Tweets;
