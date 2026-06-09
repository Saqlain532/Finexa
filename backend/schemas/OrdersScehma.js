import { Schema } from "mongoose";
import mongoose from "mongoose";

export const OrdersSchema = new Schema({
    user:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"User",
       required:true
    },
    name:{
        type:String,
        required:true
    },
    qty:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    mode:{
        type:String,
        required:true
    },
    product:{
        type:String,
        required:true
    }
},{timestamps:true}
)