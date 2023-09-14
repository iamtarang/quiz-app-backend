import express from 'express';
import { userController } from '../controllers/userController.js';

const userRouter = express.Router();

//! Admin Operations

//? get all admins
userRouter.get('/get', userController.getOneUser);

export default userRouter