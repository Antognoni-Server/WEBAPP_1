const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const http = require('http');

// Setting express
const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setting up the welcome message
require('./routes')(app);

app.get('*', (req, res) => res.status(200).send({
	message: 'Bienvenid@s, estás en la Web Services de Aplicaciones Interactivas de UADE.',
}));

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

module.exports = app;