import express from 'express';
import {auth }from '../middleware/auth.js';
import { User } from '../model/UserModel.js';
import { authController } from '../controller/authController.js';
import { getWatchList, updateWatchList } from '../controller/watchListController.js';


export const authUser = express.Router();

authUser.get('/me', auth, authController);

//Get Live watchList data

authUser.get('/watchlist', auth, getWatchList);
authUser.post('/watchlist/updatewatchlist' ,auth, updateWatchList);