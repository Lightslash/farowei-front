import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './App.css';
import Accueil from './components/Accueil';
import ContainerCriteres from './components/ContainerCriteres';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accueil />
        <Container fluid>
          <ContainerCriteres />
        </Container>
      </div>
    );
  }
}

export default App;
