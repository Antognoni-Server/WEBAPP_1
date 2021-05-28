'use strict';
module.exports = (sequelize, DataTypes) => {
  const Juego = sequelize.define('juego', {
	id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
	name: {
	  type: DataTypes.STRING
	},
	description: {
	  type: DataTypes.STRING
	},
	status: {
	  type: DataTypes.CHAR
	},
	createdAt: {
		allowNull: true,
		defaultValue: Date.now(),
		type: DataTypes.DATE,
	},
	updatedAt: {
		allowNull: true,
		defaultValue: Date.now(),
		type: DataTypes.DATE,
	}
  }, {
		freezeTableName: true,
		tableName: 'juego',
		classMethods: {}
  });
  Juego.associate = function(models) {
	// associations can be defined here
  };
  return Juego;
};