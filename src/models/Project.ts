import { Schema, models, model } from "mongoose";

const ProjectSchema = new Schema(
    {
        title:       { type: String, required: true },
        slug:        { type: String, required: true, unique: true },
        category:    { type: String },
        description: { type: String, required: true },
        coverImage:  { type: String, required: true },
        images:      { type: [String], default: [] },
        client:      { type: String },
        year:        { type: String },
    },
    { timestamps: true }
);

export default models.Project || model("Project", ProjectSchema);
