import express from 'express';
import { studentsController } from '../../controllers/admin/studentsController.js';

const studentsRouter = express.Router();

//! Student Operations

//? get all students
studentsRouter.get('/get', studentsController.getAllStudents);

//? create students
studentsRouter.post('/create', studentsController.createStudents);

//? update students
studentsRouter.patch('/update/:id', studentsController.updateStudents);

//? enable students
studentsRouter.patch('/enable/:id', studentsController.enableStudents);

//? disable students
studentsRouter.patch('/disable/:id', studentsController.disableStudents);

//? delete students
studentsRouter.patch('/delete/:id', studentsController.removeStudents);

//? destroy students
studentsRouter.delete('/destroy/:id', studentsController.destroyStudents);


export default studentsRouter;
