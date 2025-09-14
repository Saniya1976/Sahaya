import express from "express";
import twilio from "twilio";

const router = express.Router();

router.post("/webhook", (req, res) => {
  const twiml = new twilio.twiml.MessagingResponse();

  // Simple reply
  twiml.message("Hello 👋 I am Sahaya Bot! How can I help you today?");

  res.type("text/xml").send(twiml.toString());
});

export default router;
