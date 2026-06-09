import { model } from "mongoose";
import { fundsSchema } from "../schemas/FundsSchema.js";


export const Funds = new model('Fund', fundsSchema);