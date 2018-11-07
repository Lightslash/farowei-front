import React, { Component } from 'react';
import './App.css';
import Accueil from './components/Accueil';
import ContainerGraph from './components/ContainerGraph';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accueil />
        <ContainerGraph />
      </div>
    );
  }
}

export default App;
