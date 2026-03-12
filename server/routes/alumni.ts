import { Router, Request, Response } from "express";
import Alumni from "../models/Alumni";
import { verifyToken, AuthRequest } from "../middleware/auth";

const router = Router();

// GET /api/alumni — Public: fetch all alumni (sorted by year desc)
router.get("/", async (_req: Request, res: Response) => {
    try {
        const alumni = await Alumni.find().sort({ year: -1, name: 1 });
        res.json(alumni);
    } catch (error) {
        console.error("Error fetching alumni:", error);
        res.status(500).json({ error: "Failed to fetch alumni" });
    }
});

// GET /api/alumni/:id — Public: fetch one alumni
router.get("/:id", async (req: Request, res: Response) => {
    try {
        const alumni = await Alumni.findById(req.params.id);
        if (!alumni) {
            res.status(404).json({ error: "Alumni not found" });
            return;
        }
        res.json(alumni);
    } catch (error) {
        console.error("Error fetching alumni:", error);
        res.status(500).json({ error: "Failed to fetch alumni" });
    }
});

// POST /api/alumni — Protected: create alumni
router.post("/", verifyToken, async (req: AuthRequest, res: Response) => {
    try {
        const { name, year, role, company, linkedin, photo } = req.body;

        if (!name || !year || !role || !company || !linkedin) {
            res.status(400).json({ error: "All fields are required" });
            return;
        }

        const alumni = new Alumni({
            name,
            year: Number(year),
            role,
            company,
            linkedin,
            photo,
        });

        await alumni.save();
        res.status(201).json(alumni);
    } catch (error) {
        console.error("Error creating alumni:", error);
        res.status(500).json({ error: "Failed to create alumni" });
    }
});

// PUT /api/alumni/:id — Protected: update alumni
router.put("/:id", verifyToken, async (req: AuthRequest, res: Response) => {
    try {
        const { name, year, role, company, linkedin, photo } = req.body;

        const alumni = await Alumni.findByIdAndUpdate(
            req.params.id,
            { name, year: Number(year), role, company, linkedin, photo },
            { new: true, runValidators: true }
        );

        if (!alumni) {
            res.status(404).json({ error: "Alumni not found" });
            return;
        }

        res.json(alumni);
    } catch (error) {
        console.error("Error updating alumni:", error);
        res.status(500).json({ error: "Failed to update alumni" });
    }
});

// DELETE /api/alumni/:id — Protected: delete alumni
router.delete("/:id", verifyToken, async (req: AuthRequest, res: Response) => {
    try {
        const alumni = await Alumni.findByIdAndDelete(req.params.id);

        if (!alumni) {
            res.status(404).json({ error: "Alumni not found" });
            return;
        }

        res.json({ message: "Alumni deleted successfully" });
    } catch (error) {
        console.error("Error deleting alumni:", error);
        res.status(500).json({ error: "Failed to delete alumni" });
    }
});

export default router;
