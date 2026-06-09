import express from 'express'
import { login, logout, refreshPoint, register } from '../controller/userController.js';



export const userRouter = express.Router();

//Regsiter user 
userRouter.post('/register', register );
//login user
userRouter.post('/login',login);
// refresh router 
userRouter.post('/refresh', refreshPoint);

// logout router 

userRouter.post('/logout', logout);


