import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import logo from './logo.svg';

import Header from './Header'

import Dashboard from './Dashboard'

import EmailContent from './mailer/EmailContent'

const Landing = () => <h2>Welcome to Emailing Tool</h2>

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
          <Header/>
          <Route exact path="/" component ={Dashboard} />
          <Route exact path="/email" component ={EmailContent} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
