import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';


const COURSE = sequelize.define('course_data', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	course_name: {
		type: DataTypes.STRING(50),
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
}, {
	timestamps: false,
});

export default COURSE;