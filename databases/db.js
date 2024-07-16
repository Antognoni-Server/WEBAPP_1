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
    const datos = await sequelize.query('select * from user;');
    //console.log(datos[0]);
    var normalObj = Object.assign({}, datos[0]);
    console.log('objeto normalizado: ', normalObj[1].id);
    console.log('objeto normalizado: ', normalObj[1].userName);
    console.log('El numero de filas en la DDBB es: '+ datos.length);
    return datos[0];
}
const buscarusuario = async (req, res, next) => {
  const correoelect = req;
  console.log('En databases/db.js: buscarusuario() en DDBB... buscando a : '+ correoelect);
  res = await sequelize.query(
    'select * from  user where user.email = \'${correoelect}\';',
    { type: sequelize.QueryTypes.SELECT },
  );

    console.log(res); 

  //'select * from  user where user.email = "hectorantognoni@gmail.com";',
  //var normalObject = Object.assign({}, usuario[0]);
  console.log('usuario ENCONTRADO es: '+ res);
  return res;
  next();
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
     return res = buscarusuario(req, res, next);
     next();
    }
}