import { Schema, models, model } from "mongoose";

const ClientLogoSchema = new Schema(
    {
        name:  { type: String, required: true },
        logo:  { type: String, required: true },
        order: { type: Number, default: 0 },
    },
    { timestamps: true }
);

export default models.ClientLogo || model("ClientLogo", ClientLogoSchema);
