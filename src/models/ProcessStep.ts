import { Schema, models, model } from "mongoose";

const ProcessStepSchema = new Schema(
    {
        stepNumber:  { type: String, required: true },
        title:       { type: String, required: true },
        description: { type: String, required: true },
        order:       { type: Number, default: 0 },
    },
    { timestamps: true }
);

export default models.ProcessStep || model("ProcessStep", ProcessStepSchema);
