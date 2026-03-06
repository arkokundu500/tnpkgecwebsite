import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const router = Router();

const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret";

// Hardcoded admin credentials (hashed on first use)
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD_HASH = bcrypt.hashSync("admin@kgec2025", 10);

// POST /api/auth/login
router.post("/login", async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            res.status(400).json({ error: "Username and password are required" });
            return;
        }

        if (username !== ADMIN_USERNAME) {
            res.status(401).json({ error: "Invalid credentials" });
            return;
        }

        const isMatch = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
        if (!isMatch) {
            res.status(401).json({ error: "Invalid credentials" });
            return;
        }

        const token = jwt.sign({ id: "admin" }, JWT_SECRET, { expiresIn: "24h" });

        res.json({
            message: "Login successful",
            token,
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Login failed" });
    }
});

export default router;
