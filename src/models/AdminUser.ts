import { Schema, models, model } from "mongoose";

const AdminUserSchema = new Schema(
    {
        email:        { type: String, required: true, unique: true },
        passwordHash: { type: String, required: true },
    },
    { timestamps: true }
);

export default models.AdminUser || model("AdminUser", AdminUserSchema);
