// controllers/appointmentController.js
import mongoose from "mongoose";
import Appointment from "../models/Appointment.js";

export const createAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateAppointment = async (req, res) => {
  const { id } = req.params;
  const { date, time, reason, status } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No appointment with id: ${id}`);

  const updatedAppointment = { date, time, reason, status, _id: id };

  await Appointment.findByIdAndUpdate(id, updatedAppointment, { new: true });

  res.json(updatedAppointment);
};

export const deleteAppointment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No appointment with id: ${id}`);

  await Appointment.findByIdAndDelete(id);

  res.json({ message: "Appointment deleted successfully." });
};
