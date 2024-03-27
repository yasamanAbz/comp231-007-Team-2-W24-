import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="grow bg-zinc-200">
      {/* Welcome Banner */}
      <div className="p-4 text-center text-white bg-[#004570]">
        <h1 className="text-2xl font-bold">
          Welcome to Your Health Tracker App!
        </h1>
      </div>

      {/* Quick Access Tiles */}
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-4 ">
        <div
          className="bg-white rounded-lg shadow cursor-pointer "
          onClick={() => navigate("/health-tracking")}
        >
          <img src="/summary.jpg" alt="Health Summary" className="w-full" />
          <h2 className="mt-3 text-xl font-bold text-center text-cyan-700">
            Health Summary
          </h2>
          <p className="px-4 pb-4 mt-2 text-cyan-900">
            Get a quick overview of your current health status. Track your vital
            signs, monitor your fitness progress, and stay on top of your
            wellness goals.
          </p>
        </div>

        {/* Upcoming Appointments */}
        <div
          className="bg-white rounded-lg shadow cursor-pointer "
          onClick={() => navigate("/appointments")}
        >
          <img src="/appointments.jpg" alt="Upcoming Appointments" />
          <h2 className="mt-3 text-xl font-bold text-center text-cyan-700">
            Upcoming Appointments
          </h2>
          <p className="px-4 pb-4 mt-2 text-cyan-900">
            Stay organized and never miss an appointment. View your next
            scheduled appointment and easily manage your calendar to ensure
            you're always prepared for your healthcare visits.
          </p>
        </div>

        {/* Recent Messages */}
        <div
          className="bg-white rounded-lg shadow cursor-pointer "
          onClick={() => navigate("/messaging")}
        >
          <img src="/messages.jpg" alt="Recent Messages" />
          <h2 className="mt-3 text-xl font-bold text-center text-cyan-700">
            Recent Messages
          </h2>
          <p className="px-4 pb-4 mt-2 text-cyan-900">
            Stay connected with your healthcare providers. Quickly access your
            most recent messages and respond to inquiries, ensuring you're
            always up-to-date with your health communication.
          </p>
        </div>

        {/* Video Call Reminder */}
        <div
          className="bg-white rounded-lg shadow cursor-pointer "
          onClick={() => navigate("/video-calls")}
        >
          <img src="/videocalls.jpg" alt="Video Call Reminder" />
          <h2 className="mt-3 text-xl font-bold text-center text-cyan-700">
            Video Call Reminder
          </h2>
          <p className="px-4 pb-4 mt-2 text-cyan-900">
            Don't miss your next virtual consultation. Get reminders for
            upcoming video calls and easily join with a single click.
          </p>
        </div>
      </div>

      {/* Health Tips and News */}
      <div className="px-4 py-8 bg-zinc-200">
        <h2 className="pb-4 text-xl font-bold text-center text-cyan-900">
          Health Tips and News
        </h2>
        <div class="flex flex-col md:flex-row items-center bg-white p-4 rounded-lg shadow-md">
          <div class="md:w-1/2 p-4">
            <h2 class="text-lg font-semibold mb-2">
              Stay Active with Simple Exercises
            </h2>
            <p class="text-gray-600">
              Incorporating simple exercises into your daily routine can
              significantly improve your overall health. Try taking short walks,
              stretching, or doing bodyweight exercises at home. Remember,
              consistency is key to seeing results!
            </p>
          </div>
          <div class="md:w-1/2 p-4">
            <img
              class="w-full h-auto rounded-lg"
              src="/tips.jpg"
              alt="Health Tips"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
