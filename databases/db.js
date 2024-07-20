//incluir config.json

//conectar a ddbb

//desconectar de ddbb

const Sequelize = require('sequelize')
const dotenv = require('dotenv')
const db = {}
const sequelize = new Sequelize('antognoniddbb', 'hector', 'Antognoni', {
  host: '192.168.0.2',
  dialect: 'mysql',
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})


db.sequelize = sequelize
db.Sequelize = Sequelize
//console.log('Autentificando en la ddbb......')
sequelize
  .authenticate()
  .then(() => {
    //console.log("Autenticado!!!  la ddbb conectó. ");
   // console.log("Aquí abrir sessión (hay un pool creado), conectar,consultar y no olvidar soltar la DDBB");
    //console.log('Los datos contenidos en el objeto relacional son: ')
    //buscarDatos();
  })
  .catch((err) => {
    console.log(err);
  });

  const buscarDatos = async () => {
    const datos = await db.sequelize.query('select * from user;');
    //console.log(datos[0]);
    var normalObj = Object.assign({}, datos[0]);
    console.log('objeto normalizado: ', normalObj[1].id);
    console.log('objeto normalizado: ', normalObj[1].userName);
    console.log('El numero de filas en la DDBB es: '+ datos.length);
    return datos[0];
}
const buscarusuario = async (req, res) => {
  const correo = req;
  const comilla = ' \' ';
  const comilladoble= '"';
  const consulta = 'select * from user where user.email = '+ comilladoble + correo + comilladoble +';';
  //const consulta = 'select * from user where user.email = "hectorantognoni@gmail.com";'
  console.log(consulta);
  console.log('En databases/db.js: buscarusuario() en DDBB... buscando a : '+ correo);
  var user = require('../models/user.js');
  user = await sequelize.query(
    consulta,
    { type: sequelize.QueryTypes.SELECT },
  );

    //console.log(user[0]); 

  var normalObj = Object.assign({}, user[0]);
  console.log('usuario es: '+ normalObj.userName);
   // console.log('aplicando cast: json  stringfly ximl: '+ normalObj[1]);
  res= normalObj;
  return res;
}

//console.log(process.env.usuariosecreto)

module.exports = db
module.exports = {
  mi_funcion: function () {
    buscarDatos();
}}

module.exports = {
  buscaruno: function (req, res, next) {
      console.log('En /databases/db.js    module-function: buscar_uno  ...  ...buscando: '+ req);
     res = buscarusuario(req, res, next);
     return res;
     next();
    }
}