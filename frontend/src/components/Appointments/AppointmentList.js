import React, { useEffect, useState } from "react";

const AppointmentList = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch(`${backendUrl}/appointments`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching appointments");
        }
        return response.json();
      })
      .then((data) => {
        setAppointments(data);
      })
      .catch((error) => {
        console.error("Error fetching appointments:", error);
      });
  }, [backendUrl]);
  const handleDelete = (id) => {
    // Implement the delete functionality here
    console.log(`Delete appointment with id: ${id}`);
  };

  const handleUpdate = (id) => {
    // Implement the update functionality here
    console.log(`Update appointment with id: ${id}`);
  };

  const isPastAppointment = (appointmentDate, appointmentTime) => {
    const appointmentDateTime = new Date(
      `${appointmentDate}T${appointmentTime}`
    );
    return appointmentDateTime < new Date();
  };
  return (
    <div className="max-w-4xl mx-auto mt-5">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">
        Upcoming Appointments
      </h2>
      <div className="overflow-x-auto bg-white">
        <table className="min-w-full">
          <thead className="text-white bg-gray-800">
            <tr>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Time</th>
              <th className="px-4 py-2 text-left">Reason</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr
                key={appointment._id}
                className={`border-b ${
                  isPastAppointment(appointment.date, appointment.time)
                    ? "bg-gray-200 opacity-50"
                    : "hover:bg-gray-100"
                }`}
              >
                <td className="px-4 py-2 text-left">{appointment.date}</td>
                <td className="px-4 py-2 text-left">{appointment.time}</td>
                <td className="px-4 py-2 text-left">{appointment.reason}</td>
                <td className="px-4 py-2 text-center">
                  <button
                    className="inline-flex items-center justify-center px-4 py-2 mr-2 text-base font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none"
                    onClick={() => handleUpdate(appointment._id)}
                  >
                    Update
                  </button>
                  <button
                    className="inline-flex items-center justify-center px-4 py-2 text-base font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none"
                    onClick={() => handleDelete(appointment._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentList;
