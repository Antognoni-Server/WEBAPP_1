const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require("dotenv").config();
const Sequelize = require('sequelize');
const db = require('../databases/db.js');
//var dbx = require('../databases/db_aux.js');

var user = require('../models/user.js');

module.exports = {
	/**
	 * Create the user to login
	 * 
	 * Methoud: POST
	 * Headers: -
	 * Body: JSON
	 * 
	 * @param {*} req 
	 * @param {*} res 
	 */
	async create(req, res) {
		// #swagger.tags = ['Users'];
		// #swagger.description = 'Create a new user'
		return user
			.findOrCreate({
				where: {
					first_name: req.body.first_name,
					last_name: req.body.last_name,
					email: req.body.email,
					password: await bcrypt.hash(req.body.password, 10),
				},
			})
			.then(users => res.status(200).send(users))
			.catch(error => res.status(400).send(error))
	},

	/**
	 * Login the user by email and password
	 * 
	 * Methoud: POST
	 * Headers: -
	 * Body: JSON
	 * 
	 * @param {*} req
	 * @param {*} res 
	 */
	async login(req, res, next) {

			// #swagger.tags = ['Users'];
			//console.log(req.body.email);
			// #swagger.description = 'Login a user'

			// vER LOS VALORES RECIBIDOS POR LA FUNCION
			//console.log('Valor ingresado teclado: ' + req.body.email)

			// We look for the user by email
			console.log('En controllers/user.js: login() en el server,  buscar : '+ req.body.email );
			/*
			const user = await dbx.user.findOne({
				where: {
					email:req.body.email
				}
			})
			*/
			const correo = req.body.email;

			user = await db.buscaruno(correo);

			
			console.log(user);
			
		if (user) {
			console.log('existe el usuario...  next: compare bcrypt password navegador: ' +req.body.password);
			// Checking the password in the database with the received in the body
			const password_valid = bcrypt.compare(req.body.password, user.password);
			// We validate if the password is correct so we print the token
			if (password_valid) {
				console.log('comparación de contraseñas valida: ');
				token = jwt.sign({
					'id': user.id,
					'email': user.email,
					'userName': user.userName
				}, process.env.JWT_KEY);

				// Everything is correct so we print the token
				res.status(200).json({ token: token });
			} else {
				console.log('contraseña invalida: ');
				res.status(400).json({ error: "Password Incorrect" });
			}
		} else {
			res.status(404).json({ error: "User does not exist" });
		}
		
	},

	/**
	 * Getting the user info by the autorization token
	 * 
	 * We must send in the Header a key & value in which the key is "Autorization"
	 * and the value the token that we generated before for the user login
	 * 
	 * Methoud: GET
	 * Headers: Key = Autorization / Value = (token)
	 * @param {*} req
	 * @param {*} res 
	 */
	async me(req, res) {
		// #swagger.tags = ['Users'];
		// #swagger.description = 'Get the information of the user by token'
		try {
			let token = req.headers['authorization'];
			let decoded = jwt.verify(token, process.env.SECRET);
			let reqUser = decoded;
			if (reqUser) {
				let user = await user.findOne({ where: { id: reqUser.id }, attributes: { exclude: ["password"] } });
				if (user === null) {
					res.status(404).json({ 'msg': "User not found" });
				} else {
					res.status(200).json(user);
				}
			}
		} catch (err) {
			res.status(401).send(err);
		}
	}
}