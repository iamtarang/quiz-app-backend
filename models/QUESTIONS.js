
import { DataTypes } from "sequelize";
import { sequelize } from '../db.js';
import QUIZ from "./QUIZ.js";

const QUESTION = sequelize.define('questions', {
	question_id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	quiz_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	question_text: {
		type: DataTypes.STRING(225),
	},
	question_imgfile: {
		type: DataTypes.BOOLEAN,
	},
	option_1_text: {
		type: DataTypes.STRING(225),
	},
	option_1_imgfile: {
		type: DataTypes.BOOLEAN,
	},
	option_2_text: {
		type: DataTypes.STRING(225),
	},
	option_2_imgfile: {
		type: DataTypes.BOOLEAN,
	},
	option_3_text: {
		type: DataTypes.STRING(225),
	},
	option_3_imgfile: {
		type: DataTypes.BOOLEAN,
	},
	option_4_text: {
		type: DataTypes.STRING(225),
	},
	option_4_imgfile: {
		type: DataTypes.BOOLEAN,
	},
	correct_option: {
		type: DataTypes.STRING(225),
		allowNull: false,
	},
	weightage: {
		type: DataTypes.INTEGER,
		defaultValue: 1,
	},
	created_timestamp: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW,
	},
	updated_timestamp: {
		type: DataTypes.DATE,
	},
	deleted_timestamp: {
		type: DataTypes.DATE,
	},
	status: {
		type: DataTypes.BOOLEAN,
		allowNull: true,
	},
	deleted: {
		type: DataTypes.BOOLEAN,
		allowNull: true,
	},
}, {
	timestamps: false
});

QUESTION.belongsTo(QUIZ, { foreignKey: 'quiz_id' });

export default QUESTION;