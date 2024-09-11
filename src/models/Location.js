import { Schema } from "mongoose";


export const LocationSchema = new Schema(
  {
    id: { type: Schema.ObjectId, required: true },
    country: { type: String, required: true },
    area: { type: String, required: true },
    labels: { type: [String] }


  }, { timestamps: true, toJSON: { virtuals: true } }



)