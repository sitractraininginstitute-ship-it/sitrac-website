import { Schema, models, model } from "mongoose";

const ServiceSchema = new Schema(
    {
        title:            { type: String, required: true },
        slug:             { type: String, required: true, unique: true },
        shortDescription: { type: String, required: true },
        fullDescription:  { type: String, required: true },
        coverImage:       { type: String, required: true },
        category:         { type: String },
        duration:         { type: String },
        price:            { type: String },
        featured:         { type: Boolean, default: false },
        order:            { type: Number,  default: 0 },
        seoTitle:         { type: String },
        seoDescription:   { type: String },
    },
    { timestamps: true }
);

export default models.Service || model("Service", ServiceSchema);
