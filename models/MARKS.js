import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";
import STUDENTS from './STUDENTS.js';
import QUIZ from './QUIZ.js';

const MARKS = sequelize.define('student_answers', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    student_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quiz_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    marks_obtained: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total_marks: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    created_timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    updated_timestamp: {
        type: DataTypes.DATE,
        allowNull: true
    },
    deleted_timestamp: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'marks',
    timestamps: false
});

MARKS.belongsTo(STUDENTS, { foreignKey: 'student_id' });
MARKS.belongsTo(QUIZ, { foreignKey: 'quiz_id' });

export default MARKS;