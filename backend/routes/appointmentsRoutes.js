// routes/appointmentRoutes.js
import express from "express";
import {
  createAppointment,
  getAppointments,
  updateAppointment,
  deleteAppointment,
} from "../controllers/appointmentsController.js";

const router = express.Router();

router.post("/", createAppointment);
router.get("/", getAppointments);
router.patch("/:id", updateAppointment);
router.delete("/:id", deleteAppointment);

export default router;
