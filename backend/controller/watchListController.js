import axios from 'axios';
import { User } from '../model/UserModel.js';

export const getWatchList = async (req, res)=>{
    try {
        const user = await User.findById(req.user.id);
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        const symbols = user.watchlist;
        if(!symbols || symbols.length === 0){
            return res.json([]);
        }
        const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;
        const stockPromises = symbols.map(async (symbol)=>{
            const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`);
            return {
                symbol,
                data:response.data
            };
        });

        const watchlistData = await Promise.all(stockPromises);
        console.log(watchlistData);
        return res.json(watchlistData);

    } catch (error) {
        console.error('Finnhub Fetch Error:', error.message);
        return res.status(500).json({message:"server error fetching live data", error:error.message});
    }
}

//Update watchList 

export const updateWatchList = async (req, res)=>{
    try {
        const userId = req.user.id;
        const {operation , stock}= req.body;
        if(!stock){
            return res.status(400).json({ message: "Stock is required" });
        }
        let updatedUser;
        if(operation==="add"){
            updatedUser = await User.findByIdAndUpdate(
            userId,
            {$addToSet: {watchlist:stock}},
            {new:true}
           );
        }
        else if(operation==='del'){
             updatedUser = await User.findByIdAndUpdate(
                userId,
                {$pull: {watchlist:stock}},
                {new:true}
             )
        }
        else{
            return res.status(400).json({ message: "Invalid operation type" });
        }
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({
            message: `Stock successfully ${operation === 'add' ? 'added to' : 'removed from'} watchlist`,
            watchlist: updatedUser.watchlist
        });
    } catch (error) {
        console.error("Error updating watchlist:", error);
        return res.status(500).json({ 
            message: "Failed to update watchlist", 
            error: error.message 
        });
    }
    
}