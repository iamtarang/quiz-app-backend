import express from 'express';
import { loginController } from '../controllers/loginController.js';

const loginRouter = express.Router();

//! User Login
loginRouter.post('/login', loginController.login);

export default loginRouter;
