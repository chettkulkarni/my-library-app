import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//App Component
class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <Main />
        </BrowserRouter>
        </div>
          );
  }

}
export default App;
