const mongoose = require('mongoose');

// Define the schema for dietary intake
const intakeSchema = new mongoose.Schema({
  foodItem: { type: String, required: true },
  quantity: { type: Number, required: true },
  calories: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  // Optional nutritional information
  nutritionalInfo: {
    fat: { type: Number, default: null },
    protein: { type: Number, default: null },
    carbohydrates: { type: Number, default: null },
  },
});

// Create a model using the schema
const Intake = mongoose.model('Intake', intakeSchema);

module.exports = Intake;
