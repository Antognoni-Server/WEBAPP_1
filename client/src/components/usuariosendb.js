import React, { Component } from 'react'
//import { getuser } from './UserFunctions'
//const sequelize = require('sequelize')
/*
function usuariostodos(){
       sequelize.query("SELECT * FROM `user`", { type: sequelize.QueryTypes.SELECT})
        }
*/
function test_function(){
  alert('hola mundo');

}
class UsuariosInscritos extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Bienvenido a UsuariosInscritos page</h1>
            <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
            >
                Solicitar usuaios a DDBB
            </button>

            <p id="demo"></p>

            <button
              className="btn btn-lg btn-primary btn-block"
              onClick={test_function}
              >
                Click -  traer ddbb
                </button>
          </div>
        </div>
      </div>
    )
  }
}

export default UsuariosInscritos
