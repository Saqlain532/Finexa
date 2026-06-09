import cron from 'node-cron';
import { PositionsModel } from './model/PositionsModel.js';
import { HoldingsModel } from './model/HoldingsModels.js';


export const startEODSettlement = () =>{
    cron.schedule('59 23 * * *', async ()=>{
        console.log("Starting End of the day (EOD) settlement...");
         try {
        const deliveryPositions = await PositionsModel.find({
            product: 'CNC',
            qty: {$gt:0}
        });

        for(const pos of deliveryPositions){
            let holding = await HoldingsModel.findOne({
                user:pos.user,
                name:pos.name
            });

            if(holding){
                const totalPreviousValue = holding.qty * holding.avg;
                const newTradeValue = pos.qty * pos.avg;
                const newTotalQty = holding.qty + pos.qty;

                holding.avg = (totalPreviousValue + newTradeValue) / newTotalQty;
                holding.qty = newTotalQty;

                const holdingSaveRes = await holding.save();
                console.log(holdingSaveRes);
            }
            else{
                const newHolding = new HoldingsModel({
                    user:pos.user,
                    name:pos.name,
                    qty:pos.qty,
                    avg:pos.avg
                });
                const holdingSaveRes = await newHolding.save();
                console.log(holdingSaveRes);
            }
        }
        await PositionsModel.deleteMany({});
        console.log(`EOD settlement Complete ! Moved ${deliveryPositions.length} positions to holding .`);
    } catch (error) {
        console.error("🔥 CRITICAL ERROR DURING EOD SETTLEMENT:", error);
    }
    });
}