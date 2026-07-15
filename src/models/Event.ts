import { Schema, models, model } from "mongoose";

const EventSchema = new Schema(
    {
        title:            { type: String, required: true },
        slug:             { type: String, required: true, unique: true },
        date:             { type: Date,    required: true },
        time:             { type: String },
        location:         { type: String },
        description:      { type: String, required: true },
        category:         {
            type:     String,
            required: true,
            enum:     ["Short Courses", "Workshops", "Seminars", "Conferences"],
        },
        price:            { type: String },
        registrationLink: { type: String },
        coverImage:       { type: String, required: true },
        featured:         { type: Boolean, default: false },
        // Optional PDF attachment (brochure / info sheet)
        attachmentUrl:    { type: String },
        attachmentName:   { type: String },
    },
    { timestamps: true }
);

export default models.Event || model("Event", EventSchema);
