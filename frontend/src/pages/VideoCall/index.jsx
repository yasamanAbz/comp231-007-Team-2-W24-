import React, { useState, useEffect } from "react";
import VideoCall from "components/VideoCall";
import { useAuth } from "../../contexts/AuthContext";

const VideoCallPage = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [token, setToken] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const { user } = useAuth();

  const handleConnectClick = () => {
    setIsConnected(true);
  };
  const generateToken = () => {
    fetch(`${backendUrl}/livekit/token?room=my-room&identity=${user?.email}`)
      .then((response) => response.json())
      .then((data) => setToken(data.token))
      .catch((error) => console.error("Error fetching token:", error));
  };
  useEffect(() => {
    generateToken();
  }, []);

  if (!token) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {!isConnected && (
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center flex-grow bg-gray-300">
            <img
              src="/videocalls.jpg"
              alt="Video Call Reminder"
              className="w-1/2 h-auto md:w-1/3 lg:w-1/4"
            />
          </div>
          <div className="flex flex-col items-center justify-around p-4 bg-gray-100">
            <p className="mb-4 text-lg font-semibold text-gray-700">
              If you want to connect to your healthcare provider, click "Connect
              to Call."
            </p>
            <button
              className="px-6 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
              onClick={handleConnectClick}
            >
              Connect to Call
            </button>
          </div>
        </div>
      )}
      {isConnected && <VideoCall token={token} roomName="my-room" />}
    </div>
  );
};

export default VideoCallPage;
