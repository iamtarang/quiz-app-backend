import express from 'express';
import { answerController } from '../../controllers/faculty/answersController.js';

const answerRouter = express.Router();

//! Question Operations

//? get all answers
answerRouter.post('/get', answerController.getAllAnswers);

//? create answers
answerRouter.post('/submit', answerController.submitAnswers);

//? get all score
answerRouter.post('/endQuiz', answerController.endQuiz);

//? get all score
answerRouter.post('/getScoresFaculty', answerController.getScoresForFaculty);

//? get student answers
answerRouter.post('/getSubmittedAnswers', answerController.getSubmittedAnswers);


export default answerRouter;
