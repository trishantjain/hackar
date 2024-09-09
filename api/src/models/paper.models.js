import mongoose, { Schema } from "mongoose";


const paperSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fileUrl: { type: String, required: true },
  subject: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['submitted', 'assigned', 'reviewed', 'completed'], 
    default: 'submitted' 
  },
  assignedReviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  feedback: { type: String },
  submittedAt: { type: Date, default: Date.now },
  reviewedAt: { type: Date },
  score: { type: Number },
});


export const Paper = mongoose.model("Paper", paperSchema);