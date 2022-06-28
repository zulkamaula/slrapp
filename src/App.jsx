import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './App.css';
import NavbarComponent from './components/NavbarComponent'

export default class App extends Component {
  render() {
    return (
       <div>
        <NavbarComponent />
        
        <Jumbotron fluid>
          <Container fluid>
            <main>
              Hello world
            </main>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}
