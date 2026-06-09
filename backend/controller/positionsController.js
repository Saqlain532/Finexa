import { PositionsModel } from "../model/PositionsModel.js";
import axios from 'axios';

export const getPositions = async (req, res)=>{
    try {
        const user = req.user.id;
        const positionsData = await PositionsModel.find({user});
        if(!positionsData || positionsData.length===0 ){
            return res.status(404).json({message:"No positions available for this User "});
        }
        const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;
        const stockPromises = positionsData.map(async (dbHolding)=>{
            const symbol = dbHolding.name;
            const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`);
            const liveData = response.data;
          
            return {
                id: dbHolding._id,
                name: dbHolding.name,
                product: dbHolding.product,
                qty:dbHolding.qty,
                avg:dbHolding.avg,
                price:liveData.c,
                net:liveData.d,
                day:liveData.dp
            };
        });

        const userPositionsData = await Promise.all(stockPromises);
        console.log( userPositionsData);
        return res.json( userPositionsData);
    } catch (error) {
        console.error('Finnhub Fetch Error:', error.message);
        return res.status(500).json({message:"server error fetching live data", error:error.message});
    }
}
