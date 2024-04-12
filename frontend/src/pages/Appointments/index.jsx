import React, { useState, useEffect } from "react";
import AppointmentList from "components/Appointments/AppointmentList";
import AppointmentForm from "components/Appointments/AppointmentForm";
import {
  createAppointment,
  getAllAppointments,
} from "../../API/Appointment/index.js";
const AppointmentsPage = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAllAppointments()
      .then((data) => {
        setAppointments(data);
      })
      .catch((error) => {
        // Handle the error state as needed
        console.error("Failed to load appointments:", error);
      });
  }, []);
  const handleCreateAppointment = async ({ date, time, reason }) => {
    await createAppointment({ date, time, reason });
    getAllAppointments()
      .then((data) => {
        setAppointments(data);
      })
      .catch((error) => {
        // Handle the error state as needed
        console.error("Failed to load appointments:", error);
      });
  };
  return (
    <div className="flex flex-wrap justify-between gap-10 p-10">
      <div className="flex-1 min-w-0">
        <AppointmentList appointments={appointments} />
      </div>
      <div className="flex-1 max-w-md min-w-0">
        <AppointmentForm onCreateAppointment={handleCreateAppointment} />
      </div>
    </div>
  );
};

export default AppointmentsPage;
