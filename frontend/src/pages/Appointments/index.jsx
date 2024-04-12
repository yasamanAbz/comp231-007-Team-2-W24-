import React from "react";
import AppointmentList from "components/Appointments/AppointmentList";
import AppointmentForm from "components/Appointments/AppointmentForm";

const AppointmentsPage = () => {
  return (
    <div className="flex flex-wrap justify-between gap-10 p-10">
      <div className="flex-1 min-w-0">
        <AppointmentList />
      </div>
      <div className="flex-1 max-w-md min-w-0">
        <AppointmentForm />
      </div>
    </div>
  );
};

export default AppointmentsPage;
