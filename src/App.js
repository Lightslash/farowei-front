import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Accueil from './components/Accueil';
import ContainerCriteres from './components/ContainerCriteres';
import ContainerGraph from './components/ContainerGraph';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accueil />
        <Container fluid>
          <Row>
              <Col md='3'>
                <ContainerCriteres />
              </Col>
              <Col md='9'>
                <ContainerGraph />
              </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
