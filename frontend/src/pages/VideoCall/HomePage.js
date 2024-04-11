// Import React and necessary dependencies
import React from 'react';
import Layout from '../components/Appointments/Layout'; // Import the Layout component
import ScheduleForm from '../components/Appointments/SchedulePage';
 // Import the ScheduleForm component

// Define the HomePage component
const HomePage = () => {
  // Function to handle form submission
  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    // You can handle form submission logic here, like making API calls to schedule the appointment
  };

  return (
    <Layout>
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Appointment Scheduler</h2>
        <p className="text-lg">Schedule your appointments with ease.</p>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Schedule Appointment</h3>
        {/* Render the ScheduleForm component and pass onSubmit prop */}
        <ScheduleForm onSubmit={handleFormSubmit} />
      </div>
    </Layout>
  );
};

// Export the HomePage component
export default HomePage;
