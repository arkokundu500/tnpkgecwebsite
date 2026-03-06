import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret";

export interface AuthRequest extends Request {
    admin?: { id: string };
}

export function verifyToken(
    req: AuthRequest,
    res: Response,
    next: NextFunction
): void {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({ error: "Access denied. No token provided." });
        return;
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
        req.admin = decoded;
        next();
    } catch {
        res.status(403).json({ error: "Invalid or expired token." });
    }
}
