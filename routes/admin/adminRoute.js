import express from 'express';
import { adminController } from '../../controllers/admin/adminController.js';
const adminRouter = express.Router();

//! Admin Operations

//? get all admins
adminRouter.get('/get', adminController.getAllAdmin);

//? create admins
adminRouter.post('/create', adminController.createAdmin);

//? update admins
adminRouter.patch('/update/:id', adminController.updateAdmin);

//? enable admins
adminRouter.patch('/enable/:id', adminController.enableAdmin);

//? disable admins
adminRouter.patch('/disable/:id', adminController.disableAdmin);

//? delete admins
adminRouter.patch('/delete/:id', adminController.removeAdmin);

//? destroy admins
adminRouter.delete('/destroy/:id', adminController.destroyAdmin);


export default adminRouter;
