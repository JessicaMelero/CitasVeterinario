import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AgregarCita extends Component{

    nombreMascotaRef = React.createRef();
    dueñoRef = React.createRef();
    fechaRef = React.createRef();
    horaRef = React.createRef();
    sintomasRef = React.createRef();

    state = { 
        error: false
    }

    crearNuevaCita = (e) => {
        e.preventDefault();

        const mascota = this.nombreMascotaRef.current.value,
            dueño = this.dueñoRef.current.value,
            fecha = this.fechaRef.current.value,
            hora = this.horaRef.current.value,
            sintomas = this.sintomasRef.current.value;

            if (mascota === '' || dueño === '' || hora === '' || fecha === '' || sintomas === '') {
                this.setState({
                    error: true
                })
            } else {
                const nuevaCita = {
                    id: uuid(),
                    mascota,
                    dueño,
                    fecha,
                    hora,
                    sintomas
                }
                // envia objeto al padre para actualizar el state
                this.props.crearCita(nuevaCita);
                // reinicia el formulario
                e.currentTarget.reset();
                //Elimina el error
                this.setState({
                    error: false
                })
            }
    }

    render(){
        const existeError = this.state.error;

        return( 
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Agregar citas</h2>
                    <form onSubmit={this.crearNuevaCita}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-3 col-form-label">Mascota</label>
                            <div className="col-sm-8 col-lg-9">
                                <input ref={this.nombreMascotaRef} type="text" className="form-control" placeholder="Nombre Mascota" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-3 col-form-label">Dueño</label>
                            <div className="col-sm-8 col-lg-9">
                                <input ref={this.dueñoRef} type="text" className="form-control"  placeholder="Dueño de la Mascota" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-3 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-5  mb-4 mb-lg-0">
                                <input ref={this.fechaRef} type="date" className="form-control" />
                            </div>                            
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-3 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-5 mb-4 mb-lg-0">
                                <input ref={this.horaRef} type="time" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-3 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-9">
                                <textarea ref={this.sintomasRef} className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-center">
                            <div className="col-sm-12">
                                <button type="submit" className="btn btn-success w-100">Agregar</button>
                            </div>
                        </div>
                    </form>
                    {existeError ? <div className="alert alert-danger text-center">Todos los campos son obligatorios</div> : ''}
                </div>
            </div>
        );
    }
}

AgregarCita.protoTypes = {
    crearCita: PropTypes.func.isRequired
}

export default AgregarCita;