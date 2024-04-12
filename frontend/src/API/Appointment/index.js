const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const createAppointment = async ({ date, time, reason }) => {
  // Endpoint where the backend API for scheduling an appointment is listening
  const endpoint = `${backendUrl}/appointments`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // If you have authentication enabled, you may need to include an authorization header
        // 'Authorization': `Bearer ${userToken}`
      },
      body: JSON.stringify({ date, time, reason, status: "scheduled" }),
    });

    if (!response.ok) {
      // If the response is not 2xx, throw an error
      throw new Error(`Error: ${response.status}`);
    }

    // If the appointment is scheduled successfully, you can clear the form here
    // or navigate the user to another page, or fetch and update the list of appointments
    const data = await response.json();
    console.log("Appointment scheduled successfully:", data);
  } catch (error) {
    console.error("Failed to schedule appointment:", error);
  }
};

export const getAllAppointments = () => {
  return fetch(`${backendUrl}/appointments`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error fetching appointments");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching appointments:", error);
      throw error; // Rethrow the error if you want to handle it in the component
    });
};
// API/Appointment/api.js

export const deleteAppointment = async (appointmentId) => {
  const endpoint = `${backendUrl}/appointments/${appointmentId}`;

  try {
    const response = await fetch(endpoint, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // If you have authentication enabled, you may need to include an authorization header
        // 'Authorization': `Bearer ${userToken}`
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json(); // or simply return if you don't need the response body
  } catch (error) {
    console.error("Failed to delete appointment:", error);
    throw error; // So that you can handle it in the component
  }
};
