const mongoose = require('mongoose');

const intakeSchema = new mongoose.Schema({
  foodItem: String,
  quantity: Number,
  calories: Number,
  date: { type: Date, default: Date.now },
  // Optional nutritional information
  fat: Number,
  protein: Number,
  carbohydrates: Number,
});

module.exports = mongoose.model('Intake', intakeSchema);
