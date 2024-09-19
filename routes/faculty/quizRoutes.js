import express from 'express';
import { quizController } from '../../controllers/faculty/quizController.js';

const quizRouter = express.Router();

//! Quiz Operations

//? post all quizzes
quizRouter.post('/get', quizController.getAllQuiz);

//? post all quizzes
quizRouter.post('/getFacultyQuiz', quizController.getFacultyQuiz);

//? post active quizzes
quizRouter.post('/getActiveQuiz', quizController.getActiveQuiz);

//? post inactive quizzes
quizRouter.post('/getInactiveQuiz', quizController.getInactiveQuiz);

//? create quizzes
quizRouter.post('/create', quizController.createQuiz);

//? update quizzes
quizRouter.post('/updateQuiz', quizController.updateQuiz);

//? enable quizzes
quizRouter.post('/enableQuiz', quizController.enableQuiz);

//? disable quizzes
quizRouter.post('/disableQuiz', quizController.disableQuiz);

//? delete quizzes
quizRouter.post('/delete/:id', quizController.removeQuiz);

//? destroy quizzes
quizRouter.delete('/destroy/:id', quizController.destroyQuiz);

// quizRouter.post('/answers', quizController.saveAnswers);


export default quizRouter;
