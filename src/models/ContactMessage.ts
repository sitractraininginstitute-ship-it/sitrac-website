import { Schema, models, model } from "mongoose";

const ContactMessageSchema = new Schema(
    {
        name:    { type: String, required: true },
        email:   { type: String, required: true },
        service: { type: String },
        message: { type: String, required: true },
        read:    { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default models.ContactMessage || model("ContactMessage", ContactMessageSchema);
