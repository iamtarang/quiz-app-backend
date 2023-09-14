import express from 'express';
import { facultyController } from '../../controllers/admin/facultyContoller.js';

const facultyRouter = express.Router();

//! Faculty Operations

//? get all facultys
facultyRouter.get('/get', facultyController.getAllFaculty);

//? create facultys
facultyRouter.post('/create', facultyController.createFaculty);

//? update facultys
facultyRouter.patch('/update/:id', facultyController.updateFaculty);

//? enable facultys
facultyRouter.patch('/enable/:id', facultyController.enableFaculty);

//? disable facultys
facultyRouter.patch('/disable/:id', facultyController.disableFaculty);

//? delete facultys
facultyRouter.patch('/delete/:id', facultyController.removeFaculty);

//? destroy facultys
facultyRouter.delete('/destroy/:id', facultyController.destroyFaculty);


export default facultyRouter;
