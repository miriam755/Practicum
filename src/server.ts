import app from './app.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

console.log("Starting server process..."); // שורת בדיקה



const PORT = Number(process.env.PORT) || 3002;
const MONGODB_URI = process.env.MONGODB_URI

const startServer = async () => {
    try {
        console.log("Attempting to connect to MongoDB...");
        await mongoose.connect(MONGODB_URI as string);
        console.log('✅ Connected to MongoDB');

        app.listen(PORT, "0.0.0.0", () => {
            console.log(`🚀 Server is running on port ${PORT}`);
        });

        // app.listen(PORT, () => {
        //     console.log(`🚀 Server is running on http://localhost:${PORT}`);
        // }
        // );
    } catch (error) {
        console.error('❌ Error during startup:', error);
    }
};

// קריאה לפונקציה
startServer();