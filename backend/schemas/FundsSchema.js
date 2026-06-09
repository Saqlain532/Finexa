import mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const fundsSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        unique:true
    },
    availableCash: {type:Number, default:100000.00},
    openingBalance: {type:Number, default:100000.00},
    payin: {type:Number, default:0},

    availableMargin  :{type:Number, default:100000.00},
    usedMargin :{type:Number, default:0},
    span :{type:Number, default:0},
    deliveryMargin :{type:Number, default:0},
    exposure :{type:Number, default:0},
    optionsPremium :{type:Number, default:0},

    collateralLiquid: {type: Number, default:0},
    collateralEquity: {type: Number, default:0},
},

{
    timestamps:true,
    toJSON: {virtuals:true},
    toObject: {virtuals:true}
}
);