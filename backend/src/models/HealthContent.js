// models/HealthContent.js
import mongoose from "mongoose";

const healthContentSchema = new mongoose.Schema({
  // A unique identifier for each health topic (e.g., "monsoon-health", "dengue-prevention")
  topicId: {
    type: String,
    required: true,
    unique: true
  },
  // English Content
  title_en: {
    type: String,
    required: true
  },
  body_en: {
    type: String,
    required: true
  },
  // Hindi Content
  title_h1: {
    type: String,
    required: true
  },
  body_h1: {
    type: String,
    required: true
  },
  // Odia Content
  title_or: {
    type: String,
    required: true
  },
  body_or: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// Create the model from the schema
const HealthContent = mongoose.model("HealthContent", healthContentSchema);

export default HealthContent;