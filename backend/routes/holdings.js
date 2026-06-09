import express from 'express';
import { auth } from '../middleware/auth.js';
import { getUserHoldings } from '../controller/holdingsController.js';

export const holdingRouter = express.Router();

holdingRouter.get('/getholdings', auth,getUserHoldings );