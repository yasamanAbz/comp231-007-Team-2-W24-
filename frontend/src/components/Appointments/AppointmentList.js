import React from 'react';

const AppointmentList = ({ appointments }) => {
  return (
    <div>
      <h2>Upcoming Appointments</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>
            <strong>Date:</strong> {appointment.date}<br />
            <strong>Time:</strong> {appointment.time}<br />
            <strong>Reason:</strong> {appointment.reason}<br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
