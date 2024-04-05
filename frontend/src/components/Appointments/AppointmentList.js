// AppointmentList.js
import React from 'react';

function AppointmentList({ appointments }) {
  return (
    <div>
      <h2>Upcoming Appointments</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>
            <div>Date: {appointment.date}</div>
            <div>Time: {appointment.time}</div>
            <div>Reason: {appointment.reason}</div>
            <button onClick={() => handleCancelAppointment(appointment.id)}>Cancel</button>
            <button onClick={() => handleRescheduleAppointment(appointment.id)}>Reschedule</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentList;
