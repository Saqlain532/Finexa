import express from 'express';
import { getOrders, postOrders } from '../controller/ordersController.js';
import {auth} from '../middleware/auth.js'
export const orderRouter = express.Router();

orderRouter.get('/getorders', auth ,getOrders);
orderRouter.post('/postorder', auth, postOrders);