import { Funds } from "../model/FundsModel.js"


//get User funds
export  const getUserFunds = async (req, res)=>{
        try {
            const userFunds = await Funds.findOne({ user: req.user.id });
            if (!userFunds) {
            return res.status(404).json({ message: "Funds not found for this user" });
            }
            return res.status(200).json(userFunds);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
}