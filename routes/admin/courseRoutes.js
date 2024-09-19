import express from 'express';
import { courseController } from '../../controllers/admin/courseController.js';

const courseRouter = express.Router();

//! Course Operations

//? get all courses
courseRouter.post('/get', courseController.getAllCourse);

//? create courses
courseRouter.post('/create', courseController.createCourse);

//? update courses
courseRouter.post('/update', courseController.updateCourse);

//? enable courses
courseRouter.post('/enable', courseController.enableCourse);

//? disable courses
courseRouter.post('/disable', courseController.disableCourse);

//? delete courses
courseRouter.post('/delete', courseController.removeCourse);

//? destroy courses
courseRouter.delete('/destroy', courseController.destroyCourse);


export default courseRouter;
