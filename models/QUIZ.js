import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";
import USERS from "./USERS.js";
import COURSE from "./COURSE.js";
import SEM from "./SEM.js";
import SUBJECT from "./SUBJECT.js";

const QUIZ = sequelize.define('quizzes', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	title: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	course_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	sem_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	subject_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	creator_id: {
		type: DataTypes.INTEGER,
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
	},
}, {
	timestamps: false
});


// Associations
QUIZ.belongsTo(COURSE, { foreignKey: 'course_id' });
QUIZ.belongsTo(SEM, { foreignKey: 'sem_id' });
QUIZ.belongsTo(SUBJECT, { foreignKey: 'subject_id' });

export default QUIZ;