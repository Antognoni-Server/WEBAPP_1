'use strict';
module.exports = (sequelize, DataTypes) => {
	const Participacion = sequelize.define('participacion', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		usuario_id: {
			allowNull: false,
			type: DataTypes.INTEGER
		},
		juego_id: {
			allowNull: false,
			type: DataTypes.INTEGER
		},
		status: {
			allowNull: true,
			defaultValue: 1,
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
		timestamps: false,
		freezeTableName: true,
		tableName: 'participacion',
		classMethods: {}
	});
	Participacion.associate = function(models) {
		// associations can be defined here
		Participacion.belongsTo(models.usuario,
			{
				as: 'usuario',
				foreignKey: 'usuario_id',
			}
		);
		Participacion.belongsTo(models.juego,
			{
				as: 'juego',
				foreignKey: 'juego_id',
			}
		);
	};
	return Participacion;
};