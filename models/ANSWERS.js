import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import STUDENTS from './STUDENTS.js';
import QUIZ from './QUIZ.js';
import QUESTION from './QUESTIONS.js';


const StudentAnswer = sequelize.define('student_answers', {
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
    question_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    chosen_answer: {
        type: DataTypes.STRING(225),
        allowNull: true
    },
    is_correct: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    weightage: {
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
    tableName: 'student_answers',
    timestamps: false
});

StudentAnswer.belongsTo(STUDENTS, { foreignKey: 'student_id' });
StudentAnswer.belongsTo(QUIZ, { foreignKey: 'quiz_id' });
StudentAnswer.belongsTo(QUESTION, { foreignKey: 'question_id' });

export default StudentAnswer;
