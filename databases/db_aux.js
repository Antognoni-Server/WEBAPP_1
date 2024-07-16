const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];


//const dotenv = require('dotenv')

const db = {}
const mysql = require('mysql');
//const mysql2 = require('mysql2/promise');
var pool = mysql.createPool({
    connectionLimit: 100,
    host: config.host,
    user: config.username,
    password: config.password,
    database: config.database,
    port: config.port,
    dialect: config.dialect,
    debug: false
});

const sequelize = new Sequelize(config.database, config.username, config.password,
    {
        host: config.host,
        dialect: config.dialect,
        port: config.port,
    },
    {query:{raw:true}}
);
var buscarusuario = function(req){
    // return the promise itself
    return db.User.findOne({
        where: {
           email: req.email
        }
     }).then(function(user) {
        if (!user) {
            return 'not find';
        }
        return user.dataValues;
     });
};
initialize();
async function initialize() {
    // create db if it doesn't already exist
//   
    console.log('DDBB inicializada:... .. .. OK     --- Dialecto ddbb: ' + config.dialect);
   
    
    pool.getConnection(function(err, connection) {

        console.log('conexion establecida........ ');
   });
    // connect to db
    
         
    // init models and add them to the exported db object
    db.user = require('../models/user');

    // sync all models with database
    await sequelize.sync({ alter: true });
}
//module.exports = db = {};
//db.sequelize = sequelize 
db.Sequelize = Sequelize
module.exports = db
module.exports = {
    buscaruno: function (req) {
      buscarusuario(req);
      }
  }

/*
Esta consulta retorna todas las primary key de las tablas en ddbb: antognoniddbb

SELECT DISTINCT TABLE_NAME ,column_name
    FROM INFORMATION_SCHEMA.key_column_usage
    WHERE TABLE_SCHEMA IN ('antognoniddbb');

*/