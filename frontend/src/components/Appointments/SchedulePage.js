// SchedulePage.js
import React, { useState } from 'react';
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';
import AppointmentActions from './AppointmentActions';

function SchedulePage() {
  const [appointments, setAppointments] = useState([]);

  const handleSchedule = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  };

  const handleCancel = () => {
    // Logic to cancel appointment
  };

  const handleReschedule = () => {
    // Logic to reschedule appointment
  };

  return (
    <div>
      <AppointmentForm onSchedule={handleSchedule} />
      <AppointmentList appointments={appointments} />
      <AppointmentActions onCancel={handleCancel} onReschedule={handleReschedule} />
    </div>
  );
}

export default SchedulePage;
