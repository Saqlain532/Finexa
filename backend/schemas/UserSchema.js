import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
 
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    trim: true 
  },
  password: { 
    type: String, 
    required: true 
  },

  
  firstName: { 
    type: String, 
    required: true 
  },
  lastName: { 
    type: String 
  },

 watchlist: { 
    type: [String], 
    default: [
          "AAPL",
          "TSLA",
          "MSFT",
          "AMZN",
          "GOOGL"
    ] 
  }

}, { 
  timestamps: true 
});

userSchema.post('save', async function(doc, next){
      try {
        const {Funds} = await import('../model/FundsModel.js');
        const initialFunds = new Funds({
          userId: doc._id
        });
        await initialFunds.save();
        next();
      } catch (error) {
        next(error);
      }
})

export {userSchema};
