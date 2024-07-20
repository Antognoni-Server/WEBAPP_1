// Controllers
const usersController = require('../controllers/user');
const usuariosController = require('../controllers/usuarios');
const juegosController = require('../controllers/juegos');
const participationController = require('../controllers/participation');

module.exports = (app) => {

	app.get('/api', (req, res) => res.status(200).send({
		message: '¡Esta es una buena señal! Nuestro Node.js está funcionando correctamente ;)',
	}));

	// Routes of Web Services
	// Users login
	app.post('/api/create', usersController.create);
	app.post('/api/login', usersController.login);
	app.get('/api/me', usersController.me);

	// Users of players
	app.post('/api/usuarios/create/username/:username/status/:status', usuariosController.create);
	app.get('/api/usuarios/list/status/:status', usuariosController.list);
	app.get('/api/usuarios/find/username/:username', usuariosController.find);
	app.post('/api/usuarios/updateUser', usuariosController.updateUser);

	// Games
	app.post('/api/juegos/create', juegosController.create);
	app.get('/api/juegos/list', juegosController.list);
	app.get('/api/juegos/find', juegosController.find);

	// Participations
	app.post('/api/participaciones/create', participationController.create);
	app.get('/api/participaciones/list', participationController.list);

	//Profile
	//app.post('api/profile',)

};