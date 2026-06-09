import { getMarketIndices } from "../controller/marketIndicesController.js";
import express from 'express';


export const marketIndices = express.Router();

marketIndices.get('/marketindices', getMarketIndices);
