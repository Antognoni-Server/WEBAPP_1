'use strict';

const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const DB = config.database;
const USER = config.username;
const PASSWORD = config.password;
const HOST = config.host;
const DIALECT = config.dialect;
const PORT = 5432;

const CONNECTION = new Sequelize(
    DB,
    USER, 
    PASSWORD, 
    {
        host: HOST,
        dialect: DIALECT,
        port: PORT,
    }
)
console.log('conexión establecida.   :)')
module.exports.CONNECTION = CONNECTION;