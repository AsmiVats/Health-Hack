const axios = require("axios");
const twilio = require("twilio");
require("dotenv").config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

let userInteractionCount = {};


const chatbotResponse = async (req, res) => {
  const { message, userId, phoneNumber } = req.body; 
  let reply;

  if (!userInteractionCount[userId]) {
    userInteractionCount[userId] = 0;
  }
  userInteractionCount[userId]++;

  if (message.toLowerCase().includes("hello")) {
    reply = "Hello! How can I assist you?";
  } else if (message.toLowerCase().includes("fever")) {
    reply = "You might need to consult a doctor. Would you like to connect with one?";
  } else if (message.toLowerCase().includes("headache")) {
    reply = "Rest well and stay hydrated. Do you need to talk to a doctor?";
  } else if (userInteractionCount[userId] >= 3) {
    reply = "It seems you need medical assistance. I'm connecting you to a doctor now...";

    try {
      const call = await client.calls.create({
        url: "http://demo.twilio.com/docs/voice.xml", 
        to: phoneNumber, 
        from: process.env.TWILIO_PHONE_NUMBER,
      });

      console.log(`Call initiated: ${call.sid}`);
    } catch (error) {
      console.error("Call failed:", error);
      return res.status(500).json({ error: "Failed to connect with the doctor" });
    }
  } else {
    reply = "I'm here to help! Ask me anything about healthcare.";
  }

  return res.json({ reply });
};

module.exports = { chatbotResponse };
