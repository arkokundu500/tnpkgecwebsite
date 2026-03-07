import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import alumniRoutes from "./routes/alumni.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
app.use(
    cors({
        origin: function (origin, callback) {
            // Allow requests with no origin (mobile apps, curl, etc.)
            if (!origin) return callback(null, true);

            // Always allow localhost
            if (origin.includes("localhost")) return callback(null, true);

            // Allow Vercel deployments
            if (origin.endsWith(".vercel.app")) return callback(null, true);

            // Allow any CLIENT_URL set in env
            if (process.env.CLIENT_URL && origin === process.env.CLIENT_URL) {
                return callback(null, true);
            }

            // Block others
            callback(null, false);
        },
        credentials: true,
    })
);
app.use(express.json());

// Routes
app.use("/api/alumni", alumniRoutes);
app.use("/api/auth", authRoutes);

// Health check
app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Start server
async function start() {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
        console.log(`📡 API endpoints:`);
        console.log(`   GET    /api/alumni`);
        console.log(`   POST   /api/alumni      (protected)`);
        console.log(`   PUT    /api/alumni/:id   (protected)`);
        console.log(`   DELETE /api/alumni/:id   (protected)`);
        console.log(`   POST   /api/auth/login`);
        console.log(`   GET    /api/health`);
    });
}

start();
