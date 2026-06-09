import { Schema } from "mongoose";
import mongoose from "mongoose";
export const PositionsSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    product:{
        type:String,
        required:true
    },
    name: {
        type:String,
        required:true
    },
    qty:{
         type:Number,
         required: true
        },
    avg:{
        type:Number,
        required:true
    },
});
