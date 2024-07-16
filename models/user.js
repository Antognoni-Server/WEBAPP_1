'use strict';
const {
	Model
} = require('sequelize');
module.exports = (Sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	};
	User.init({
		id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
		userName: {
			type: Sequelize.STRING
		},
		lastname: {
			type: Sequelize.STRING
		},
		password: {
			type: Sequelize.STRING
		},
		email: {
			type: Sequelize.STRING
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE
		}
	}, {
		Sequelize,
		modelName: 'User',
	});
	return User;
};
