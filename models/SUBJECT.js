import { DataTypes } from "sequelize";
import { sequelize } from '../db.js';

const SUBJECT = sequelize.define('subject_data', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	subject: {
		type: DataTypes.STRING(50),
		allowNull: false,
	},
	subject_code: {
		type: DataTypes.STRING(50),
		allowNull: false,
		unique: true,
	},
	semester_id: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	status: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
	},
	deleted: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
	},
}, {
	timestamps: false
});

// Associations
export default SUBJECT;