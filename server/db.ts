import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined in .env file");
}

export async function connectDB(): Promise<void> {
    try {
        await mongoose.connect(MONGO_URI as string);
        console.log(
            `✅ MongoDB connected to database: ${mongoose.connection.db?.databaseName}`
        );
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error);
        process.exit(1);
    }
}

export default mongoose;
