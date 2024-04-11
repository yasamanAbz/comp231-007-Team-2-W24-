import React, { useState } from 'react';

function AppointmentForm({ onSchedule }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time || !reason) return;
    onSchedule({ date, time, reason });
    setDate('');
    setTime('');
    setReason('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="reason">Reason:</label>
        <input type="text" id="reason" value={reason} onChange={(e) => setReason(e.target.value)} required />
      </div>
      <button type="submit">Schedule Appointment</button>
    </form>
  );
}

export default AppointmentForm;
