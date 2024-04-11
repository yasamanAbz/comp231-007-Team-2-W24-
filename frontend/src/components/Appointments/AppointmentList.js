import React from 'react';

function AppointmentList({ appointments }) {
  return (
    <div>
      <h2>Upcoming Appointments</h2>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            <div>Date: {appointment.date}</div>
            <div>Time: {appointment.time}</div>
            <div>Reason: {appointment.reason}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentList;
