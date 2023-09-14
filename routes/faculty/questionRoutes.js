import express from 'express';
import { questionController } from '../../controllers/faculty/questionsController.js';

const questionRouter = express.Router();

//! Question Operations

//? get all questions
questionRouter.post('/get', questionController.getQuestionsFaculty);

//? get all questions
questionRouter.post('/getShuffled', questionController.getQuestionsStudent);

//? create questions
questionRouter.post('/create', questionController.createQuestions);

//? update questions
questionRouter.patch('/update/:id', questionController.updateQuestions);

//? enable questions
questionRouter.patch('/enable/:id', questionController.enableQuestions);

//? disable questions
questionRouter.patch('/disable/:id', questionController.disableQuestions);

//? delete questions
questionRouter.patch('/delete/:id', questionController.removeQuestions);

//? destroy questions
questionRouter.delete('/destroy/:id', questionController.destroyQuestions);


export default questionRouter;
