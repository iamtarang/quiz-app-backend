import { DataTypes } from "sequelize";
import { sequelize } from '../db.js';
import COURSE from "./COURSE.js";

const SEM = sequelize.define('semester_data', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	semester: {
		type: DataTypes.STRING(50),
		allowNull: false,
	},
	course_id: {
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
},{
    timestamps: false,
});

// Associations
SEM.belongsTo(COURSE, { foreignKey: 'course_id' });

export default SEM;