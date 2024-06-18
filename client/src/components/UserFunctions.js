import axios from 'axios'
//const sequelize = require('sequelize')

export const register = newUser => {
  return axios
    .post('users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      console.log("usuario guardado en ddbb")
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
export const getuser = users => {
  alert('hola, has recibido una alerta')
}

/* Ver si esto debe de estar en el controlador
export const getuser = users => {
  sequelize.query("SELECT * FROM `user`", { type: sequelize.QueryTypes.SELECT})
  .then(function(user) {
    // We don't need spread here, since only the results will be returned for select queries
  })
}
*/