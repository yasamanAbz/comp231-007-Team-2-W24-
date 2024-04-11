import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('/api/appointments')
      .then(response => {
        setAppointments(response.data);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
  }, []);

  // Render appointments
  return (
    <div>
      <h2>Upcoming Appointments</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>
            Date: {appointment.date}, Time: {appointment.time}, Reason: {appointment.reason}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
