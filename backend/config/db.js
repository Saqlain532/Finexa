import mongoose from 'mongoose';

export const connectDB = async ()=>{
    try {
        const uri=process.env.MONGO_URL;
         await mongoose.connect(uri);
         console.log('DB connected');
  
    } catch (error) {
        console.error("Database connection error", error);
    }
}

