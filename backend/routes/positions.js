import express from 'express';
import { getPositions } from '../controller/positionsController.js';
import {auth }from '../middleware/auth.js'

export const positionRouter = express.Router();

positionRouter.get('/getpositions', auth, getPositions)