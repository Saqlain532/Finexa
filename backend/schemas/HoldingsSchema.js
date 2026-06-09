import { Schema } from "mongoose";
import mongoose from "mongoose";

export const HoldingsSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true,
        min: 0
    },
    avg: {
        type: Number,
        required: true
    }
   
},{timestamps: true});
