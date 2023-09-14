import express from 'express';
import { subjectController } from '../../controllers/admin/subjectController.js';

const subjectRouter = express.Router();

//! Subject Operations

//? get all subjects
subjectRouter.get('/get', subjectController.getAllSubject);

//? create subjects
subjectRouter.post('/create', subjectController.createSubject);

//? update subjects
subjectRouter.patch('/update/:id', subjectController.updateSubject);

//? enable subjects
subjectRouter.patch('/enable/:id', subjectController.enableSubject);

//? disable subjects
subjectRouter.patch('/disable/:id', subjectController.disableSubject);

//? delete subjects
subjectRouter.patch('/delete/:id', subjectController.removeSubject);

//? destroy subjects
subjectRouter.delete('/destroy/:id', subjectController.destroySubject);


export default subjectRouter;
