import { model } from "mongoose";
import { OrdersSchema } from "../schemas/OrdersScehma.js";


export const OrdersModel = new model('order' , OrdersSchema);