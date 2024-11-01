import express from 'express';
import { semController } from '../../controllers/admin/semController.js';

const semRouter = express.Router();

//! Sem Operations

//? get all sems
semRouter.post('/get', semController.getAllSem);

//? create sems
semRouter.post('/create', semController.createSem);

//? update sems
semRouter.post('/update', semController.updateSem);

//? enable sems
semRouter.post('/enable', semController.enableSem);

//? disable sems
semRouter.post('/disable', semController.disableSem);

//? delete sems
semRouter.post('/delete', semController.removeSem);

//? destroy sems
semRouter.delete('/destroy', semController.destroySem);


export default semRouter;
