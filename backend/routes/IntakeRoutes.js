const express = require('express');
const Intake = require('../models/Intake');

const router = express.Router();

// POST endpoint to log new dietary intake
router.post('/api/intake', async (req, res) => {
  try {
    const intake = new Intake(req.body);
    await intake.save();
    res.status(201).send(intake);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// GET endpoint to retrieve dietary history
router.get('/api/intake', async (req, res) => {
  try {
    const history = await Intake.find();
    res.status(200).send(history);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
