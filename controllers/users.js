const users = require('../models').users;
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require("dotenv").config();

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
		return users
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
	async login(req, res) {

		// We look for the user by email
		const user = await users.findOne({
			where: {
				email: req.body.email
			}
		});

		// If the user exists by email
		if (user) {
			// Checking the password in the database with the received in the body
			const password_valid = bcrypt.compare(req.body.password, user.password);
			// We validate if the password is correct so we print the token
			if (password_valid) {
				token = jwt.sign({
					'id': user.id,
					'email': user.email,
					'first_name': user.first_name
				}, process.env.SECRET);

				// Everything is correct so we print the token
				res.status(200).json({ token: token });
			} else {
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

		try {
			let token = req.headers['authorization'];
			let decoded = jwt.verify(token, process.env.SECRET);
			let reqUser = decoded;
			if (reqUser) {
				let user = await users.findOne({ where: { id: reqUser.id }, attributes: { exclude: ["password"] } });
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