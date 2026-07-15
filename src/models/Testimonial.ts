import { Schema, models, model } from "mongoose";

const TestimonialSchema = new Schema(
    {
        name:         { type: String, required: true },
        role:         { type: String },
        organization: { type: String },
        quote:        { type: String, required: true },
        photo:        { type: String },
        order:        { type: Number, default: 0 },
    },
    { timestamps: true }
);

export default models.Testimonial || model("Testimonial", TestimonialSchema);
