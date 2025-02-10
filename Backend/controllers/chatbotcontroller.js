const axios = require("axios");

const presetResponses = [
  { input: ["hi", "hello", "hey"], response: "Hello! How can I assist you today?" },
  { input: ["i feel sick", "i am not well", "i have a fever"], response: "I'm sorry to hear that. Can you describe your symptoms?" },
  { input: ["headache", "cough", "cold"], response: "It sounds like you might need medical attention. Would you like to consult a doctor?" },
];

const userSessions = {};

const handleChatbotResponse = async (req, res) => {
  const { message, userId, phoneNumber } = req.body;

  if (!message || !userId || !phoneNumber) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  if (!userSessions[userId]) {
    userSessions[userId] = { count: 0 };
  }

  userSessions[userId].count++;

  let botResponse = "I'm not sure how to respond to that. Can you clarify?";
  for (const preset of presetResponses) {
    if (preset.input.includes(message.toLowerCase())) {
      botResponse = preset.response;
      break;
    }
  }

  if (userSessions[userId].count >= 3) {
    try {
      await axios.post("http://localhost:3000/call", { phoneNumber });
      botResponse = "I am connecting you with a doctor now. Please wait for the call.";
      userSessions[userId].count = 0;
    } catch (error) {
      console.error("Twilio Call Error:", error);
      botResponse = "I tried to connect you with a doctor, but something went wrong.";
    }
  }

  res.status(200).json({ response: botResponse });
};

module.exports = { handleChatbotResponse };
