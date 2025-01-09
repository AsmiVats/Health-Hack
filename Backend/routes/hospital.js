const express = require("express");
const router = express.Router();
const Hospital = require("../models/hospital");


router.post("/", async (req, res) => {
    const { name, doctors } = req.body;
    const newHospital = new Hospital({ name, doctors });
    await newHospital.save();
    res.status(201).json(newHospital);
});

router.get("/", async (req, res) => {
    const hospitals = await Hospital.find();
    res.json(hospitals);
});

module.exports = router;
