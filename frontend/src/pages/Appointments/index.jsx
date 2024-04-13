import React, { useState, useEffect } from "react";
import AppointmentList from "components/Appointments/AppointmentList";
import AppointmentForm from "components/Appointments/AppointmentForm";
import ConfirmDeletePopup from "components/Appointments/ConfirmDeletePopup.jsx";
import {
  createAppointment,
  getAllAppointments,
  deleteAppointment,
  updateAppointment,
} from "../../API/Appointment/index.js";
const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
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
  const handleSubmitAppointment = async ({ date, time, reason }) => {
    if (isUpdate && selectedAppointment._id) {
      await updateAppointment(selectedAppointment._id, { date, time, reason });
      setSelectedAppointment({ date: "", time: "", reason: "" });
      setIsUpdate(false);
    } else {
      await createAppointment({ date, time, reason });
    }
    await getAllAppointments()
      .then((data) => {
        setAppointments(data);
      })
      .catch((error) => {
        // Handle the error state as needed
        console.error("Failed to load appointments:", error);
      });
  };
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
    setSelectedAppointment({ date: "", time: "", reason: "" });
  };
  const handleAppointmentUpdate = async (appointment) => {
    setSelectedAppointment(appointment);
    setIsUpdate(true);
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
        <AppointmentForm
          onSubmitAppointment={handleSubmitAppointment}
          selectedAppointment={selectedAppointment}
        />
      </div>
      {showConfirmModal && (
        <ConfirmDeletePopup
          selectedAppointment={selectedAppointment}
          onCancelClick={() => {
            setShowConfirmModal(false);
            setSelectedAppointment({ date: "", time: "", reason: "" });
          }}
          onConfirmClick={handleAppointmentDelete}
        />
      )}
    </div>
  );
};

export default AppointmentsPage;
