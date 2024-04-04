import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Messaging() {
  const navigate = useNavigate();

  // State to manage user input
  const [message, setMessage] = useState("");
  const [healthTipsOptedIn, setHealthTipsOptedIn] = useState(false);
  const [reminderSet, setReminderSet] = useState(false);

  // Function to handle sending a message
  const sendMessage = () => {
    // Logic to send message to doctor
    // This could involve an API call to your backend
    console.log("Message sent:", message);
    // Clear the message input after sending
    setMessage("");
  };

  // Function to handle attaching media files
  const attachMedia = (event) => {
    // Logic to handle attaching media files
    const files = event.target.files;
    console.log("Files attached:", files);
  };

  // Function to handle scheduling appointments
  const scheduleAppointment = () => {
    // Logic to navigate to appointment scheduling page
    navigate("/schedule-appointment");
  };

  // Function to handle setting a reminder
  const setReminder = () => {
    // Simulated logic for setting a reminder
    setReminderSet(true);
  };

  // Function to handle opting in for health tips
  const optInHealthTips = () => {
    // Simulated logic for opting in for health tips
    setHealthTipsOptedIn(true);
  };

  // Function to handle accessing community forums
  const accessCommunityForums = () => {
    // Logic to navigate to community forums or discussion groups
    navigate("/community-forums");
  };

  // Quick message templates
  const quickMessageTemplates = [
    "I'm experiencing symptoms X, Y, and Z. Can you please advise?",
    "I have a question about my medication.",
    "I need to reschedule my appointment.",
    "I'm having trouble accessing my medical records.",
    "Can you provide information about treatment options for condition ABC?",
    "Thank you for your assistance.",
  ];


  return (
    <div className="grow bg-zinc-200">
      {/* Header */}
      <div className="p-4 text-center text-white bg-[#004570]">
        <h1 className="text-2xl font-bold">Messaging</h1>
      </div>

      {/* Messaging Section */}
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Message Input */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4">
            <h2 className="text-xl font-bold text-center text-cyan-700">
              Message Doctor
            </h2>
            {/* Textarea for message input */}
            <textarea
              className="w-full h-24 p-2 mt-2 border rounded-md resize-none"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {/* Button to send message */}
            <button
              className="block w-full px-4 py-2 mt-4 text-white bg-[#004570] rounded-md hover:bg-[#003252] focus:outline-none focus:bg-[#003252]"
              onClick={sendMessage}
            >
              Send Message
            </button>
          </div>
        </div>

        {/* Quick Message Templates */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4">
            <h2 className="text-xl font-bold text-center text-cyan-700">
              Quick Message Templates
            </h2>
            <ul className="mt-2">
              {quickMessageTemplates.map((template, index) => (
                <li
                  key={index}
                  className="text-gray-700 cursor-pointer hover:text-[#004570]"
                  onClick={() => setMessage(template)}
                >
                  {template}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Attach Media Files */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4">
            <h2 className="text-xl font-bold text-center text-cyan-700">
              Attach Media Files
            </h2>
            {/* Input for attaching media files */}
            <input
              type="file"
              multiple
              className="block w-full p-2 mt-2 border rounded-md"
              onChange={attachMedia}
            />
          </div>
        </div>

        {/* Set Reminder */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4">
            <h2 className="text-xl font-bold text-center text-cyan-700">
              Set Reminder
            </h2>
            {/* Button to set reminder */}
            {!reminderSet ? (
              <button
                className="block w-full px-4 py-2 mt-4 text-white bg-[#004570] rounded-md hover:bg-[#003252] focus:outline-none focus:bg-[#003252]"
                onClick={setReminder}
              >
                Set Reminder
              </button>
            ) : (
              <p className="text-center text-gray-600">Reminder is already set.</p>
            )}
          </div>
        </div>

        {/* Opt-in for Health Tips */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4">
            <h2 className="text-xl font-bold text-center text-cyan-700">
              Opt-in for Health Tips
            </h2>
            {/* Button to opt-in for health tips */}
            {!healthTipsOptedIn ? (
              <button
                className="block w-full px-4 py-2 mt-4 text-white bg-[#004570] rounded-md hover:bg-[#003252] focus:outline-none focus:bg-[#003252]"
                onClick={optInHealthTips}
              >
                Opt-in for Health Tips
              </button>
            ) : (
              <p className="text-center text-gray-600">You are already opted in for health tips.</p>
            )}
          </div>
        </div>

        {/* Access Community Forums */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4">
            <h2 className="text-xl font-bold text-center text-cyan-700">
              Access Community Forums
            </h2>
            {/* Button to access community forums */}
            <button
              className="block w-full px-4 py-2 mt-4 text-white bg-[#004570] rounded-md hover:bg-[#003252] focus:outline-none focus:bg-[#003252]"
              onClick={accessCommunityForums}
            >
              Access Community Forums
            </button>
          </div>
        </div>

        {/* Add more features/components as needed */}

      </div>
    </div>
  );
}

export default Messaging;