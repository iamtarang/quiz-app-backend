import { DataTypes } from "sequelize";
import { sequelize } from '../db.js';
import QUESTION from "./QUESTION.js"; // Assuming the QUESTION model is in the same folder

const IMAGE = sequelize.define('images', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	question_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {
			model: 'questions', // Table name for QUESTION
			key: 'question_id',  // Key in the QUESTION model
		},
	},
	question_img_filename: {
		type: DataTypes.BLOB('long'), // 'long' to support larger blobs if necessary
	},
	option_1_img_filename: {
		type: DataTypes.BLOB('long'),
	},
	option_2_img_filename: {
		type: DataTypes.BLOB('long'),
	},
	option_3_img_filename: {
		type: DataTypes.BLOB('long'),
	},
	option_4_img_filename: {
		type: DataTypes.BLOB('long'),
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
}, {
	timestamps: false, // Using custom timestamps instead
	underscored: true, // If you prefer snake_case column names
});

IMAGE.belongsTo(QUESTION, { foreignKey: 'question_id', as: 'question' });

export default IMAGE;
