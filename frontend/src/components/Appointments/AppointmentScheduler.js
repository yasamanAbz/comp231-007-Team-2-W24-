import React, { useState } from 'react';

// Tailwind CSS classes
const inputClasses = "appearance-none border border-gray-300 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:border-blue-500";
const buttonClasses = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";

const AppointmentScheduler = () => {
  // State variables for appointment scheduling
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [appointmentReason, setAppointmentReason] = useState('');
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);

  // Function to handle appointment submission
  const handleAppointmentSubmission = (event) => {
    event.preventDefault();
    if (appointmentDate && appointmentTime && appointmentReason) {
      // Adding appointment to upcomingAppointments array
      const newAppointment = {
        date: appointmentDate,
        time: appointmentTime,
        reason: appointmentReason
      };
      setUpcomingAppointments([...upcomingAppointments, newAppointment]);
      // Resetting form fields
      setAppointmentDate('');
      setAppointmentTime('');
      setAppointmentReason('');
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5">Appointment Scheduler</h1>

      {/* Appointment Scheduling Form */}
      <form onSubmit={handleAppointmentSubmission} className="mb-8">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Appointment Date:
          <input
            type="date"
            className={inputClasses}
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Appointment Time:
          <input
            type="time"
            className={inputClasses}
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Reason for Appointment:
          <input
            type="text"
            className={inputClasses}
            value={appointmentReason}
            onChange={(e) => setAppointmentReason(e.target.value)}
          />
        </label>
        <button type="submit" className={buttonClasses}>
          Schedule Appointment
        </button>
      </form>

      {/* Display Upcoming Appointments */}
      <div>
        <h2 className="text-xl font-bold mb-3">Upcoming Appointments</h2>
        {upcomingAppointments.length === 0 ? (
          <p>No appointments scheduled</p>
        ) : (
          <ul className="list-disc pl-5">
            {upcomingAppointments.map((appointment, index) => (
              <li key={index} className="mb-2">
                <span className="font-bold">Date:</span> {appointment.date},{' '}
                <span className="font-bold">Time:</span> {appointment.time},{' '}
                <span className="font-bold">Reason:</span> {appointment.reason}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AppointmentScheduler;
