// AppointmentForm.js
import React, { useState } from 'react';

function AppointmentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    reason: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset form data after submission
    setFormData({
      date: '',
      time: '',
      reason: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" name="date" value={formData.date} onChange={handleChange} />
      <input type="time" name="time" value={formData.time} onChange={handleChange} />
      <textarea name="reason" value={formData.reason} onChange={handleChange} />
      <button type="submit">Schedule Appointment</button>
    </form>
  );
}

export default AppointmentForm;
