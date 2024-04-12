import React from "react";
const ConfirmDeletePopup = ({
  selectedAppointment,
  onCancelClick,
  onConfirmClick,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex flex-col w-full max-w-md p-8 m-auto bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="text-xl font-semibold">Confirm Deletion</h2>
          <p className="my-4">
            Are you sure you want to delete this appointment?
          </p>
          <ul>
            <li>Date: {selectedAppointment.date}</li>
            <li>Time: {selectedAppointment.time}</li>
            <li>Reason: {selectedAppointment.reason}</li>
          </ul>
        </div>
        <div className="flex justify-end pt-2">
          <button
            className="w-32 px-4 py-2 mr-2 text-base font-medium text-white bg-gray-500 rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={onCancelClick}
          >
            Cancel
          </button>
          <button
            className="w-32 px-4 py-2 text-base font-medium text-white bg-red-500 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            onClick={() => onConfirmClick(selectedAppointment._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeletePopup;
