// models/appointment.js
import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  reason: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["scheduled", "cancelled", "updated"],
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
