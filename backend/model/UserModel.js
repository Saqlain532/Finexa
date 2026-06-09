import { userSchema } from "../schemas/UserSchema.js";
import { model } from "mongoose";


export const User = new model('User', userSchema);