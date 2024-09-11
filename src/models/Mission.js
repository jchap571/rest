import { Schema } from "mongoose";

export const MissionSchema = new Schema(
  {
    id: { type: Schema.ObjectId, required: true },
    codename: { type: String, required: true },
    objective: { type: String, required: true },
    year: { type: String, required: true },
    locationId: { type: Schema.ObjectId, required: true },
    ratId: { type: Schema.ObjectId, required: true },
    completed: { type: Boolean, required: true },
  }



)



MissionSchema.virtual('location', {
  localField: 'locationId',
  foreignField: '_id',
  ref: 'Location',
  justOne: true,
})

MissionSchema.virtual('rat', {
  localField: 'ratId',
  foreignField: '_id',
  ref: 'Rat',
  justOne: true,



})