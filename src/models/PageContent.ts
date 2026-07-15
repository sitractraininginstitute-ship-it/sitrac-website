import { Schema, models, model } from "mongoose";

const StatSchema = new Schema(
    {
        label: { type: String },
        value: { type: String },
    },
    { _id: false }
);

const PageContentSchema = new Schema(
    {
        pageKey:      {
            type:     String,
            required: true,
            unique:   true,
            enum:     ["home", "about", "contact"],
        },
        heroTitle:    { type: String },
        heroSubtitle: { type: String },
        stats:        { type: [StatSchema], default: [] },
        extra:        { type: Schema.Types.Mixed },
    },
    { timestamps: true }
);

export default models.PageContent || model("PageContent", PageContentSchema);
