import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import mongoose from 'mongoose';
import { connectDB } from './config/db.js';
import { HoldingsModel } from './model/HoldingsModels.js';
import { PositionsModel } from './model/PositionsModel.js';
import { holdings, positions } from '../dashboard/src/data/data.js';
import { userRouter } from './routes/auth.js';
import { authUser } from './routes/profile.js';
import { marketIndices } from './routes/marketIndices.js';
import { fundsRouter } from './routes/funds.js';
import { holdingRouter } from './routes/holdings.js';
import { positionRouter } from './routes/positions.js';
import { orderRouter } from './routes/orders.js';

import { startEODSettlement } from './cronJob.js';


const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
connectDB();

app.use((req, res, next) => {
    console.log("Content-Type:", req.headers["content-type"]);
    next();
});

//user route
app.use('/api/auth', userRouter);
//user auth route 
app.use('/api/profile',authUser );

// market indices
app.use('/api', marketIndices);

//get funds of user 

app.use('/api/auth/funds',fundsRouter);

//get holdings of user 
app.use('/api/auth/holdings', holdingRouter );

// get positions of user 

app.use('/api/auth/positions', positionRouter);

//get orders of user 
app.use('/api/auth/orders', orderRouter);


// app.get('/addHoldings', (req, res)=>{
//     let tempData = holdings;

//     tempData.forEach((item)=>{
//         let holding = new HoldingsModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//         });
//         console.log(holding)
//         holding.save();
//     });
//     res.send("Working");
// })

// app.get('/addPositions', (req, res)=>{
//     let tempData = positions;

//     tempData.forEach((item)=>{
//         let position = new PositionsModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss,
//         });
//         console.log(position)
//         position.save();
//     });
//     res.send("Working");
// })

// app.get('/allHoldings', async (req, res)=>{
//     let holdingData = await HoldingsModel.find({});
//     console.log(holdingData);
//     res.send(holdingData);
// });
// app.get('/allPositions', async (req, res)=>{
//     let positionData = await PositionsModel.find({});
//     console.log(positionData);
//     res.send(positionData);
// });

app.get('/',(req, res)=>{
    res.status(200).json(message:"Server is running on port 8000");
})

startEODSettlement();
const PORT= process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
});