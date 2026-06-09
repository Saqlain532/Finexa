import { refreshTokenSchema } from "../schemas/refreshTokenSchema.js";
import { model } from "mongoose";

export const RefreshToken  = new model('refreshToken', refreshTokenSchema);