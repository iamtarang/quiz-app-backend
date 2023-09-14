import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const USERS = sequelize.define('users', {
	// Model attributes are defined here
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		onDelete: "SET NULL"
	},
	roles: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	status: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
	},
	deleted: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
	},
	creation_timestamp: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW,
		allowNull: false,
	},
	deletion_timestamp: {
		type: DataTypes.DATE,
		allowNull: true,
	}
}, {
	tableName: "users",
	timestamps: false
});


export default USERS;