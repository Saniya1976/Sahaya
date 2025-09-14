import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import whatsappRoutes from "./routes/whatsapp.js";

dotenv.config();
const app = express();
app.use(cors());

// Add this line to parse URL-encoded data from Twilio
app.use(express.urlencoded({ extended: false })); // <- THIS LINE IS CRITICAL

// Keep this if you also expect JSON from other parts of your app
app.use(express.json());

// Routes
app.use("/", whatsappRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));