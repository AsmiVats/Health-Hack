const express = require("express");
const { chatbotResponse } = require("../models/chatbotcontroller");
const router = express.Router();

router.post("/chatbot", chatbotResponse);

module.exports = router;
