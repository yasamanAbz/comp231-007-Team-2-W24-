import React, { useState, useEffect } from "react";
import AppointmentList from "components/Appointments/AppointmentList";
import AppointmentForm from "components/Appointments/AppointmentForm";
import ConfirmDeletePopup from "components/Appointments/ConfirmDeletePopup.jsx";
import {
  createAppointment,
  getAllAppointments,
  deleteAppointment,
} from "../../API/Appointment/index.js";
const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
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
    await getAllAppointments()
      .then((data) => {
        setAppointments(data);
      })
      .catch((error) => {
        // Handle the error state as needed
        console.error("Failed to load appointments:", error);
      });
  };
  const handleAppointmentUpdate = async (id) => {};
  const handleAppointmentDelete = async (appointmentId) => {
    await deleteAppointment(appointmentId);
    await getAllAppointments()
      .then((data) => {
        setAppointments(data);
      })
      .catch((error) => {
        // Handle the error state as needed
        console.error("Failed to load appointments:", error);
      });
    setShowConfirmModal(false);
  };
  return (
    <div className="flex flex-wrap justify-between gap-10 p-10">
      <div className="flex-1 min-w-0">
        <AppointmentList
          appointments={appointments}
          onAppointmentUpdate={handleAppointmentUpdate}
          onAppointmentDelete={(appointment) => {
            setSelectedAppointment(appointment);
            setShowConfirmModal(true);
          }}
        />
      </div>
      <div className="flex-1 max-w-md min-w-0">
        <AppointmentForm onCreateAppointment={handleCreateAppointment} />
      </div>
      {showConfirmModal && (
        <ConfirmDeletePopup
          selectedAppointment={selectedAppointment}
          onCancelClick={() => {
            setShowConfirmModal(false);
            setSelectedAppointment();
          }}
          onConfirmClick={handleAppointmentDelete}
        />
      )}
    </div>
  );
};

export default AppointmentsPage;
