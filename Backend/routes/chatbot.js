const express = require("express");
const router = express.Router();
const Hospital = require("../models/hospital");

router.post("/chat", async (req, res) => {
    const { hospitalId, message } = req.body;
    
    if (message.includes("serious issue")) {
        const hospital = await Hospital.findById(hospitalId);
        const doctor = hospital?.doctors[0];
        return res.json({ escalate: true, doctor });
    }

    res.json({ escalate: false, response: "This is a general response from GPT we will connect you with a real doctor shortly." });
});

module.exports = router;