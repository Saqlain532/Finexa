import { model } from "mongoose";
import { PositionsSchema } from "../schemas/PositionsSchema.js";

export const PositionsModel = new model('position', PositionsSchema);