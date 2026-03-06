import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import alumniRoutes from "./routes/alumni.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Allowed origins for CORS
const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:3001",
];

// Add deployed frontend URL if set
if (process.env.CLIENT_URL) {
    allowedOrigins.push(process.env.CLIENT_URL);
}

// Middleware
app.use(
    cors({
        origin: allowedOrigins,
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
