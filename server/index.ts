import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db";
import alumniRoutes from "./routes/alumni";
import authRoutes from "./routes/auth";

dotenv.config();

const app = express();

// CORS configuration
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin) return callback(null, true);
            if (origin.includes("localhost")) return callback(null, true);
            if (origin.endsWith(".vercel.app")) return callback(null, true);
            if (process.env.CLIENT_URL && origin === process.env.CLIENT_URL) {
                return callback(null, true);
            }
            callback(null, false);
        },
        credentials: true,
    })
);
app.use(express.json());

// Lazy MongoDB connection for serverless
let isConnected = false;
app.use(async (_req, _res, next) => {
    if (!isConnected) {
        await connectDB();
        isConnected = true;
    }
    next();
});

// Routes
app.use("/api/alumni", alumniRoutes);
app.use("/api/auth", authRoutes);

// Health check
app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Local dev server (not used on Vercel)
if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
}

export default app;
