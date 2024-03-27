import React, { useState, useEffect } from "react";
import VideoCall from "components/VideoCall";

const VideoCallPage = () => {
  const [token, setToken] = useState("");
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const generateToken = () => {
    fetch(`${backendUrl}/livekit/token?room=my-room&identity=user1`)
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

  return <VideoCall token={token} roomName="my-room" />;
};

export default VideoCallPage;
