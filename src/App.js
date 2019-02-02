import React, { Component } from 'react';
import Header from './componentes/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header
          titulo={'Administrador de pacientes'}
        />
      </div>
    );
  }
}

export default App;
