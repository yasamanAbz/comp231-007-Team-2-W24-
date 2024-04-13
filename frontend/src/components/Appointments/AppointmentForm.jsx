import React, { useState, useEffect } from "react";
function AppointmentForm({ onSubmitAppointment, selectedAppointment }) {
  const [date, setDate] = useState(selectedAppointment?.date);
  const [time, setTime] = useState(selectedAppointment?.time);
  const [reason, setReason] = useState(selectedAppointment?.reason);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time || !reason) return;
    onSubmitAppointment({ date, time, reason });
    setDate("");
    setTime("");
    setReason("");
  };
  useEffect(() => {
    // Update form fields when selectedAppointment changes
    if (selectedAppointment) {
      setDate(selectedAppointment.date);
      setTime(selectedAppointment.time);
      setReason(selectedAppointment.reason);
    }
  }, [selectedAppointment]);
  return (
    <div className="max-w-md p-5 mx-auto my-8 bg-white border border-gray-200 rounded-lg shadow-md">
      <h1 className="mb-6 text-2xl font-semibold text-center text-gray-800">
        Schedule Appointment
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Date:
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="time"
            className="block text-sm font-medium text-gray-700"
          >
            Time:
          </label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="reason"
            className="block text-sm font-medium text-gray-700"
          >
            Reason:
          </label>
          <input
            type="text"
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 font-semibold text-white bg-[#043e64] rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Schedule Appointment
        </button>
      </form>
    </div>
  );
}

export default AppointmentForm;
