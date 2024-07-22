import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { login } from './WiiFunctions'

class WhereIsIt extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      token: '',
      latitud: '',
      longitud: '',
      estado:'',
      situacion:'',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }
    var userRecibido = {
      email: this.state.email,
      password: this.state.password,
      token: ''
    };
    
    var token = '';

    login(user).then(res => {
      token = res;
      console.log('Cliente: componentes/login.js: onSubmit()->login(user)  token_user_recibido= '+ token);
      if (token) {
        console.log('Cliente: componenets/login(user)  if {token} --> OK ...');
        console.log('Cargando Perfil');
        this.props.history.push('/Profile');
// Sí la validación es correcta se carga la vista del perfil: /profile
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Ingresa</h1>
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="correo electrónico"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="contraseña"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(WhereIsIt)
