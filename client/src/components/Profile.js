import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      id: decoded.id,
      userName: decoded.userName,
      email: decoded.email
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PERFIL DE USUARIO</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Identificador en DDBB</td>
                <td>{this.state.id}</td>
              </tr>
              <tr>
                <td>Apellido</td>
                <td>{this.state.userName}</td>
              </tr>
              <tr>
                <td>Correo @ Electrónico</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PERFIL DE USUARIO</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Botón Uno</td>
                <td><button type="submit" className="btn btn-lg btn-primary btn-block" > 1 1 1 </button></td>
              </tr>
              <tr>
                <td>Botón Dos</td>
                <td><button type="submit" className="btn btn-lg btn-primary btn-block" > 2 2 2 2 2 </button></td>
              </tr>
              <tr>
                <td>Botón Tres</td>
                <td><button type="submit" className="btn btn-lg btn-primary btn-block" > 3 3 3 3 3 3 3 </button></td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>


      
      
    )
  }
}

export default Profile
