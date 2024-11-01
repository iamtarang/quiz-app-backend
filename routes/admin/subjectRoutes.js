import express from 'express';
import { subjectController } from '../../controllers/admin/subjectController.js';

const subjectRouter = express.Router();

//! Subject Operations

//? get all subjects
subjectRouter.post('/get', subjectController.getAllSubject);

//? create subjects
subjectRouter.post('/create', subjectController.createSubject);

//? update subjects
subjectRouter.post('/update', subjectController.updateSubject);

//? enable subjects
subjectRouter.post('/enable', subjectController.enableSubject);

//? disable subjects
subjectRouter.post('/disable', subjectController.disableSubject);

//? delete subjects
subjectRouter.post('/delete', subjectController.removeSubject);

//? destroy subjects
subjectRouter.delete('/destroy', subjectController.destroySubject);


export default subjectRouter;
