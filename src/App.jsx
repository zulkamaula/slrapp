import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './App.css';
import NavbarComponent from './components/NavbarComponent'

function App() {
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
    
  );
}

export default App;