// config/db.js
import mongoose from 'mongoose';

let cachedConnection = null;

export const connectDB = async () => {
   
    if (cachedConnection && mongoose.connection.readyState === 1) {
        return cachedConnection;
    }

    try {
        const uri = process.env.MONGO_URL;
        
        if (!uri) {
            console.error("❌ CRITICAL: MONGO_URL is undefined inside process.env!");
            return null;
        }

        
        const isLocal = process.env.NODE_ENV !== 'production' && !process.env.VERCEL;

       
        cachedConnection = await mongoose.connect(uri, {
            
            bufferCommands: !isLocal, 
            serverSelectionTimeoutMS: 5000 
        });
        
        console.log(' DB connected successfully');
        return cachedConnection;
    } catch (error) {
        console.error(" Database connection error detailed log:", error);
        return null; 
    }
};