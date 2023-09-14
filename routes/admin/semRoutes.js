import express from 'express';
import { semController } from '../../controllers/admin/semController.js';

const semRouter = express.Router();

//! Sem Operations

//? get all sems
semRouter.get('/get', semController.getAllSem);

//? create sems
semRouter.post('/create', semController.createSem);

//? update sems
semRouter.patch('/update/:id', semController.updateSem);

//? enable sems
semRouter.patch('/enable/:id', semController.enableSem);

//? disable sems
semRouter.patch('/disable/:id', semController.disableSem);

//? delete sems
semRouter.patch('/delete/:id', semController.removeSem);

//? destroy sems
semRouter.delete('/destroy/:id', semController.destroySem);


export default semRouter;
