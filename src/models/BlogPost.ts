import { Schema, models, model } from "mongoose";

const BlogPostSchema = new Schema(
    {
        title:          { type: String, required: true },
        slug:           { type: String, required: true, unique: true },
        excerpt:        { type: String, required: true },
        body:           { type: String, required: true },
        coverImage:     { type: String, required: true },
        category:       { type: String },
        author:         { type: String },
        publishedAt:    { type: Date,   default: Date.now },
        seoTitle:       { type: String },
        seoDescription: { type: String },
    },
    { timestamps: true }
);

export default models.BlogPost || model("BlogPost", BlogPostSchema);
