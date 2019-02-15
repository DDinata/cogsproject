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
import Login from './Login';
import {Navbar, Nav} from 'react-bootstrap'; 
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home}/>
          <Route exact path="/newlisting" component={NewListing} />
          <Navbar bg="dark" variant="dark" fixed="bottom">
            <Nav className="mr-auto">
              <IndexLinkContainer to="/home" onClick={doSomething}>
                <Nav.Link>Home</Nav.Link>
              </IndexLinkContainer>
              <LinkContainer to="/newlisting" onClick={doSomething}>
                <Nav.Link>newlisting</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar>
        </div>
      </Router>
    );
  }
}

function doSomething(){
  console.log("poop")
}

export default App;
