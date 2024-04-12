import React from "react";
import AppointmentForm from "./AppointmentForm";

function AppointmentList({ appointments }) {
  return (
    <div>
      <h1>Appointment List</h1>
      {appointments?.length > 0 ? (
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index}>
              <strong>Date:</strong> {appointment.date}
              <br />
              <strong>Time:</strong> {appointment.time}
              <br />
              <strong>Reason:</strong> {appointment.reason}
              <br />
            </li>
          ))}
        </ul>
      ) : (
        <p>No appointments scheduled.</p>
      )}
      <AppointmentForm />
    </div>
  );
}

export default AppointmentList;
