import express from 'express';
import { courseController } from '../../controllers/admin/courseController.js';

const courseRouter = express.Router();

//! Course Operations

//? get all courses
courseRouter.get('/get', courseController.getAllCourse);

//? create courses
courseRouter.post('/create', courseController.createCourse);

//? update courses
courseRouter.patch('/update/:id', courseController.updateCourse);

//? enable courses
courseRouter.patch('/enable/:id', courseController.enableCourse);

//? disable courses
courseRouter.patch('/disable/:id', courseController.disableCourse);

//? delete courses
courseRouter.patch('/delete/:id', courseController.removeCourse);

//? destroy courses
courseRouter.delete('/destroy/:id', courseController.destroyCourse);


export default courseRouter;
