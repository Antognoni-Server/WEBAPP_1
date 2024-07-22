import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
/*  
Para migrar la barra de navegacion a boostrap/css

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Navbar from 'react-bootstrap/Navbar';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
*/



class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
    //Aquies donde pasamos a cargar  index.js ->  puede ser ej: /componen/users. 
  }
  //   Instancias de barra de navegación
    //Instancia loginRegLink, sin Token: logOut.
    //Instancia userLink, extiende a navbar-nav: con token

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Ingresar
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Registrarse
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/usuariosendb" className="nav-link">
            Registrados
          </Link>
        </li>
      </ul>
    )

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Usuario
          </Link>
        </li>
        <li className="nav-item">
          <a href="http://localhost:4000/api" onClick={this.logOut.bind(this)} className="nav-link">
            Salir
          </a>
        </li>
      </ul>
    )

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Bienvenida
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    )
  }
}

export default withRouter(Landing)
