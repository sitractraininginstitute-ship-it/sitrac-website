import { Schema, models, model } from "mongoose";

const SocialLinkSchema = new Schema(
    {
        platform: { type: String },
        url:      { type: String },
    },
    { _id: false }
);

const TeamMemberSchema = new Schema(
    {
        name:        { type: String, required: true },
        slug:        { type: String, unique: true, sparse: true },
        role:        { type: String, required: true },
        bio:         { type: String },
        photo:       { type: String, required: true },
        order:       { type: Number, default: 0 },
        socialLinks: { type: [SocialLinkSchema], default: [] },
    },
    { timestamps: true }
);

export default models.TeamMember || model("TeamMember", TeamMemberSchema);
