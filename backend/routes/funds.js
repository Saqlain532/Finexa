import { getUserFunds } from "../controller/fundsController.js";
import express from 'express';
import {auth} from '../middleware/auth.js'

export const fundsRouter = express.Router();

//get funds route 

fundsRouter.get('/getfunds', auth,getUserFunds)
