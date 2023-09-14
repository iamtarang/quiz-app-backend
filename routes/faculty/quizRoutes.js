import express from 'express';
import { quizController } from '../../controllers/faculty/quizController.js';

const quizRouter = express.Router();

//! Quiz Operations

//? get all quizs
quizRouter.get('/get/:id', quizController.getAllQuiz);

//? get all quizs
quizRouter.get('/get/:id', quizController.getAllFacultyQuiz);

//? get active quizs
quizRouter.post('/getActiveQuiz/:id', quizController.getActiveQuiz);

//? get inactive quizs
quizRouter.post('/getInactiveQuiz/:id', quizController.getInactiveQuiz);

//? create quizs
quizRouter.post('/create', quizController.createQuiz);

//? update quizs
quizRouter.patch('/update/:id', quizController.updateQuiz);

//? enable quizs
quizRouter.patch('/enable/:id', quizController.enableQuiz);

//? disable quizs
quizRouter.patch('/disable/:id', quizController.disableQuiz);

//? delete quizs
quizRouter.patch('/delete/:id', quizController.removeQuiz);

//? destroy quizs
quizRouter.delete('/destroy/:id', quizController.destroyQuiz);

quizRouter.post('/answers/:id', quizController.saveAnswers);


export default quizRouter;
