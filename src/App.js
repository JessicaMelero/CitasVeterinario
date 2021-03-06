import React, { Component } from 'react';
import Header from './componentes/Header';
import ListaCitas from './componentes/ListaCitas';
import AgregarCita from './componentes/AgregarCita';
import './App.css';

class App extends Component {

  state = {
    citas: []
  };

  //Se ejecuta cuando el componente ha cargado por completo
  componentDidMount(){
    const citasLS = localStorage.getItem('citas');
    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS)
      })
    };
  };

  //Se ejecuta cuando algo cambia
  componentDidUpdate(){
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    );
  };

  crearCita = (nuevaCita) => {
    
    const citas = [...this.state.citas, nuevaCita];

    console.log(citas);

    this.setState({
      citas
    });
  }

  borrarCita = id => {

    console.log(id);
    //obtener copia del state
    const citasActuales = [...this.state.citas];
    
    //borrar elemento del state
    const citas = citasActuales.filter(cita => cita.id !== id);
    console.log(citas);
    //Actualizar el state
    this.setState({
      citas
    });
  }

  render() {
    return (
      <div className="container">
        <Header
          titulo={'Administrador de pacientes'}
        />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita crearCita={this.crearCita}/>
          </div>
          <div className="col-md-6">
            <ListaCitas 
              citas={this.state.citas}
              borrarCita={this.borrarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
