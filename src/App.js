import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home';
import NewListing from './NewListing';
import {Navbar, Nav} from 'react-bootstrap'; 
import { LinkContainer } from 'react-router-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/newlisting" component={NewListing} />
          <Navbar bg="dark" variant="dark" fixed="bottom">
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/newlisting">
                <Nav.Link>newlisting</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar>
        </div>
      </Router>
    );
  }
}

export default App;
