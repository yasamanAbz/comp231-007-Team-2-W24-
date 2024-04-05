// AppointmentScheduler.js
import React, { useState } from 'react';

function AppointmentScheduler() {
  // State for managing appointments
  const [appointments, setAppointments] = useState([]);
  // State for managing form data
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    reason: ''
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new appointment to the appointments array
    setAppointments([...appointments, formData]);
    // Reset form data
    setFormData({
      date: '',
      time: '',
      reason: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Appointment Scheduler</h1>
      {/* Form for scheduling appointments */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col mb-4">
          <label htmlFor="date" className="text-lg mb-2">Appointment Date:</label>
          <input
            type="date"
            id="date"
            className="border rounded px-4 py-2"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="time" className="text-lg mb-2">Appointment Time:</label>
          <input
            type="time"
            id="time"
            className="border rounded px-4 py-2"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="reason" className="text-lg mb-2">Reason for Appointment:</label>
          <textarea
            id="reason"
            className="border rounded px-4 py-2 h-24"
            value={formData.reason}
            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">Schedule Appointment</button>
      </form>

      {/* Display upcoming appointments */}
      <div>
        <h2 className="text-xl font-bold mb-4">Upcoming Appointments</h2>
        {appointments.length > 0 ? (
          <ul>
            {appointments.map((appointment, index) => (
              <li key={index} className="border rounded px-4 py-2 mb-2">
                <strong>Date:</strong> {appointment.date}<br />
                <strong>Time:</strong> {appointment.time}<br />
                <strong>Reason:</strong> {appointment.reason}<br />
                <button className="text-red-500 mt-2">Cancel Appointment</button>
                <button className="text-blue-500 mt-2 ml-2">Reschedule Appointment</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No upcoming appointments.</p>
        )}
      </div>
    </div>
  );
}

export default AppointmentScheduler;
