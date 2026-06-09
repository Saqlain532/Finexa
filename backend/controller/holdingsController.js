import { HoldingsModel } from '../model/HoldingsModels.js';
import axios from 'axios';


export const getUserHoldings = async (req, res)=>{
    try {
        const user = req.user.id;
        const holdingsData = await HoldingsModel.find({user});
        if(!holdingsData || holdingsData.length===0){
            return res.status(404).json({message:"No holdings available for this User "});
        }
        const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;
        const stockPromises = holdingsData.map(async (dbHolding)=>{
            const symbol = dbHolding.name;
            const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`);
            const liveData = response.data;
          
            return {
                id: dbHolding._id,
                name: dbHolding.name,
                qty:dbHolding.qty,
                avg:dbHolding.avg,
                price:liveData.c,
                net:liveData.d,
                day:liveData.dp
            };
        });

        const userHoldingData = await Promise.all(stockPromises);
        console.log(userHoldingData);
        return res.json(userHoldingData);
    } catch (error) {
        console.error('Finnhub Fetch Error:', error.message);
        return res.status(500).json({message:"server error fetching live data", error:error.message});
    }
    
}