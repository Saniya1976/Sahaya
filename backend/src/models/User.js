// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  // The user's WhatsApp number, provided by Twilio (e.g., "whatsapp:+1234567890")
  whatsappId: {
    type: String,
    required: true,
    unique: true // Ensures no duplicate users
  },
  // The language preference for the user ('en', 'h1', 'or')
  language: {
    type: String,
    required: true,
    default: 'en' // Default language is English
  },
  // Whether the user has given consent to receive messages
  consentGiven: {
    type: Boolean,
    required: true,
    default: false // Default is no consent
  },
  // Tracks where the user is in the conversation flow
  conversationState: {
    type: String,
    required: true,
    default: 'start' // Initial state
  }
}, {
  timestamps: true // Adds `createdAt` and `updatedAt` fields automatically
});

const User = mongoose.model("User", userSchema);

export default User;