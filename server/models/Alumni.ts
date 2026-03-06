import mongoose, { Schema, Document } from "mongoose";

export interface IAlumni extends Document {
    name: string;
    year: number;
    role: string;
    company: string;
    linkedin: string;
    photo: string; // filename without extension, stored in public/alumni/
    createdAt: Date;
    updatedAt: Date;
}

const AlumniSchema = new Schema<IAlumni>(
    {
        name: { type: String, required: true, trim: true },
        year: { type: Number, required: true },
        role: { type: String, required: true, trim: true },
        company: { type: String, required: true, trim: true },
        linkedin: { type: String, required: true, trim: true },
        photo: { type: String, default: "", trim: true },
    },
    {
        timestamps: true,
    }
);

// Index for fast year-based grouping
AlumniSchema.index({ year: -1 });

const Alumni = mongoose.model<IAlumni>("Alumni", AlumniSchema);
export default Alumni;
