const Sequelize = require('sequelize');
const usuarios = require('../models').usuarios;

module.exports = {

	/**
	 * Create a new user validate before if not exists
	 * 
	 * Example: 
	 * 			SELECT * FROM usuarios WHERE username = "lucas"
	 * 			INSERT INTO usuarios (username, status) VALUES ("lucas", "1");
	 * 
	 * Methoud: POST
	 * Headers: -
	 * Body: -
	 * 
	 * @param {*} req 
	 * @param {*} res 
	 */
	create(req, res) {
		// #swagger.tags = ['Player'];
		// #swagger.description = 'Create a player'
		return usuarios
			.findOrCreate({
				where: {
					username: req.params.username,
				},
				username: req.params.username,
				status: req.params.status
			})
			.then(usuarios => res.status(200).send(usuarios))
			.catch(error => res.status(400).send(error))
	},

	/**
	 * Find all users
	 * 
	 * Example: SELECT * FROM usuarios WHERE status = ?
	 * 
	 * Methoud: GET
	 * Headers: -
	 * Body: -
	 * 
	 * @param {*} req 
	 * @param {*} res 
	 */
	list(req, res) {
		// #swagger.tags = ['Player'];
		// #swagger.description = 'List of players'
		return usuarios
			.findAll({
				where: {
					status: req.params.status
				}
			})
			.then(usuarios => res.status(200).send(usuarios))
			.catch(error => res.status(400).send(error))
	},

	/**
	 * Find one user in the table users
	 * 
	 * Example: SELECT * FROM usuarios WHERE username = 'Lucas'
	 * 
	 * Methoud: GET
	 * Headers: -
	 * Body: -
	 * 
	 * @param {*} req 
	 * @param {*} res 
	 */
	find(req, res) {
		// #swagger.tags = ['Player'];
		// #swagger.description = 'Find a player'
		return usuarios
			.findOne({
				where: {
					username: req.params.username
				}
			})
			.then(usuarios => res.status(200).send(usuarios))
			.catch(error => res.status(400).send(error))
	},

	/**
	 * Update a user
	 * 
	 * Example: 
	 * 	SELECT * FROM usuarios WHERE username = 'lucas'
	 * 	UPDATE `usuarios` SET `username`=?,`updatedAt`=? WHERE `username` = ?
	 * 
	 * Methoud: POST
	 * Headers: -
	 * Body: JSON
	 * 
	 * @param {*} req 
	 * @param {*} res 
	 */
	updateUser(req, res) {
		// #swagger.tags = ['Player'];
		// #swagger.description = 'Update a player'
		return usuarios
			.update({
				username: req.body.new_username,
			}, {
				where: {
					username: req.body.username,
				},
			})
			.then(usuarios => res.status(200).send(usuarios))
			.catch(error => res.status(400).send(error))
	}
}