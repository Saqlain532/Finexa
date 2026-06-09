import { OrdersModel } from "../model/OrdersModel.js";
import { model } from "mongoose";
import { PositionsModel } from "../model/PositionsModel.js";
import { HoldingsModel } from "../model/HoldingsModels.js";
import { Funds } from "../model/FundsModel.js";


export const getOrders = async (req, res)=>{
    try {
        const userId = req.user.id;
        const orderData = await OrdersModel.find({ user: userId }).sort({ createdAt: -1 });
        return res.status(200).json(orderData);
    } catch (error) {
        console.error("Server side error ", error.message);
        res.status(500).json({message:"Server fetching error" , error:error.message});
    }
}

export const postOrders = async (req, res)=>{
    try {
        const userId = req.user.id;
        const {mode, name, price, qty, product} = req.body;
        const tradePrice = Number(price);
        const tradeQty = Number(qty);
        const tradeValue = tradePrice * tradeQty;
        let userFunds = await Funds.findOne({ user: userId });
        if (!userFunds) {
            userFunds = new Funds({ user: userId });
        }
        if (mode === 'BUY') {
            // Block the trade if they don't have enough margin
            if (userFunds.availableMargin < tradeValue) {
                return res.status(400).json({ 
                    message: "Order rejected: Insufficient funds.",
                    required: tradeValue,
                    available: userFunds.availableMargin
                });
            }
            // Deduct funds
            userFunds.availableMargin -= tradeValue;
            userFunds.availableCash -= tradeValue;
            userFunds.usedMargin += tradeValue;
        }
        else if (mode === 'SELL') {
            const holding = await HoldingsModel.findOne({user:userId, name:name});
            if (!holding || holding.qty < tradeQty) {
                return res.status(400).json({
                    message: "Order rejected: You do not have enough stock to sell."
                });
            
                 // Add funds back
                userFunds.availableMargin += tradeValue;
                userFunds.availableCash += tradeValue;
                // Prevent usedMargin from dropping below zero
                userFunds.usedMargin = Math.max(0, userFunds.usedMargin - tradeValue); 
                holding.qty = holding.qty - tradeQty;
                await holding.save();
            }
            
            else{
                console.error("Any other server side error.")
            }
        }
        // Save the updated funds
        await userFunds.save();

        // 2. SAVE THE ORDER
        const newOrder = new  OrdersModel({
            user:userId,
            mode,
            name,
            price:Number(price),
            qty:Number(qty),
            product
        });
       const response =  await newOrder.save();
       if(response){
            console.log("Order saved:", response._id, "Funds Updated");
            let position = await PositionsModel.findOne({ 
            user: userId, 
            name: name, 
            product: product 
        });
        const orderQty = mode === 'BUY' ? Number(qty) : -Number(qty);
        if (!position) {
      
            const newPosition = new PositionsModel({
                user: userId,
                product: product,
                name: name,
                qty: orderQty,
                avg: Number(price)
            });
           await newPosition.save();
        }
       else {
      
            if (mode === 'BUY') {
                const totalPreviousValue = position.qty * position.avg;
                const newTradeValue = Number(qty) * Number(price);
                const newTotalQty = position.qty + Number(qty);
        
                if (newTotalQty !== 0) {
                        position.avg = (totalPreviousValue + newTradeValue) / newTotalQty;
                }
            }
        position.qty += orderQty;

        await position.save();
        }
        return res.status(201).json({
            message:"Order created successfully!",
            order: newOrder,
            funds: userFunds
        });
       }
    } catch (error) {
        console.error("Error saving order:", error);
        return res.status(500).json({
            message: "Failed to create order",
            error: error.message
        });
    }
}