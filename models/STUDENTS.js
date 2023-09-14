import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const STUDENTS = sequelize.define('students_data', {
	// Model attributes are defined here
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		onDelete: "SET NULL"
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	prn: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	roll_no: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	student_id: {
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
	timestamps: false
});

export default STUDENTS; 