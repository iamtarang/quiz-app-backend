import express from 'express';
import { facultyController } from '../../controllers/admin/facultyContoller.js';

const facultyRouter = express.Router();

//! Faculty Operations

//? get all facultys
facultyRouter.post('/get', facultyController.getAllFaculty);

//? create facultys
facultyRouter.post('/create', facultyController.createFaculty);

//? update facultys
facultyRouter.post('/update/:id', facultyController.updateFaculty);

//? enable facultys
facultyRouter.post('/enable/:id', facultyController.enableFaculty);

//? disable facultys
facultyRouter.post('/disable/:id', facultyController.disableFaculty);

//? delete facultys
facultyRouter.post('/delete/:id', facultyController.removeFaculty);

//? destroy facultys
facultyRouter.delete('/destroy/:id', facultyController.destroyFaculty);


export default facultyRouter;
